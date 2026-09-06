import { defineConfig } from 'vitepress'
import { memberUrl } from './appLinks'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

// 档案馆统一侧栏:/archive/ /activity/ /resources/ /library/ 四类路径共用
// 规则:侧栏只到"分组级"(年 / 类型),单篇文章与单个条目不进侧栏,走各库列表页
const archiveSidebar = [
  { text: '档案馆介绍', link: '/archive/' },
  {
    text: '活动存档',
    collapsed: false,
    items: [
      { text: '总览与台账模板', link: '/activity/' },
      {
        text: '2026',
        collapsed: false,
        items: [{ text: '示例 · 迎新晚会拍摄(未发布)', link: '/activity/sample-shooting-task' }]
      },
      {
        text: '2022',
        collapsed: true,
        items: [
          { text: '职教周铁路科普短视频', link: '/activity/2022-vocational-week' },
          { text: '江苏铁路教育馆研学', link: '/activity/railway-museum' }
        ]
      }
    ]
  },
  {
    text: '资料库',
    collapsed: true,
    items: [
      { text: '资料库总览', link: '/resources/' },
      { text: '收录指南', link: '/resources/contribute' },
      { text: '条目示例 · 学习资料', link: '/resources/sample-study-material' }
    ]
  },
  {
    text: '文章库',
    collapsed: true,
    items: [
      { text: '建设状态', link: '/library/' },
      { text: '收录规范', link: '/library/spec' },
      { text: '校园号专栏', link: '/library/univs' }
    ]
  }
]

// 站点配置 —— 铁小微融媒体中心
// 上线前需要改的三处:① sitemap.hostname 换正式域名;② head 里的 og:image;
// ③ 主题色在 theme/custom.css 的 CSS 变量(当前为占位的"铁路红")。
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
    // og:image 待品牌图确定后补充: ['meta', { property: 'og:image', content: '/og.png' }]
  ],
  sitemap: {
    // 占位域名,上线时替换为正式域名
    hostname: 'https://tiexiaowei.example.com'
  },
  vite: {
    plugins: [
      // 页面历史(GitChangelog):仓库建立后,每页底部展示变更记录
      // repoURL 为占位,GitHub 仓库建立后替换为真实地址
      GitChangelog({
        repoURL: () => 'https://github.com/LVSUGARS/tiexiaowei-site'
      }),
      GitChangelogMarkdownSection()
    ]
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
      { text: '部门', link: '/department/' },
      { text: '档案馆', link: '/archive/' },
      { text: '招新指南', link: '/guide/' },
      { text: '维护者', link: '/maintainer/' },
      { text: '成员端 ↗', link: memberUrl }
    ],
    sidebar: {
      '/about/': [
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
        }
      ],
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
      '/activity/': archiveSidebar,
      '/resources/': archiveSidebar,
      '/library/': archiveSidebar,
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
      message: '除特别声明外,本站文字内容采用 CC BY-NC-SA 4.0 授权;站内图片、视频版权归原作者所有。',
      copyright: 'Copyright © 2025-2026 铁小微融媒体中心 · 南京铁道职业技术学院党委宣传部'
    }
  }
})
