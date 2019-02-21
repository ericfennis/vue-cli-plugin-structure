# Config

The config folder you can configure base setting for libraries. By default you will find here a vue.js dat configures Vue.

## Example of a Vue.js config file

```javascript
import Vue from 'vue';
import Axios from 'axios';
import MyVuePlugin from 'MyVuePlugin';

// Vue Config
Vue.config.productionTip = false;

// Vue Prototype Variables
Vue.prototype.$filters = Vue.options.filters;
Vue.prototype.$http = Axios;

// Vue Plugins
Vue.use(MyVuePlugin);
```

## Adding config files

If you want to add new config files you can create new .js files and import them in the index.js file. They doesn't need to exported because it will import it as a file in main.js.
