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

Fonts you want to load in you can use the fonts folder to place your webfonts. To load the fonts in the project use the the SASS file in `./src/assets/styles/partials/_fonts.scss` . 

## Icons

This folder you can use for SVG icons. To use the SVG icons in your project you can use the global Icon component located in the components folder. 

### Using the `<Icon/>` component

The icon component is **registered globally**, so you don't need to import it in your Vue component again. To use the Icon component: use the filename of the svg and fill it in the the name prop. Omit the file extension,

```html
<Icon name="vue" />
```
