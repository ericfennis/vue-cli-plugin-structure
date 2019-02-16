#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Deploy Docs'

git push -f git@github.com:ericfennis/vue-cli-plugin-structure.git master:gh-pages

cd -