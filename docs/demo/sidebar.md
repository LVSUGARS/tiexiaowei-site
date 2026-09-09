---
title: 侧边栏
---

# 侧边栏

> 官方文档:[默认主题 · 侧边栏](https://vitepress.dev/zh/reference/default-theme-sidebar) · 由 `themeConfig.sidebar` 配置驱动。

## 分组与折叠三态

`collapsed` 有三种取值,行为不同:

- **不写**:分组不可折叠,始终展开(如本区各页)
- **`false`**:可折叠,默认展开(如本站"活动存档""资料库"组)
- **`true`**:可折叠,默认收起(如本站"按年年册"组)

用官方的 details 组件模拟折叠手感:

::: details 按年年册(collapsed: true 的样子)
2026 · 2025 · 2024……新年份在上、旧年份在下。
:::

::: details 活动存档(分组级收纳)
侧栏只保留总览与年度总结;活动页时间轴会根据实际台账自动输出 2026、2022 等年份索引——单篇活动**不进侧栏**。
:::

## 档案馆统一侧栏(本站真实用法)

档案馆介绍页与四类馆藏(活动存档、资料库、文章库、主题标签、口述史)共用同一份 `archiveSidebar`,官方默认手风琴结构:进入任一档案相关页面,左侧目录保持一致,点分组标题就地展开/收纳,不会跳到"单独栏目"的窄侧栏:

```ts
sidebar: {
  '/archive/': archiveSidebar,
  '/activity/': archiveSidebar,
  '/resources/': archiveSidebar,
  '/library/': archiveSidebar,
  '/tags/': archiveSidebar,
  '/stories/': archiveSidebar
}
```

效果:在档案馆、活动台账、资料库或文章库任意一页,左侧都能看到完整的馆藏目录;当前所在栏目高亮并保持展开,其余分组可以随时收纳。

## 全站实例

- [部门板块](/department/)——"部门职能"展开组 + "按年年册"折叠组
- [档案馆](/archive/)——统一手风琴目录(档案馆介绍 + 四类馆藏)
- [本区](/demo/)——扁平分组(单层列表,与官方文档侧栏同构)
