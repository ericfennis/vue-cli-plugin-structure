module.exports = {
  title: 'Vue Structure',
  description: 'A Vue CLI plugin to generate a project structure before starting a Vue project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    displayAllHeaders: true,
    repo: 'ericfennis/vue-cli-plugin-structure',
    docsDir: 'docs',
    docsBranch: 'feature/vue-press',
    editLinks: true,
    lastUpdated: 'Last Updated',
    editLinkText: 'Edit this page on GitHub',
    sidebarDepth: 0,
    sidebar: {
      '/guide/': [
        {
          title: 'Getting Started',
          sidebarDepth: 0,
          collapsable: false,
          path: '/guide/',
          children: [
            '',
            'installation',
            'project-structure',
          ]
        },
        {
          title: 'Using Vue Structure',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            'components',
            'views',
            'router',
            'store',
            'filter-directives-mixins',
            'assets',
            'config',
          ]
        },
      ],
    },
    // '/': {
    //   sidebar: 'auto'
    // }
    //sidebar: true,
    // sidebar: {
    //   '/guide/': [
    //     '/guide/',
    //     '/guide/installation',
    //   ],
    // },
  },
}