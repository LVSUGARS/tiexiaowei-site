---
search: false
title: 上下页链接
---

# 上下页链接

> 官方文档:[默认主题 · 上下页链接](https://vitepress.dev/zh/reference/default-theme-prev-next-links)

## 它长这样(样式复刻)

每篇文档底部左右两侧的翻页器:

<div style="display:flex; justify-content:space-between; gap:16px; margin:20px 0;">
  <div style="flex:1; border:1px solid var(--vp-c-divider); border-radius:8px; padding:12px 16px;">
    <span style="font-size:12px; color:var(--vp-c-text-2)">← 上一篇</span><br>
    <b>维护指南</b>
  </div>
  <div style="flex:1; text-align:right; border:1px solid var(--vp-c-divider); border-radius:8px; padding:12px 16px;">
    <span style="font-size:12px; color:var(--vp-c-text-2)">下一篇 →</span><br>
    <b>换届交接手册</b>
  </div>
</div>

## 规则

- **顺序由侧栏配置的先后决定**——这就是为什么侧栏要精心排(本站年份新在上)
- 每页可用 frontmatter 覆盖或关闭:

```md
---
prev:
  text: 上一篇(自定义标题)
  link: /some/page
next: false        # 本页关闭"下一篇"
---
```

## 本站现状

"上一篇 / 下一篇"文案已在 `config.mts` 的 `docFooter` 里中文化。真实效果见任意内容页底部,例如[收录规范](/library/spec)。
