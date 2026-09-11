---
search: false
title: 概览
---

<script setup>
import { VPFeatures } from 'vitepress/theme'

const recommended = [
  {
    icon: '🟣', title: 'VPButton 官方按钮',
    details: '替换招新页手写 CTA:暗色模式、主题色全自动跟随,零维护。',
    link: '/demo/badge', linkText: '看效果'
  },
  {
    icon: '🏷️', title: 'VPBadge 徽章',
    details: '标准化全站"待补"标记与状态标签(已收录/仅目录/缺失)。',
    link: '/demo/badge', linkText: '看效果'
  },
  {
    icon: '🩹', title: '全站纠错行',
    details: 'doc-footer-before 插槽:每篇文章页脚出现"发现内容有误?告诉我们"。读者就是义务校对员。',
    link: '/demo/layout', linkText: '看位置'
  },
  {
    icon: '📣', title: '招新季横幅',
    details: 'layout-bottom 插槽:招新季全站底部横幅,数据文件一开关,过季即收。',
    link: '/demo/layout', linkText: '看位置'
  },
  {
    icon: '👥', title: '团队页整页版式',
    details: '维护者页升级为 VPTeamPage 四件套,比现在更规整。',
    link: '/demo/team', linkText: '看效果'
  },
  {
    icon: '⏳', title: '编辑链接 + 时间戳',
    details: 'git 仓库建好后(M4)一行配置启用,纠错与溯源全站生效。',
    link: '/demo/editlink', linkText: '看说明'
  }
]
</script>

# 默认主题试衣间 · 概览

> 本区把 VitePress 官方《默认主题》文档的**全部章节逐页"变现"**:官方文档每一章讲的功能,这里都有真实渲染或样式复刻。左侧分组与官方侧栏同构,右侧是本页目录(页面导航)。

## ⭐ 推荐启用(按投入成本排序)

<VPFeatures :features="recommended" />

第一档(徽章/容器)改 Markdown 就能用;第二档(按钮/纠错行/横幅/团队页)需要动一次主题或页面结构;第三档(编辑链接/时间戳)等 git 仓库建立后一行配置启用。

## 章节导航

| 官方章节 | 试衣间页面 | 形式 |
| --- | --- | --- |
| 导航栏 | [导航栏](/demo/nav) | 真实组件 + 配置说明 |
| 侧边栏 | [侧边栏](/demo/sidebar) | 折叠演示 + 全站实例 |
| 主页 | [主页](/demo/home) | 真实组件 |
| 页脚 | [页脚](/demo/footer) | 样式复刻 |
| 布局 | [布局](/demo/layout) | 配置说明 + 真实插槽案例 |
| 徽章 | [徽章](/demo/badge) | 真实组件 |
| 团队页 | [团队页](/demo/team) | 真实组件 |
| 上下页链接 | [上下页链接](/demo/prevnext) | 样式复刻 |
| 编辑链接 | [编辑链接](/demo/editlink) | 样式复刻(待 git) |
| 最后更新时间戳 | [最后更新时间戳](/demo/lastupdated) | 样式复刻(待 git) |
| 搜索 | [搜索](/demo/search) | 真实组件 |
| Carbon Ads | [Carbon Ads](/demo/ads) | 说明 + 占位 |

## 19 个官方组件覆盖表

| 组件 | 状态 | 所在页 |
| --- | --- | --- |
| VPButton | ✅ 真实渲染 | [徽章页](/demo/badge)(与徽章同页演示) |
| VPBadge | ✅ 真实渲染 | 徽章页 |
| VPImage | ✅ 真实渲染 | 徽章页(亮暗双图演示) |
| VPLink | ✅ 真实渲染 | 徽章页(内外链演示) |
| VPSocialLinks / VPSocialLink | ✅ 真实渲染 | 导航栏页 |
| VPNavBarSearch | ✅ 真实渲染 | 搜索页 |
| VPHomeHero / VPFeatures / VPHomeSponsors / VPHomeContent | ✅ 真实渲染 | 主页 |
| VPTeamMembers / VPTeamPage / VPTeamPageTitle / VPTeamPageSection | ✅ 真实渲染 | 团队页 |
| VPIcon | ⚠️ 内部封装 | 说明 |

## 使用约定

- 本区**不进主导航**,是维护者的组件说明书;确认后可整体保留或删除
- 每页右上角切**暗色模式**:官方组件全部自动适配
- 组件数据(团队名单、鸣谢名单)与线上共用同一数据文件,改一处全站生效
