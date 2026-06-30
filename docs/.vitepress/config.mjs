import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的产品文档",
  description: "api聚合平台",
  base: '/docs/',
  cleanUrls: true,
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'NovaAPI',
    // 点击 NovaAPI 回主页
    logoLink: 'https://api.novaapis.com/',

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]
  }
})
