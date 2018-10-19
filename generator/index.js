const fs = require('fs-extra')

module.exports = (api, options, rootOptions) => {

  if (!api.hasPlugin('vue-router')) {
    api.extendPackage({
      devDependencies: {
        "vue-router": "^3.0.1"
      }
    })
  }

  if (!api.hasPlugin('vuex')) {
    api.extendPackage({
      devDependencies: {
        "vuex": "^3.0.1"
      }
    })
  }

  if (!api.hasPlugin('node-sass')) {
    api.extendPackage({
      devDependencies: {
        "node-sass": "^4.9.0",
      }
    })
  }

  if (!api.hasPlugin('sass-loader')) {
    api.extendPackage({
      devDependencies: {
        "sass-loader": "^7.0.1",
      }
    })
  }

  try {
    fs.emptyDirSync('./src')
    api.render('./template')
  } catch (err) {
    console.error(err)
  }
  
}
