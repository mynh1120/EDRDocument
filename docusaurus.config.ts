import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My EDR',
  tagline: 'Endpoint Detection and Response',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Logoedr',
        src: 'img/Logoedr.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Giới thiệu phần mềm EDR',
        },
        {to: '/hdsd',
          label: 'Hướng dẫn sử dụng',
          position: 'left'},
      ],
    },
    footer: {
  style: 'dark',
  links: [
    {
      title: 'NCSS',
      items: [
        {
          html: 'Cơ quan chủ quản: Hiệp hội An ninh mạng quốc gia'
        },
        {
          html: 'Bản quyền thuộc Hiệp hội An ninh mạng quốc gia'
        }
      ]
    },
    {
      title: 'Thông tin liên hệ',
      items: [
          { html: '<a href="mailto:support@myedr.com">📧 Email: support@myedr.com</a>' },
          { html: '<a href="tel:0968066011">📞 Hotline: 0968 066 011</a>' },
          { html: '<a href="https://ncsgroup.vn/">🌐 Website: https://ncsgroup.vn</a>' }
      ]
    }
  ],
  copyright: 'Copyright © 2025 My EDR, Inc. Built by NCS.'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;


