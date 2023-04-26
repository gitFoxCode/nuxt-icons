import { Nuxt } from '@nuxt/schema/dist/index'
import chalk from 'chalk'
import { saveGeneratedFile } from './output'
import { constructIconNames } from './parser'

type CreateTypedIconsArgs = {
  nuxt: Nuxt;
  location: string | null;
  fileExtension: string;
  isHookCall?: boolean;
};

export async function CreateTypedIcons ({
  nuxt,
  location,
  fileExtension,
  isHookCall = false
}: CreateTypedIconsArgs): Promise<void> {
  try {
    if (!isHookCall) {
      if (location) {
        nuxt.hook('builder:watch', (event, watchedPath) => {
          if (watchedPath.startsWith(location)) {
            CreateTypedIcons({ nuxt, location, fileExtension, isHookCall: true })
          }
        })
      }

      nuxt.hook('modules:done', () => {
        CreateTypedIcons({ nuxt, location, fileExtension, isHookCall: true })
      })

      return
    }

    if (location) {
      const iconNames = await constructIconNames(nuxt.options.rootDir, location, fileExtension)
      await saveGeneratedFile(nuxt, iconNames)
    } else {
      await saveGeneratedFile(nuxt, null)
    }
  } catch (e) {
    console.error(chalk.red('Error while generating icons definition model'), '\n' + e)
  }
}
