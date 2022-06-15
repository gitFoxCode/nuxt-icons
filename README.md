[![nuxt-icons](https://i.imgur.com/SR1XufB.png "nuxt-icons banner")](https://github.com/gitFoxCode/nuxt-icons)

# Nuxt Icons

A module for nuxt3 that allows you to use your own SVG icons quickly and enjoyably.

[![playground-usage](https://i.imgur.com/SMXXpVu.png "example of using icons in project")](https://github.com/gitFoxCode/nuxt-icons)

## What this module does

The module retrieves all svg files from the assets/icons folder, removes the height and width from them to make them scalable, and using the `<nuxt-icon>` component allows them to be used. `<nuxt-icon>` injects the SVG code directly into `<span>`.

## Features

- Easy SVG icon management ✅
- HMR (You don't have to reset the project to reload the icons) ✅
- Ability to manipulate icons just like fonts, e.g. using `color`, `font-size` instead of `fill`,`width`,`height` ✅
- Ability to use the original icon color scheme or custom colors for complex icons using the `fill` & `stroke` attributes ✅

## Installation

1. `npm i nuxt-icons`
2. add `nuxt-icons` to modules, **nuxt.config.ts**:

```javascript
import { defineNuxtConfig } from "nuxt3";
export default defineNuxtConfig({
  modules: ["nuxt-icons"],
});
```

## Usage

1. Create a `icons` folder in `assets`: `assets/icons`
2. Drop your icons with the **.svg** extension into the `icons` folder
3. In the project, use `<nuxt-icon name="">`, where name is the name of your svg icon from the folder

### Subfolders

If you would like to use some more complicated folder arrangement you will have to use naming similar to what you may know from nuxt when creating subfolders in components.

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
<nuxt-icon name="AdminBadge"></nuxt-icon>
and
<nuxt-icon name="UserBadge"></nuxt-icon>
```

_Note: If you are using an icon pack that has sub folders, simply add the names of the subfolders into the `name` attribute_
_For a folder structure of `Iconpack > General > Admin` you would use:_

```html
<nuxt-icon name="IconpackGeneralAdminBadge" />
```

### Attributes

Attributes are available to fine tune various aspects of your icons such as `fill`, `stroke`, `width`,`height`.

#### fill

If you want to overwrite the original `fill` color from the svg file (for example, if your icon has defs) you need to apply the **fill** attribute:

`<nuxt-icon name="mySuperIcon" fill />`

The SVG's `fill` color will now be set to the text color.

#### stroke

If you want to overwrite the original `stroke` color from the svg file (for example, if your icon has defs) you need to apply the **fill** attribute:

`<nuxt-icon name="mySuperIcon" stroke />`

The SVG's `stroke` color will now be set to the text color.

#### width

By default, all icons are rendered with a width of `1.5rem` and an aspect ratio of 1:1. (`1.5rem` == `24px` which is the standard sizing for most icon packs)
To set the width you need to apply the **width** attribute and give it a dimension including measuring unit:

`<nuxt-icon name="mySuperIcon" width="24px" />`

`<nuxt-icon name="mySuperIcon" width="2rem" />`

#### height

By default, all icons are rendered with a maximum height of `100%` of the containing div.
To set the height you need to apply the **height** attribute and give it a dimension including measuring unit:

`<nuxt-icon name="mySuperIcon" height="12px" />`

`<nuxt-icon name="mySuperIcon" height="1rem" />`

#### class

All clases applied to `<nuxt-icon>` will be passed to the icon component.
For example: To set the icon `stroke` color:

`<nuxt-icon name="mySuperIcon" stroke class="myCssClass" />`

_Notes: If your icon is not using 1:1 Aspect Ratio, you may need to set both `width` and `height` attributes to ensure the icon is sized correctly_

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

## Thoughts and ToDo's:

- Ability to load icons only by component/page in order not to waste unnecessary space if the icon is not used at the time
- Automatic svg file optimization
- Automatic icon scaling that have non-square dimensions to maintain their proportions (maybe with preserveAspectRatio)
- Usable for previous nuxt versions
- Loading icons into symbol svg sprite _(rather worsens performance)_

A big thank you to [@Diizzayy](https://github.com/Diizzayy) for his invaluable help in developing the project
