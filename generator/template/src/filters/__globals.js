import Vue from 'vue';

// import status from './example-filter';

/**
 *  Register filters globally
 * */
const filters = {
  // status,
};

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
