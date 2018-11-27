// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/partials/_variables.scss";
          @import "@/assets/styles/modules/_functions.scss";
          @import "@/assets/styles/modules/_mixins.scss";
        `,
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .end();
  },
};
