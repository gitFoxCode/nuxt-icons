[![nuxt-icons](https://i.imgur.com/SR1XufB.png "nuxt-icons banner")](https://github.com/gitFoxCode/nuxt-icons)
# Nuxt Icons
A module for nuxt3 that allows you to use your own SVG icons quickly and enjoyably. 

[![playground-usage](https://i.imgur.com/SMXXpVu.png "example of using icons in project")](https://github.com/gitFoxCode/nuxt-icons)

## Installation 
1. `npm i nuxt-icons`
2. add `nuxt-icons` to modules, **nuxt.config.ts**:
```javascript
import { defineNuxtConfig } from 'nuxt3'
export default defineNuxtConfig({
    modules: [
        'nuxt-icons'
      ]
})
```

## Usage
1. Create a `icons` folder in `assets`: `assets/icons`
2. Drop your icons with the **.svg** extension into the `icons` folder
3. In the project, use `<nuxt-icon name="">`, where name is the name of your svg icon from the folder

If you need to use the original color from the svg file (for example, if your icon has defs) you need to use the **fill** attribute: <br>
`<nuxt-icon name="mySuperIcon" fill />`


## What this module does
The module retrieves all svg files from the assets/icons folder, removes the height and width from them to make them scalable, and using the `<nuxt-icon>` component allows them to be used. `<nuxt-icon>` injects the SVG code directly into `<span>`. 

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

<br>

## Thoughts and ToDo's:
- Ability to load icons only by component/page in order not to waste unnecessary space if the icon is not used at the time
- Automatic svg file optimization 
- Automatic icon scaling that have non-square dimensions to maintain their proportions (maybe with preserveAspectRatio)
- Usable for previous nuxt versions
- Loading icons into symbol svg sprite *(rather worsens performance)*