---
search: false
title: 侧边栏
---

# 侧边栏

> 官方文档:[默认主题 · 侧边栏](https://vitepress.dev/zh/reference/default-theme-sidebar) · 由 `themeConfig.sidebar` 配置驱动。

## 分组与折叠三态

`collapsed` 有三种取值,行为不同:

- **不写**:分组不可折叠,始终展开(如本区各页)
- **`false`**:可折叠,默认展开(如本站"资料库""文章库"组)
- **`true`**:可折叠,默认收起(如本站"按年年册"组、档案馆底部的"关联内容"组)

用官方的 details 组件模拟折叠手感:

::: details 按年年册(collapsed: true 的样子)
2026 · 2025 · 2024……新年份在上、旧年份在下。
:::

::: details 资料库(分组级收纳)
点开资料库组展开"资料库总览 / 收录指南"子链接;单篇资料条目不进侧栏。
:::

## 档案馆统一侧栏(本站真实用法)

档案馆介绍页与四类馆藏(资料库、文章库、主题标签、口述史)共用同一份 `archiveSidebar`,官方默认手风琴结构:进入任一档案页左侧目录保持一致,点分组标题就地展开/收纳。活动是顶栏独立一级栏目,不占档案馆前排,只在档案馆侧栏底部留"关联内容 → 活动存档"轻跳转:

```ts
sidebar: {
  '/archive/': archiveSidebar,
  '/resources/': archiveSidebar,
  '/library/': archiveSidebar,
  '/tags/': archiveSidebar,
  '/stories/': archiveSidebar,
  '/activity/': activitySidebar
}
```

效果:在档案馆、资料库或文章库任意一页,左侧都能看到完整的馆藏目录(档案馆介绍 + 四库手风琴 + 底部活动关联);进入活动页则看到活动自己的局部侧栏(总览与台账模板 / 年度总结)。

## 全站实例

- [部门板块](/department/)——"部门职能"展开组 + "按年年册"折叠组
- [档案馆](/archive/)——统一手风琴目录(档案馆介绍 + 四类馆藏 + 底部活动关联)
- [活动存档](/activity/)——活动自己的局部侧栏
- [本区](/demo/)——扁平分组(单层列表,与官方文档侧栏同构)
