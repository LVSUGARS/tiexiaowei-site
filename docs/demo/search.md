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

文章目录已由 CSV 驱动显示公开原文链接完整的条目。后续原始文章获授权并转出正文后，搜索索引也会覆盖这些正文——**站内检索本身就是文章库的核心卖点**。
