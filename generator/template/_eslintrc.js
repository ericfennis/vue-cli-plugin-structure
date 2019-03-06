// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node:true
  },
  extends: ['@vue/airbnb', '@vue/prettier', 'plugin:vue/essential', 'plugin:vue/recommended'],
  plugins: ['import', 'prettier', 'vue'],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
      node: {
        paths: ['@'],
        extensions: ['.js', '.vue', '.scss']
      },
    },
  },
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
        ts: 'never',
      },
    ],
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0,
    // only for use with getter-setters
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'all', printWidth: 100, tabWidth: 2 },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        'prettier/prettier': ['off'],
      },
    },
  ],
};
