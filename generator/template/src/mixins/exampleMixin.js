export default {
  mounted() {
    this.hello();
  },
  methods: {
    hello() {
      // eslint-disable-next-line
      console.log('hello from mixin!');
    },
  },
};
