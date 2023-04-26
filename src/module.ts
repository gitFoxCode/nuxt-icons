import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'
import { CreateTypedIcons } from './generator'

export interface ModuleOptions {
  // dir: string
  /**
   * Enables path autocomplete and path validity for programmatic validation
   *
   *  @default true
   */
  pathCheck?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-icons',
    configKey: 'nuxtIcons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    pathCheck: true
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addComponent({
      name: 'nuxt-icon',
      global: true,
      filePath: resolve('./runtime/components/nuxt-icon.vue')
    })

    // Force register of type declaration
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({ path: resolve(nuxt.options.buildDir, 'nuxt-icons.d.ts') })
    })

    if (options.pathCheck) {
      CreateTypedIcons({ nuxt, location: 'assets/icons', fileExtension: 'svg' })
    } else {
      CreateTypedIcons({ nuxt, location: null, fileExtension: '' })
    }
  }
})
