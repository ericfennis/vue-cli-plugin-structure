// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/globals.scss";`,
      },
    },
  },
  chainWebpack: config => {
    // SVG Loader
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .end();
  },
};
