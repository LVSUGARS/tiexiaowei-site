---
title: 侧边栏
---

# 侧边栏

> 官方文档:[默认主题 · 侧边栏](https://vitepress.dev/zh/reference/default-theme-sidebar) · 由 `themeConfig.sidebar` 配置驱动。

## 分组与折叠三态

`collapsed` 有三种取值,行为不同:

- **不写**:分组不可折叠,始终展开(如本区各页)
- **`false`**:可折叠,默认展开(如本站"部门职能"组)
- **`true`**:可折叠,默认收起(如本站"按年年册"组、档案馆的"关联内容"组)

用官方的 details 组件模拟折叠手感:

::: details 按年年册(collapsed: true 的样子)
2026 · 2025 · 2024……新年份在上、旧年份在下。
:::

::: details 活动存档(分组级收纳)
侧栏只保留总览与年度总结;活动页时间轴会根据实际台账自动输出 2026、2022 等年份索引——单篇活动**不进侧栏**。
:::

## 局部侧栏(本站真实用法)

`sidebar` 支持按路径前缀匹配。本站让档案馆、活动、资料库和文章库各自使用局部侧栏:

```ts
sidebar: {
  '/archive/': archiveSidebar,
  '/activity/': activitySidebar,
  '/resources/': resourcesSidebar,
  '/library/': librarySidebar
}
```

效果:活动台账详情页只展示活动入口;档案馆侧栏展示四类馆藏，并以关联入口指向活动。

## 全站实例

- [部门板块](/department/)——"部门职能"展开组 + "按年年册"折叠组
- [档案馆](/archive/)——四类入口侧栏 + 当前栏目分组
- [本区](/demo/)——扁平分组(单层列表,与官方文档侧栏同构)
