import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { VPBadge } from 'vitepress/theme'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import './custom.css'
import HomePanel from './components/HomePanel.vue'
import FeedbackLine from './components/FeedbackLine.vue'
import AnnouncementBanner from './components/AnnouncementBanner.vue'

export default {
  extends: DefaultTheme,
  // 1.6.4 全局注册的组件名是 "Badge";这里补注册 "VPBadge",
  // 让所有 Markdown 文件无需 import 即可使用 <VPBadge type="...">。
  enhanceApp({ app }) {
    app.component('VPBadge', VPBadge)
    // 页面历史(GitChangelog)客户端组件
    app.use(NolebaseGitChangelogPlugin)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 首页 features 区位插入一体化面板(站点导航 + 系统入口)
      'home-features-after': () => h(HomePanel),
      // 每篇文档页脚前插入纠错行
      'doc-footer-before': () => h(FeedbackLine),
      // 整站底部插入招新季横幅(开关见 data/siteBanner.js)
      'layout-bottom': () => h(AnnouncementBanner)
    })
  }
}
