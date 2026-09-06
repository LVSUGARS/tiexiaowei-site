---
title: 徽章
---

<script setup>
import { VPButton, VPBadge, VPImage, VPLink } from 'vitepress/theme'
</script>

# 徽章

> 官方文档:[默认主题 · 徽章](https://vitepress.dev/zh/reference/default-theme-badge)

VPBadge 全局注册,Markdown 里直接 `<VPBadge type="tip">文字</VPBadge>` 即可。四种类型:

- <VPBadge type="tip">已收录原文</VPBadge> —— `tip`(默认):完成 / 健康
- <VPBadge type="info">info</VPBadge> —— 中性 / 分类标签
- <VPBadge type="warning">仅目录</VPBadge> —— `warning`:待办 / 需注意
- <VPBadge type="danger">缺失</VPBadge> —— `danger`:禁止 / 丢失

## 建议用途

全站"🚧 待补"标记可以标准化成徽章,暗色模式下依然清晰:

<VPBadge type="warning">待补</VPBadge> 微信公众号推文链接、各平台主页地址、部门真实名单。

> ⚠️ 使用规范(经验):徽章放在**段落、列表、提示块**里;不要放进 Markdown 表格单元格或标题里——表格 + 内联组件的组合存在解析陷阱(本次试衣间就踩到了),需要表格展示状态时,表格列用纯文字标记。

## 自定义颜色

四种类型之外的颜色用 CSS 覆盖 `.VPBadge` 变量实现,一般用不到。

---

# 同页附赠:其余通用组件

## VPButton(官方按钮,建议替换手写 CTA)

<div style="display:flex; gap:12px; flex-wrap:wrap; margin:12px 0;">
<VPButton theme="brand" text="进入新生报名(官方版)" href="/guide/" />
<VPButton theme="alt" text="alt 形态" href="#徽章" />
<VPButton theme="sponsor" text="sponsor 紫色形态" href="#徽章" />
</div>

## VPImage(亮暗双图)

亮色显示"铁"标、暗色自动换圆形人像——右上角切换试试:

<VPImage :image="{ light: '/favicon.svg', dark: '/avatars/placeholder.svg', alt: '亮暗切换演示' }" />

## VPLink(智能链接)

- <VPLink href="/about/">内部链接</VPLink>
- <VPLink href="https://whudays.org/maintainer/">外链自动带图标</VPLink>
- <VPLink href="https://vitepress.dev/zh/" noIcon>noIcon 模式</VPLink>
