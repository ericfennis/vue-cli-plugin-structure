---
description: 'Filters, directives and mixins.'
---

# Filters, Directives & Mixins

​Filters, Directives & Mixins, each of them have their own folder. In the folder there's located an index.js, \_globals.js file and your ​Filters, Directives & Mixins. Index.js is for indexing all the filters, directives, mixins. Globals file is for register Filters, Directives and mixins globally. 

## The Folders

``` sh
📂src
├── 📂filters
│   ├── _globals.js
│   ├── {my-filter}.js
│   └── index.js
│ 
├── 📂directives
│   ├── _globals.js
│   ├── {my-directive}.js
│   └── index.js
│ 
├── 📂mixins
│   ├── _globals.js
│   ├── {my-mixin}.js
│   └── index.js
..
```

## Adding a filter/directive/mixin to a component

You can simply import your filter/directive/mixin in your component file and add it to the filters/directives/mixins object in the Vue Javascript. This is pure Vue, this doesn't require other libraries.

```javascript
import { myFilter, myOtherFilter } from '@/filters';
import { myDirective, myOtherDirective } from '@/directives';
import { myMixin, myOtherMixin } from '@/mixins';

export default {
  name: 'My Component',
  data() {
    return {
      message: 'Hello world!'
    };
  },
  filters: {
    myFilter,
    myOtherFilter,
  },
  directives: {
    myDirective,
    myOtherDirective,
  },
  mixins: {
    myMixin,
    myOtherMixin,
  },
};

```

### Register a filter/directive/mixin globally

In the `_globals.js` you can add add filters/directives/mixins to the global object. Make sure that the import module is also added to the filters/directives/mixins object.

```javascript
import Vue from 'vue';

import {
  myFilter,
} from '.';

/**
 *  Register filters globally
 * */
const filters = {
  myFilter,
};

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

```

::: danger
Watch out registering **Mixins** Globally, by making Mixins globally it will add the mixin data to each Vue Component Node. Read [Vue Documentation](https://vuejs.org/v2/guide/mixins.html#Global-Mixin).
:::

### Generate Filters, Directives & Mixins using the Generator CLI

If you using the structure generator you can generate filters, directives and mixins bij running the generator. You can give a name, and choose if you want to have the filter/directive/mixin globally. It will automatically generate:

* a empty filter/directive/mixin
* the import in the index file
* _optional:_ register it globally.



