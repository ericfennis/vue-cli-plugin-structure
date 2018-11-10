import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  Icon,
} from '.';

/**
 *  Register components globally
 * */
const components = {
  Icon,
};

Object.keys(components).forEach(key => Vue.component(key, components[key]));
