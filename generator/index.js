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

const newDependencies = {
  "vue-router": "^3.0.1",
  "vuex": "^3.0.1",
  "node-sass": "^4.9.0",
  "sass-loader": "^7.0.1",
  "@vue/eslint-config-airbnb": "^4.0.0",
  "@vue/eslint-config-prettier": "^3.0.5",
  "babel-plugin-transform-imports": "^1.5.1",
  "eslint-plugin-html": "^4.0.1",
  "eslint-friendly-formatter": "^4.0.1",
  "svg-inline-loader": "^0.8.0",
}

module.exports = (api, options, rootOptions, opts) => {

  Object.keys(newDependencies).forEach( dependencyName => {
    if (!api.hasPlugin(dependencyName)) {
      api.extendPackage({
        "devDependencies": {
          [dependencyName] : newDependencies[dependencyName]
        }
      })
    }
  });

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
          console.log('successfully deleted', file);
        } catch (err) {
          console.error(err); 
        }
      }
    })
  })

  api.render('./template')
}