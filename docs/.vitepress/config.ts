import type { UserConfig } from 'vitepress';

const config: UserConfig = {
  themeConfig: {
    siteTitle: 'Utils',
    nav: [
      {
        text: 'Array',
        link: '/arrays',
        activeMatch: '/arrays',
      },
      {
        text: 'Async',
        link: '/async',
        activeMatch: '/async',
      },
      {
        text: 'Colors',
        link: '/colors',
        activeMatch: '/colors',
      },
      {
        text: 'Math',
        link: '/math',
        activeMatch: '/math',
      },
      {
        text: 'Object',
        link: '/object',
        activeMatch: '/object',
      },
      {
        text: 'String',
        link: '/string',
        activeMatch: '/string',
      },
      {
        text: 'Types',
        link: '/type',
        activeMatch: '/type',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Riadh Adrani',
    },
  },
  base: '/utils/',
};

export default config;
