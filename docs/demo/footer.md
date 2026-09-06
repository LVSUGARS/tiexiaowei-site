---
title: 页脚
---

# 页脚

> 官方文档:[默认主题 · 页脚](https://vitepress.dev/zh/reference/default-theme-footer) · 由 `themeConfig.footer` 配置驱动。

## 样式复刻

页脚长这样(内容即本站真实配置):

<div style="border-top:1px solid var(--vp-c-divider); margin-top:24px; padding:24px 8px 4px; text-align:center; color:var(--vp-c-text-2); font-size:14px; line-height:1.8;">
  <p style="margin:0">除特别声明外,本站文字内容采用 CC BY-NC-SA 4.0 授权;站内图片、视频版权归原作者所有。</p>
  <p style="margin:0">Copyright © 2025-2026 铁小微融媒体中心 · 南京铁道职业技术学院党委宣传部</p>
</div>

## 重要规则:页脚只在"无侧边栏页面"显示

VitePress 的设计:**有侧边栏的文档页不渲染这个页脚**,只有首页、404 等 `layout: home/page` 页面显示。所以:

- 想在**每篇文章底部**都放授权声明或联系方式 → 用 `doc-footer-before` 插槽(见[布局页](/demo/layout)的纠错行方案)
- 全局页脚 → 保持现状(首页可见)

## 配置方式

```ts
themeConfig: {
  footer: {
    message: '除特别声明外,本站文字内容采用 CC BY-NC-SA 4.0 授权……',
    copyright: 'Copyright © 2025-2026 铁小微融媒体中心 · 南京铁道职业技术学院党委宣传部'
  }
}
```

`message` / `copyright` 支持任意文案,也可以用 frontmatter `footer: false` 在个别页面关掉页脚。
