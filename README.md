<p align=center><img width="410" src="https://raw.githubusercontent.com/ericfennis/vue-structure/4bff88983d079a288be98b0adcb5cc00e43cecc7/src/assets/images/vue-structure.png" alt="Vue Structure Logo"></p>

# Vue CLI Structure
A Vue CLI Plugin to generate a project structure for your vue project. Project structure render based on the [Vue Structure](https://github.com/ericfennis/vue-structure) project structure.

Vue structure is a project boilerplate for Vue CLI. It provides a clean code structure to develop fast and expandable Vue Projects.

## Installation
``` bash
# Create project
vue create my-project
```
``` bash
# Go into your new folder
cd my-project
```
``` bash
# Add project structure
vue add structure
```
``` bash
# Start Developing!
yarn serve
```

## Documentation

[Vue Structure Documentation](https://ericfennis.gitbook.io/vue-structure/)
<br/>
<hr/>

## Features
* Router
* Store (State Management with modules)
* Directives folder (with globals file)
* Filters folder (with globals file)
* Mixins folder (with globals file)
* Views folder (with "404 Error Page")
* Asset folder included: fonts, icons, images and SCSS files.
* *-Optional-* A CLI Generator to generate: Components, Views, Routes, Stores, Filters, Directives, Mixins. [Vue Structure Generator](https://github.com/ericfennis/vue-cli-plugin-structure-generator)

## Packages
* [Vue CLI](https://cli.vuejs.org/)
* [Vuex](https://github.com/vuejs/vuex)
* [Vue Router](https://github.com/vuejs/vue-router)
* [SCSS](https://github.com/sass/sass)
* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)


## Generated project structure:
``` bash
.
├── .env
├── .eslintrc.js
├── .prettierrc
├── vue.config.js
├── 📂 public
│   ├── favicon.ico
│   └── index.html
└── 📂 src 
    ├── main.js
    ├── 📂 App 
    │   ├── App.js
    │   ├── App.scss
    │   ├── App.vue
    │   └── index.js
    ├── 📂 assets
    │   ├── 📂 fonts
    │   ├── 📂 icons
    │   │   └── vue.svg
    │   ├── 📂 images
    │   └── 📂 styles
    │       ├── main.scss
    │       ├── 📂 modules
    │       │   ├── _functions.scss
    │       │   └── _mixins.scss
    │       ├── 📂 partials
    │       │   ├── _animations.scss
    │       │   ├── _base.scss
    │       │   ├── _buttons.scss
    │       │   ├── _form.scss
    │       │   ├── _grid.scss
    │       │   ├── _icons.scss
    │       │   ├── _reset.scss
    │       │   ├── _responsive.scss
    │       │   ├── _snippets.scss
    │       │   ├── _typography.scss
    │       │   └── _variables.scss
    │       ├── print.scss
    │       └── 📂 vendor
    │           └── _vendor.scss
    ├── 📂 components
    │   ├── 📂 ExampleComponent
    │   │   ├── ExampleComponent.js
    │   │   ├── ExampleComponent.scss
    │   │   ├── ExampleComponent.vue
    │   │   └── index.js
    │   ├── 📂 Icon
    │   │   ├── Icon.js
    │   │   ├── Icon.scss
    │   │   ├── Icon.vue
    │   │   └── index.js
    │   ├── _globals.js
    │   └── index.js
    ├── 📂 config
    │   └── config.js
    ├── 📂 directives
    │   ├── _globals.js
    │   ├── example-directive.js
    │   └── index.js
    ├── 📂 filters
    │   ├── _globals.js
    │   ├── example-filter.js
    │   └── index.js
    ├── 📂 mixins
    │   ├── _globals.js
    │   ├── example-mixin.js
    │   └── index.js
    ├── 📂 router
    │   ├── index.js
    │   ├── router.js
    │   └── routes.js
    ├── 📂 store
    │   ├── index.js
    │   ├── store.js
    │   └── 📂 modules
    │       ├── app
    │       │   ├── app.js
    │       │   └── index.js
    │       └── index.js
    └── 📂 views
        ├── 📂 Home
        │   ├── Home.js
        │   ├── Home.scss
        │   ├── Home.vue
        │   └── index.js
        ├── 📂 NotFound
        │   ├── NotFound.js
        │   ├── NotFound.scss
        │   ├── NotFound.vue
        │   └── index.js
        └── index.js
```

