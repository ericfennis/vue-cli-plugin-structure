import Vue from 'vue';

// import exampleMixin from './example-mixin';

/**
 *  Register mixins globally
 * */
const mixins = {
  // exampleMixin,
};

Object.keys(mixins).forEach(key => Vue.mixin(mixins[key]));
