import Vue from 'vue';

export default Vue.mixin('hello', {
  created: () => {
    this.hello();
  },
  methods: {
    hello() {
      // eslint-disable-next-line
      console.log('hello from mixin!');
    },
  },
});
