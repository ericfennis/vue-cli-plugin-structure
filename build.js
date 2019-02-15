const path = require("path");
const fs = require("fs-extra");

const srcFolder = '/src';
const distFolder = '/dist';

fs.copySync(__dirname+srcFolder, __dirname+distFolder);


