# Store

## The store folder

The store folder includes an index file for indexing the store.js file, a store.js for initializing the store and a modules folder for store modules. 

``` text
📂src
├── 📂store
│   ├── index.js
│   ├── store.js
│   └── 📂modules
│       ├── 📂app
│       │   ├── app.js
│       │   └── index.js
│       └── index.js
..
```

## Adding Store modules

The store modules are imported with the index.js file located in the store folder. If you want to add more stores you can create a new folder with store javascript in the modules folder and add add the new store in the index.js in the store module folder:

```javascript
// Example code in ./src/store/modules/index.js

export { default as app } from './app';
export { default as account } from './account';
export { default as products } from './products';

```

## The Store module

By the default there is added an app store module located in the modules folder. By default the store module is namespaced. More information about that read [Vuex Documentation](https://vuex.vuejs.org/guide/modules.html#namespacing).

## An example of using the store.

```javascript
export const types = {
  MENU_OPEN: `menuOpen`,
  MENU_CLOSE: `menuClose`,
};

export default {
  namespaced: true,
  state: {
    menuOpen: false,
  },
  getters: {
    [types.MENU_OPEN]: state => state.menuOpen,
  },
  mutations: {
    // MENU
    [types.MENU_OPEN](state) {
      state.menuOpen = true;
    },
    [types.MENU_CLOSE](state) {
      state.menuOpen = false;
    },
  },
  actions: {
    toggleMenu({ commit, state }) {
      if (state.menuOpen) {
        commit(types.MENU_CLOSE);
      } else {
        commit(types.MENU_OPEN);
      }
    },
  },
};

```

## Example for using the store in a component

```javascript
import { mapGetters, mapActions } from 'vuex';
import { types } from '../../store/modules/app';

export default {
  name: 'ExampleComponent',
  computed: {
    ...mapGetters('app', {
      isMenuOpen: types.MENU_OPEN,
    }),
  },
  methods: {
    ...mapActions('app', [
      toggleMenu,
    ]),
  },
}

```

### Using the Vue Structure Generator

If you using the structure generator you can generate stores fro  you. It will ask you a name and it generates a new store folder and add it to the store modules index.js file.

For more info check the [Generator Guide](./the-generator.md).

