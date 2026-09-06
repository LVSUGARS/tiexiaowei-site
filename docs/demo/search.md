---
title: 搜索
---

<script setup>
import { VPNavBarSearch } from 'vitepress/theme'
</script>

# 搜索

> 官方文档:[默认主题 · 搜索](https://vitepress.dev/zh/reference/default-theme-search)

## 真实渲染

本站用的是**本地搜索(local provider)**,以下组件独立渲染,**点它真的能搜**:

<VPNavBarSearch />

快捷键:<b>K</b>(或直接按 `/`)。

## 两种 Provider

| 方案 | 说明 | 本站选择 |
| --- | --- | --- |
| `local` | 构建时生成索引,纯前端,零依赖,支持中文 | ✅ 已启用 |
| `algolia` | Algolia DocSearch 托管,需申请,体验更强 | 内容量大后可申请(公益免费) |

## 已做的中文化

搜索框与弹层的全部文案(按钮/占位/无结果/页脚按键提示)已在 `config.mts` 的 `search.options.translations` 里汉化。

## 前瞻

文章库全量接入后(M3),搜索索引会自动覆盖"仅目录"层的标题与摘要;若单篇文章也转出了正文,会被一并索引——**站内检索本身就是文章库的核心卖点**。
