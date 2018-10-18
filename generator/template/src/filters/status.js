import Vue from 'vue';

export default Vue.filter('status', value => (value ? 'active' : 'inactive'));
