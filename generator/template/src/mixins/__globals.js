import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  // exampleMixin,
} from '.';

/**
 *  Register mixins globally
 * */
const mixins = {
  // exampleMixin,
};

Object.keys(mixins).forEach(key => Vue.mixin(mixins[key]));
