module.exports = {
  title: 'Vue Structure',
  description: 'A Vue CLI plugin offering the missing project structure to work in.',
  head: [
    ['link', { rel: 'shortcut icon', href: `/favicon.ico` }],
  ],
  base: '/vue-cli-plugin-structure/',
  ga: 'UA-134637770-1',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    displayAllHeaders: true,
    repo: 'ericfennis/vue-cli-plugin-structure',
    docsDir: 'docs',
    docsBranch: 'docs',
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
        {
          title: 'The generator',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            'the-generator',
          ]
        },
      ]
    },
  },
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-134637770-1'
      }
    ]  
  ] 
}