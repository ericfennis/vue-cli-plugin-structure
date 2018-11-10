import Vue from 'vue';

/* eslint-disable import/prefer-default-export,import,prettier/prettier */
import {
  // exampleFilter,
} from '.';

/**
 *  Register filters globally
 * */
const filters = {
  // exampleFilter,
};

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
