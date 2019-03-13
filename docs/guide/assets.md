# Assets

Assets folder is for assets accross the project, as fonts, icons, images and styles.

```text
├── 📂assets
│   ├── 📂fonts
│   ├── 📂icons
│   ├── 📂images
│   └── 📂styles
│
..
```

## Fonts

Fonts you want to load in you can use the fonts folder to place your webfonts. To load the fonts in the project use the the SASS file in `./src/assets/styles/partials/_fonts.scss`.

## Icons

This folder you can use for SVG icons. To use the SVG icons in your project you can use the global Icon component located in the components folder. 

```bash
├── 📂assets
│    ├── 📂icons
│    │   ├── example.svg
│    ..  └── my-icon.svg
..
```

### Using the `<Icon/>` component

The icon component is **registered globally**, so you don't need to import it in your Vue component again. To use the Icon component: use the filename of the svg and fill it in the the name prop. Omit the file extension,

```html
<Icon name="vue" />
```

## Images

In the images you can place your images you use in the project. When building the images will automatically moved by Vue CLI to a `img` folder in the dist folder.

To link images in your components or views you can use:

```vue
<template>
  <div class="example-component">
    <h3>Example Component</h3>
    <img src="@/assets/images/photo.jpeg">
  </div>
</template>
```

## Styles

In the you will find the styling for the Vue Project. Styling is in [Sass](https://sass-lang.com/).

### Folders

In the styles folder you will find 5 folders:

- layout
- partials
- variables
- modules
- vendor

#### Layout folder

The style files in the layout folder are for the base styling of the app. For example all the button stylings in your app you can write it in the `_button.scss` file. 

The `_base.scss` file is for writing your base stylings.

#### Partials folder

This folder is for partial styling files such as: **Animations.scss**, **Reset.scss**, **Fonts.css**

#### Variables folder

This folder is for all the variables you want to use in the project. Because you can have a lot of diffrent variables for colors, typography etc. There is made for each type of variable a different file.

::: tip Variables in Vue Components.
All the variables defined in these files are globally imported, you can use them in your components.
:::

If you want to add more variables files, you can add them to the `main.scss` and `globals.scss` files.

#### Modules folder

This folder is for sass modules like `mixins` and `functions` , here you can define your sass Mixins and Functions. 

By default there is added a Sass mixin for media queries.

::: tip Mixins & Functions in Vue Components.
Mixins and Functiuons are globally imported, you can use them in your components.

:::

#### Vendor folder

This folder is for styling from vendor plugins, like styling from node_modules or other stylings.

You can add vendor styling from node_modules like this:

```scss
@import "~[node_module]/path/to/css";
```

### Globals.scss

In this file all the sass files are importer that will globally imported in all the components files.
