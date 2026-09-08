---
title: 主题标签
---

# 主题标签索引

> 档案馆的"检索卡片":一个标签串起活动与资料(后续接入文章库)。**自动聚合**——给任何 `activity/` 或 `resources/` 下的 md 加 `tags: [标签名]` frontmatter,本页自动归类,零登记。

<script setup>
import TagsIndex from '../.vitepress/theme/components/TagsIndex.vue'
</script>

<TagsIndex />

## 如何打标签

在 md 的 frontmatter 里加一行:

```yaml
tags: [铁路科普, 职教周]   # 可多标签
```

**建议标签集**(不强制,维护者按需扩充):`迎新` · `毕业季` · `铁路科普` · `二十四节气` · `拍摄任务` · `培训` · `志愿服务`。

## 人工补充区

<VPBadge type="tip">#档案馆方法论</VPBadge>

- [收录规范](/library/spec)
- [资料收录指南](/resources/contribute)
- [数据更新教程](/maintainer/update-tutorial)
