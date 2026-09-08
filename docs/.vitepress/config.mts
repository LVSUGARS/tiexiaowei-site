import { defineConfig } from 'vitepress'
import { memberUrl } from './appLinks'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

const aboutSidebar = [
  {
    text: '中心概况',
    collapsed: false,
    items: [
      { text: '中心简介', link: '/about/' },
      { text: '全国荣誉', link: '/about/awards' }
    ]
  },
  {
    text: '关注我们',
    collapsed: false,
    items: [{ text: '新媒体矩阵', link: '/about/matrix' }]
  },
  {
    text: '合作与链接',
    collapsed: true,
    items: [{ text: '友情链接', link: '/friends/' }]
  }
]

const archiveSidebar = [
  { text: '档案馆介绍', link: '/archive/' },
  { text: '资料库', link: '/resources/' },
  { text: '文章库', link: '/library/' },
  { text: '主题标签', link: '/tags/' },
  { text: '口述史', link: '/stories/' }
]

const activitySidebar = [
  {
    text: '活动存档',
    collapsed: false,
    items: [
      { text: '总览与台账模板', link: '/activity/' },
      { text: '年度总结 · 2026', link: '/activity/annual-2026' },
      { text: '2026', link: '/activity/#2026' },
      { text: '2022', link: '/activity/#2022' }
    ]
  }
]

const resourcesSidebar = [
  {
    text: '资料库',
    collapsed: false,
    items: [
      { text: '资料库总览', link: '/resources/' },
      { text: '收录指南', link: '/resources/contribute' }
    ]
  }
]

const librarySidebar = [
  {
    text: '文章库',
    collapsed: false,
    items: [
      { text: '文章目录', link: '/library/' },
      { text: '收录规范', link: '/library/spec' },
      { text: '校园号专栏', link: '/library/univs' }
    ]
  }
]

// 站点配置 —— 铁小微融媒体中心
// 上线前还需要改的两处:① head 里的 og:image(品牌图确定后);
// ② 主题色在 theme/custom.css 的 CSS 变量(当前为占位的"铁路红")。
// sitemap.hostname 已同步为正式根域 txwrmtzx.top。
export default defineConfig({
  lang: 'zh-CN',
  title: '铁小微融媒体中心',
  description:
    '南京铁道职业技术学院铁小微融媒体中心官方站:新媒体矩阵、活动存档与公众号文章档案馆。',
  // 每页底部"最后更新于"时间戳,数据来自 git 提交历史
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'keywords', content: '铁小微,南京铁道职业技术学院,南铁院,融媒体,校园媒体,大学生记者' }],
    ['meta', { property: 'og:title', content: '铁小微融媒体中心' }],
    ['meta', { property: 'og:description', content: '记录校园日常,传播铁路文化 —— 四端一体的校园融媒团队' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://txwrmtzx.top/' }],
    ['meta', { property: 'og:image', content: 'https://txwrmtzx.top/og.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '铁小微融媒体中心' }],
    ['meta', { name: 'twitter:description', content: '记录校园日常,传播铁路文化 —— 四端一体的校园融媒团队' }],
    ['meta', { name: 'twitter:image', content: 'https://txwrmtzx.top/og.png' }]
  ],
  // 教程页会引用 http://localhost:5173,放行 localhost 形式的链接
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  // 高亮插件的 client 引用了原始 .vue 文件,需让 SSR 构建走 Vite 编译管线
  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-highlight-targeted-heading']
  },
  sitemap: {
    // 正式根域(与 docs/public/CNAME、GitHub Pages 自定义域名设置保持一致)
    hostname: 'https://txwrmtzx.top'
  },
  vite: {
    plugins: [
      // 页面历史(GitChangelog):每页底部展示变更记录
      GitChangelog({
        repoURL: () => 'https://github.com/LVSUGARS/tiexiaowei-site'
      }),
      GitChangelogMarkdownSection({
        sections: { disableContributors: true } // 底部只保留"页面历史",不展示贡献者头像
      })
    ]
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
      { text: '部门', link: '/department/' },
      { text: '活动', link: '/activity/' },
      { text: '档案馆', link: '/archive/' },
      { text: '加入我们', link: '/guide/' },
      { text: '成员端 ↗', link: memberUrl }
    ],
    sidebar: {
      '/about/': aboutSidebar,
      '/department/': [
        {
          text: '部门职能',
          collapsed: false,
          items: [
            { text: '部门总览', link: '/department/' },
            { text: '视频部(A/B)', link: '/department/video' },
            { text: '摄影部', link: '/department/photo' },
            { text: '音频部', link: '/department/audio' },
            { text: '采编部(A/B)', link: '/department/caibian' },
            { text: '办公室', link: '/department/office' },
            { text: '设计部', link: '/department/design' }
          ]
        },
        {
          text: '按年年册',
          collapsed: true,
          items: [
            { text: '2026', link: '/department/2026' },
            { text: '2025', link: '/department/2025' }
          ]
        }
      ],
      '/archive/': archiveSidebar,
      '/activity/': activitySidebar,
      '/resources/': resourcesSidebar,
      '/library/': librarySidebar,
      '/tags/': [{ text: '主题标签', link: '/tags/' }],
      '/stories/': [{ text: '口述史', link: '/stories/' }],
      '/friends/': aboutSidebar,
      '/demo/': [
        {
          text: '默认主题试衣间',
          collapsed: false,
          items: [
            { text: '概览', link: '/demo/' },
            { text: '导航栏', link: '/demo/nav' },
            { text: '侧边栏', link: '/demo/sidebar' },
            { text: '主页', link: '/demo/home' },
            { text: '页脚', link: '/demo/footer' },
            { text: '布局', link: '/demo/layout' },
            { text: '徽章', link: '/demo/badge' },
            { text: '团队页', link: '/demo/team' },
            { text: '上下页链接', link: '/demo/prevnext' },
            { text: '编辑链接', link: '/demo/editlink' },
            { text: '最后更新时间戳', link: '/demo/lastupdated' },
            { text: '搜索', link: '/demo/search' },
            { text: 'Carbon Ads', link: '/demo/ads' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '招新指南',
          items: [{ text: '加入我们', link: '/guide/' }]
        }
      ],
      '/maintainer/': [
        {
          text: '维护团队',
          collapsed: false,
          items: [
            { text: '站点维护人员', link: '/maintainer/' },
            { text: '数据更新教程', link: '/maintainer/update-tutorial' },
            { text: '维护指南', link: '/maintainer/guide' }
          ]
        },
        {
          text: '换届交接',
          collapsed: false,
          items: [{ text: '换届交接手册', link: '/maintainer/handover' }]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清空关键词',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    outline: { level: [2, 3], label: '本页目录' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: {
      message: '除特别声明外,本站文字内容采用 CC BY-NC-SA 4.0 授权;站内图片、视频版权归原作者所有。<br><a href="/maintainer/">站点维护</a>',
      copyright: 'Copyright © 2025-2026 铁小微融媒体中心 · 南京铁道职业技术学院党委宣传部'
    }
  }
})
