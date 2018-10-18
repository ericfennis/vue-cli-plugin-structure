import Vue from 'vue';

export default Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: el => {
    el.focus();
  },
});
