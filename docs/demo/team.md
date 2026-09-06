---
title: 团队页
---

<script setup>
import { VPTeamMembers, VPTeamPage, VPTeamPageTitle, VPTeamPageSection } from 'vitepress/theme'
import { maintainers, contributors } from '../.vitepress/data/maintainers'
</script>

# 团队页

> 官方文档:[默认主题 · 团队页](https://vitepress.dev/zh/reference/default-theme-team-page) · 四件套:VPTeamPage(骨架)+ VPTeamPageTitle(标题区)+ VPTeamPageSection(分节)+ VPTeamMembers(卡片网格)。

## 完整版式

> ⚠️ 坑位说明(试衣间用 5 组对照实验定位):VPTeamPageSection **没有默认插槽**,成员卡片必须放进 `<template #members>` 具名插槽——直接写子元素会被静默丢弃,连显式 `#default` 都无效。

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>站点维护人员</template>
    <template #lead>VPTeamPage(骨架)+ VPTeamPageTitle(标题区)+ VPTeamPageSection(分节)+ VPTeamMembers(卡片)四件套。线上维护者页就是这个版式。</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>日常维护</template>
    <template #lead>负责内容更新、文章库归档与站点部署。</template>
    <template #members>
      <VPTeamMembers size="small" :members="maintainers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>资料贡献</template>
    <template #lead>为档案馆投喂素材、撰写台账的朋友们。</template>
    <template #members>
      <VPTeamMembers size="small" :members="contributors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

## 成员卡片数据结构

```ts
{
  avatar: '/avatars/xxx.png',      // 头像,放 docs/public/avatars/
  name: '名字',
  title: '2026-现在',              // 任期/身份行
  desc: '一句话签名',              // WHUDAYS 式的梗就写这里
  links: [                          // 任意平台,图标内置或自定义 SVG
    { icon: 'github', link: 'https://github.com/xxx' },
    { icon: { svg: '<svg .../>' }, link: 'https://...', ariaLabel: 'QQ' }
  ]
}
```

## 与线上页面的关系

[维护者页](/maintainer/)已采用本版式;数据文件不变,加人只改 `maintainers.js`。
