import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return
    // 文档与主页同域(api.novaapis.com)，VitePress 默认会把同域链接当作
    // 站内 SPA 跳转拦截掉。凡是跳出 /docs/ 的目标(如点击 NovaAPI 回主页 /)
    // 强制整页跳转，交给浏览器真正导航。
    router.onBeforeRouteChange = (to) => {
      if (!to.startsWith('/docs/')) {
        window.location.assign(to)
        return false
      }
    }
  },
}
