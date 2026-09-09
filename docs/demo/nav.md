---
title: 导航栏
---

# 导航栏

> 官方文档:[默认主题 · 导航栏](https://vitepress.dev/zh/reference/default-theme-nav) · 由 `themeConfig.nav` 配置驱动。

## 我们的真实导航

当前站点导航(看本页顶部):首页 / 关于 / 部门 / 活动 / 档案馆 / 加入我们 / **成员端 ↗**。其中"成员端 ↗"演示了**外链导航项**(自动带外链处理);维护者从页脚进入,友情链接收纳在关于侧栏。

## 下拉菜单

nav 项带 `items` 就会渲染成下拉——本站"档案馆"在 v0.4 前就是下拉,现在改成了直链 + 统一侧栏。下拉形态如下:

<div style="border:1px solid var(--vp-c-divider); border-radius:8px; display:inline-block; min-width:220px; padding:8px 0; margin:8px 0;">
  <div style="padding:6px 20px; color:var(--vp-c-text-2); font-size:12px;">档案馆</div>
  <div style="padding:6px 20px;">活动存档</div>
  <div style="padding:6px 20px;">资料库</div>
  <div style="padding:6px 20px;">文章库(公众号 + 校园号)</div>
</div>

## 社交链接(socialLinks)

导航栏右侧的图标链接,由 `themeConfig.socialLinks` 配置。内置图标:`github` `twitter` `discord` 等;任意平台用自定义 SVG。真实渲染:

<div style="margin:12px 0;">
<VPSocialLinks :links="socialLinks" />
</div>

<script setup>
import { VPSocialLinks } from 'vitepress/theme'

const socialLinks = [
  { icon: 'github', link: 'https://github.com/', ariaLabel: 'GitHub(占位)' },
  {
    icon: { svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>' },
    link: 'mailto:tiexiaowei@example.com',
    ariaLabel: '邮箱'
  },
  {
    icon: { svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4v12h3v4l4-4h9V4Z"/></svg>' },
    link: 'https://njrts.txwrmtzx.top/',
    ariaLabel: '中心系统端'
  }
]
</script>

## 其他导航栏配置

| 配置 | 说明 | 本站现状 |
| --- | --- | --- |
| `logo` | 站点标题前的 logo,支持亮暗双图 | 🚧 待 VI 素材 |
| `siteTitle` | 自定义标题文本 | 默认取站点 title |
| `outline` / `darkModeSwitchLabel` 等 | 导航右侧控件文案 | 已全部中文化 |
