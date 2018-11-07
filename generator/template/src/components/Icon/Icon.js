const svgContext = require.context('../../assets/icons/', false, /\.svg/);

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return svgContext(`./${this.name}.svg`);
    },
  },
};
