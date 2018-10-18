import Vue from 'vue';
import App from './App/App.vue';
import router from './router';
import store from './store';

// Import Modules
import './assets/styles/main.scss';
import './directives';
import './filters';
import './mixins';

// Vue Init
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
