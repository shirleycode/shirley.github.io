// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// https://www.docusaurus.cn/docs
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '学习笔记',
  tagline: 'This is My Notebook',
  url: 'https://shirley.github.io/',
  baseUrl: 'notebooks',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shirley', // Usually your GitHub org/user name.
  projectName: 'myNotebook', // Usually your repo name.
  deploymentBranch:'pages',
  // trailingSlash:false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     '',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '学习笔记',
        logo: {
          alt: 'My NoteBook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'notebook-react/intro',
            position: 'left',
            label: 'React',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'React',
                href: 'https://react.docschina.org/',
              },
              {
                label: 'Vue2',
                href: 'https://v2.cn.vuejs.org/v2/guide/',
              },
              {
                label: 'Vue3',
                href: 'https://cn.vuejs.org/guide/introduction.html',
              },
              {
                label: 'MDN',
                href: 'https://developer.mozilla.org/zh-CN/',
              },
            ],
          },
          {
            title: 'Tools',
            items: [
              {
                label: '有道翻译',
                href: 'https://fanyi.youdao.com/',
              },
              
            ],
          },
         
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} shirley`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
