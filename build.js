const path = require("path");
const fs = require("fs-extra");
const walk = require('walk');

const dist = './dist';

const excludeByBuild = [
  'src/node_modules',
  'src/.git',
  'src/public',
  'src/.browserslistrc',
  'src/package.json',
  'src/postcss.config.js',
  'src/preset.json',
  'src/yarn.lock',
];

fs.emptyDir(dist)
.then(() => {
  copy();
})
.catch(err => {
  console.error(err)
});

const copy = () => {
  fs.copy(
    './src', 
    dist,
    { 
      filter: src => !excludeByBuild.includes(src)
    },
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("success!");
        walker();
      }
  });
}

const walker = () => {
  walk
  .walk(dist)
  .on("file", (root, file, next) => {
    const prefix = file.name.charAt(0);
    if(prefix === '_' || prefix === '.'){
      //console.log(root);
      console.log(`\nFound file:\t`,file.name);
      renameFile(root, file, prefix)
      .then(response => {
        console.log(`Renamed it to:\t`,response);
        next();
      })
      .catch(error => {
        console.error(error);
      })
      
    } else {
      next();
    }
    
  })
  .on("end", () => {
    console.log(`\n======================================\n TEMPLATE BUILDED !!!`)
  })
}

const renameFile = (root, file, prefix) => {
  return new Promise(
    (resolve, reject) => {
      const renamedFilename = 
        prefix === '_' ? `_${file.name}` :
        prefix === '.' ? '_' + file.name.substring(1)
        : reject('error');
      
      fs.rename(`${root}/${file.name}`, `${root}/${renamedFilename}`, function(err) {
        if ( err ) reject(err)
        resolve(renamedFilename);
      });
    }
  )
}
