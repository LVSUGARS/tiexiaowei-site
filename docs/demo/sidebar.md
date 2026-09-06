---
title: 侧边栏
---

# 侧边栏

> 官方文档:[默认主题 · 侧边栏](https://vitepress.dev/zh/reference/default-theme-sidebar) · 由 `themeConfig.sidebar` 配置驱动。

## 分组与折叠三态

`collapsed` 有三种取值,行为不同:

- **不写**:分组不可折叠,始终展开(如本区各页)
- **`false`**:可折叠,默认展开(如本站"部门职能"组)
- **`true`**:可折叠,默认收起(如本站"按年年册"组、档案馆的往年分组)

用官方的 details 组件模拟折叠手感:

::: details 按年年册(collapsed: true 的样子)
2026 · 2025 · 2024……新年份在上、旧年份在下。
:::

::: details 档案馆 · 活动存档(分组级收纳)
总览与台账模板 / 2026(展开)/ 2022(折叠)——单篇文章**不进侧栏**。
:::

## 多路径共用侧栏(本站真实用法)

`sidebar` 支持按路径前缀匹配。本站的档案馆三个库 + 介绍页**共用同一份侧栏对象**:

```ts
sidebar: {
  '/archive/': archiveSidebar,
  '/activity/': archiveSidebar,
  '/resources/': archiveSidebar,
  '/library/': archiveSidebar
}
```

效果:在活动台账详情页,左侧也能看到"资料库""文章库"的分组入口。

## 全站实例

- [部门板块](/department/)——"部门职能"展开组 + "按年年册"折叠组
- [档案馆](/archive/)——三库统一侧栏 + 年份分组
- [本区](/demo/)——扁平分组(单层列表,与官方文档侧栏同构)
