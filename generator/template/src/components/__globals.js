import Vue from 'vue';

import Icon from './Icon';

/**
 *  Register components globally
 * */
const components = {
  Icon,
};

Object.keys(components).forEach(key => Vue.component(key, components[key]));
