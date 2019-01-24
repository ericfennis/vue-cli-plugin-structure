import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// Import config files
import './config';

// Import SCSS and Globals
import './assets/styles/main.scss';
import './components/_globals';
import './directives/_globals';
import './filters/_globals';
import './mixins/_globals';

// Vue Init
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
