---
search: false
title: 主页
---

<script setup>
import {
  VPButton, VPFeatures, VPHomeHero, VPHomeContent, VPHomeSponsors
} from 'vitepress/theme'
</script>

# 主页

> 官方文档:[默认主题 · 主页](https://vitepress.dev/zh/reference/default-theme-home-page) · 由页面 `layout: home` + frontmatter 驱动。本站首页就是这套:以下为各积木的独立渲染。

## VPHomeHero · Hero 区

<VPHomeHero
  name="铁小微融媒体中心"
  text="南京铁道职业技术学院 · 党委宣传部"
  tagline="hero 区 = name + text + tagline + actions 按钮,可选配 hero 图。"
  :actions="[
    { theme: 'brand', text: '了解我们', link: '/about/' },
    { theme: 'alt', text: '加入我们', link: '/guide/' }
  ]"
/>

## VPFeatures · 特性卡片网格

<VPFeatures :features="[
  { icon: '📡', title: '四端矩阵', details: '微信、微博、抖音、中国大学生在线校园号。' },
  { icon: '🏆', title: '全国入选案例', details: '职院校园媒体融合创新案例入选团队。' },
  { icon: '🌱', title: '招新与培养', details: '把兴趣变成作品。' }
]" />

## VPHomeSponsors · 赞助/鸣谢区

<VPHomeSponsors
  message="本站由铁小微成员用爱发电维护"
  :data="[{ items: [{ name: '你,也可以成为贡献者' }] }]"
  actionText="加入我们"
  actionLink="/guide/"
/>

## VPHomeContent · 内容限宽容器

<VPHomeContent>

这块文字被 VPHomeContent 包裹——它把内容约束在与 Hero 对齐的宽度内(仅首页布局下可感知)。首页如果要在 features 之后加自定义正文,就用它包住。

</VPHomeContent>

## 本站真实首页

以上积木在本站首页通过 **frontmatter**(而非手写组件)配置,另外用 `home-features-after` 插槽在卡片后面注入了"系统入口"区块——见 [布局页](/demo/layout)。
