import Vue from 'vue';

// import focus from './example-directive';

/**
 *  Register directives globally
 * */
const directives = {
  // focus,
};

Object.keys(directives).forEach(key => Vue.directive(key, directives[key]));
