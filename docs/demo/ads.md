---
search: false
title: Carbon Ads
---

# Carbon Ads

> 官方文档:[默认主题 · Carbon Ads](https://vitepress.dev/zh/reference/default-theme-carbon-ads)

## 是什么

VitePress 在右侧栏预留的**广告位插槽**,配置 `themeConfig.carbonAds` 后会在右侧栏渲染 Carbon 广告网络的卡片(官方文档站右侧那个 "Get the Drop" 就是它):

<div style="border:1px solid var(--vp-c-divider); border-radius:12px; padding:20px; text-align:center; margin:16px 0;">
  <p style="margin:0; font-weight:700;">这里会显示广告卡片</p>
  <p style="margin:8px 0 0; font-size:12px; color:var(--vp-c-text-2);">ADS VIA CARBON</p>
</div>

相关插槽:`aside-ads-before` / `aside-ads-after`(广告位上下的自定义内容)。

## 本站决定:不投放

学生组织站点挂第三方广告不合适,**本站不配置 carbonAds**,该插槽保持闲置。

如果将来想在同一位置放点自己的东西(比如"招新季横幅"或"特别鸣谢"),不用 Carbon,直接用 `aside-bottom` 插槽实现,见[布局页](/demo/layout)。
