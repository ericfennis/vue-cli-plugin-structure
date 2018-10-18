import Vue from 'vue';
import VueTypes from 'vue-types';

// Vue Config
Vue.config.productionTip = false;
Vue.prototype.$filters = Vue.options.filters;

// disable sensible defaults of vue-types
VueTypes.sensibleDefaults = false;
