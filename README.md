[![nuxt-icons](https://i.imgur.com/67g6UGS.png "nuxt-icons banner")](https://github.com/gitFoxCode/nuxt-icons)
# Nuxt Icons
A module for Nuxt 3 that allows you to use your own SVG icons quickly and enjoyably. 

[![playground-usage](https://i.imgur.com/SMXXpVu.png "example of using icons in project")](https://github.com/gitFoxCode/nuxt-icons)

## Installation 
1. `npm i nuxt-icons`
2. add `nuxt-icons` to modules, **nuxt.config.ts**:
```javascript
export default defineNuxtConfig({
    modules: ['nuxt-icons']
})
```

## Usage
1. Create a `icons` folder in `assets`: `assets/icons`
2. Drop your icons with the **.svg** extension into the `icons` folder
3. In the project, use `<nuxt-icon name="">`, where name is the name of your svg icon from the folder

If you need to use the original color from the svg file (for example, if your icon has defs) you need to use the **filled** attribute: <br>
`<nuxt-icon name="mySuperIcon" filled />`

### Subfolders
If you would like to use some more complicated folder arrangement you will have to use paths from /icons

If you have a svg icon in nested directories such as:
```
📁icons
  └📁admin
  ⠀⠀└ badge.svg
  └📁user
  ⠀⠀└ badge.svg
```
then the icons's name will be based on its own path directory and filename. Therefore, the icon's name will be:
```html
<nuxt-icon name="admin/badge"> and <nuxt-icon name="user/badge">
```
## I don't like the basic styles that are assigned to the icons!
The styles that have been created for the icons look as follows: 
```css
width: 1em;
height: 1em;
margin-bottom: 0.125em;
vertical-align: middle;
```
You can easily change these styles using regular CSS for example in your index.vue file:
```vue
<style>
.nuxt-icon svg{
  margin-bottom: 0;
}
</style>
```

## What this module does
The module retrieves all svg files from the assets/icons folder, overwrites the height and width from them to make them scalable, and using the `<nuxt-icon>` component allows them to be used. `<nuxt-icon>` injects the SVG code directly into `<span>`. 

## Features
- Easy SVG icon management ✅
- HMR (You don't have to reset the project to reload the icons) ✅
- Ability to manipulate icons just like fonts, e.g. using `color`, `font-size` instead of `fill`,`width`,`height` ✅
- Ability to use the original color scheme for complex icons using the `filled` attribute ✅
- Icon only loads if used ✅

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

<br>

## Thoughts and ToDo's:
- Automatic svg file optimization 
- Automatic icon scaling that have non-square dimensions to maintain their proportions (maybe with preserveAspectRatio)
- <del>Usable for previous nuxt versions</del> (just use [something like this](https://github.com/gitFoxCode/TaleGalaxy/blob/main/client/src/components/SvgIcon.vue))
- If a lot of the same icons are used on the page create a separate svg sprite (significant improvement in performance)

A big thank you to [@Diizzayy](https://github.com/Diizzayy) for his invaluable help in developing the project 