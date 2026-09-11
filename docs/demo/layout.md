---
search: false
title: 布局
---

# 布局

> 官方文档:[默认主题 · 布局](https://vitepress.dev/zh/reference/default-theme-layout)

## 三种页面布局

| 布局 | 触发方式 | 用途 | 本站实例 |
| --- | --- | --- | --- |
| `doc`(默认) | 普通页面 | 文档/内容页,带侧栏和大纲 | 全站绝大多数页面 |
| `home` | frontmatter `layout: home` | 首页(Hero + Features) | [首页](/) |
| `page` | frontmatter `layout: page` | 无侧栏、无大纲的独立页 | 404 页 |

## 布局插槽(全站注入内容)

自定义主题的 `Layout` 时,可以用插槽往**每个页面**的固定位置注入内容。本站真实用例:

```ts
// docs/.vitepress/theme/index.ts
Layout() {
  return h(DefaultTheme.Layout, null, {
    'home-features-after': () => h(AppLinks)  // 首页"系统入口"区块
  })
}
```

常用插槽与建议用途:

| 插槽 | 位置 | 本站可用来 |
| --- | --- | --- |
| `doc-footer-before` | 每篇文章页脚前 | **全站纠错行**(推荐) |
| `layout-bottom` | 整站底部 | **招新季横幅**(可开关) |
| `aside-bottom` | 右侧栏底部 | 小型"本站由铁小微维护"卡片 |
| `not-found` | 404 页 | "这一页还没被归档"定制 404 |

## aside 与 outline(右侧导航)

```ts
themeConfig: {
  aside: true,        // true 右侧 / 'left' 左侧 / false 关闭
  outline: { level: [2, 3], label: '本页目录' }  // 本站已如此配置
}
```

每个页面也可以用 frontmatter 单独覆盖:

```md
---
aside: false      # 本页关闭右侧栏
outline: deep     # 本页大纲显示到 h6
---
```

你正在看的这个试衣间页面,右侧的"本页目录"就是 outline——**左侧分组 + 右侧页面导航**是 doc 布局的原生行为。
