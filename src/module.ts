import { promises as fsp } from 'fs'
import { defineNuxtModule, createResolver, resolveFiles, addComponentsDir, addTemplate } from '@nuxt/kit'

export interface ModuleOptions {
  ///
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-icons',
    configKey: 'NuxtIcons',
    compatibility: {
      nuxt: '^3.0.0-rc.3'
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
          `export const NuxtIcons = ${JSON.stringify(Object.fromEntries(ctx.icons))}`
      ].join('\n')
    })

    nuxt.hook('autoImports:extend', (autoImports) => {
      autoImports.push(
        {
          name: 'NuxtIcons',
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
