import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  // exampleDirective,
} from '.';

/**
 *  Register directives globally
 * */
const directives = {
  // exampleDirective,
};

Object.keys(directives).forEach(key => Vue.directive(key, directives[key]));
