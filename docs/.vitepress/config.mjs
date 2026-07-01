import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  cleanUrls: true,
  appearance: false,
  // 标签页图标(favicon)
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/docs/nova.png' }],
  ],

  // 多语言：中文为默认（根目录），英文在 /docs/en/
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '我的产品文档',
      description: 'api聚合平台',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'NovaAPI',
      description: 'LLM aggregation platform',
    },
  },

  // 跨语言共享的主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'NovaAPI',
    // 点击 NovaAPI 回主页
    logoLink: 'https://api.novaapis.com/',

    // 隐藏左侧边栏
    sidebar: [],

    // 隐藏底部 上一页/下一页
    docFooter: {
      prev: false,
      next: false,
    },
  }
})
