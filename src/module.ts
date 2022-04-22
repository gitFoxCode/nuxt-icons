import { promises as fsp } from 'fs'
import { defineNuxtModule, createResolver, resolveFiles, addComponentsDir, addTemplate, resolvePath } from '@nuxt/kit'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-icons',
    configKey: 'NuxtIcons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const iconResolver = createResolver(nuxt.options.srcDir).resolve('assets/icons')

    nuxt.options.build.transpile.push(resolve('runtime'))

    addComponentsDir({ path: resolve('runtime/components') })

    const ctx = { icons: new Map() }

    addTemplate({
      write: true,
      filename: 'nuxticons.mjs',
      getContents: () => [
          `export const NuxtIcons = ${JSON.stringify(Object.fromEntries(ctx.icons))}`,
          'export const NuxtIconsKeys = JSON.stringify(Object.keys(NuxtIcons))'
      ].join('\n')
    })

    nuxt.hook('autoImports:extend', (autoImports) => {
      autoImports.push(
        {
          name: 'NuxtIcons',
          from: '#build/nuxticons'
        }, { // For dev purposes only:
          name: 'NuxtIconsKeys',
          from: '#build/nuxticons'
        })
    })

    async function scanIcons () {
      ctx.icons.clear()

      const files = await resolveFiles(iconResolver, '**/*.svg')

      for await (const entry of files) {
        const icon = await fsp.readFile(entry, 'utf8')

        if (!icon) { continue }

        const folders = entry.split('/')
        const iconsFolderIndex = (folders.findIndex(pathname => pathname === 'assets')) + 1
        let iconsDirs = folders.slice(iconsFolderIndex + 1)
        if (iconsDirs.length > 1) {
          iconsDirs = iconsDirs.map(name => name.charAt(0).toUpperCase() + name.slice(1))
        }
        const name = iconsDirs.join('').slice(0, -4)
        // const name = entry.split('/').pop().replace(/\.([\s\S]*)$/, '')
        const svg = icon.replace(/width="(\d+\.?\d*)"/gmi, '').replace(/height="(\d+\.?\d*)"/gmi, '')

        ctx.icons.set(name, svg)
      }
    }

    nuxt.hook('builder:watch', async (event, path) => {
      if (!path.includes(iconResolver) && !path.match(/\.(svg)$/)) { return }
      await scanIcons()
      await nuxt.callHook('builder:generateApp')
    })

    await scanIcons()
  }
})
