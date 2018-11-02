const fs = require('fs')

const originalFiles = [
  'src/App.vue',
  'src/router.js',
  'src/store.js',
  'src/assets/logo.png',
  'src/components/HelloWorld.vue',
  'src/views/About.vue',
  'src/views/Home.vue',
]

let srcFileList = [];

module.exports = (api, options, rootOptions, opts) => {

  if (!api.hasPlugin('vue-router')) {
    api.extendPackage({
      dependencies: {
        "vue-router": "^3.0.1"
      }
    })
  }

  if (!api.hasPlugin('vuex')) {
    api.extendPackage({
      dependencies: {
        "vuex": "^3.0.1"
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

  api.extendPackage({
    devDependencies: {
      "eslint-plugin-html": "^4.0.1",
      "eslint-config-airbnb-base": "^13.1.0",
      "eslint-config-prettier": "^3.1.0",
      "eslint-plugin-import": "^2.14.0",
      "eslint-plugin-prettier": "^3.0.0",
      "eslint-friendly-formatter": "^4.0.1",
      "svg-inline-loader": "^0.8.0",
      "sass-loader": "^7.0.1",
    }
  })

  api.postProcessFiles(files => {
    const fileList = Object.keys(files);
    srcFileList = fileList.filter(file => /^src\//.test(file));
  })

  api.onCreateComplete(() => {
    srcFileList.forEach(file => {
      if(originalFiles.indexOf(file) >= 0) {
        const currentPath = api.resolve(file)
        try {
          fs.unlinkSync(currentPath);
          console.log('successfully deleted '+file);
        } catch (err) {
          console.error(err); 
        }
      }
    })
  })

  api.render('./template')
}