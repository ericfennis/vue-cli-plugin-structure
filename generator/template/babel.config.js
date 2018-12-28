module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'transform-imports',
      {
        '@/components': {
          /* eslint-disable-next-line no-template-curly-in-string */
          transform: '@/components/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
};
