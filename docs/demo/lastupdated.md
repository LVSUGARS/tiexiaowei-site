---
search: false
title: 最后更新时间戳
---

# 最后更新时间戳

> 官方文档:[默认主题 · 最后更新时间戳](https://vitepress.dev/zh/reference/default-theme-last-updated)

## 它长这样(样式复刻)

每篇文档页脚的时间戳:

<div style="display:flex; justify-content:flex-end; margin:20px 0;">
  <p style="font-size:14px; color:var(--vp-c-text-2);">最后更新于 2026年9月6日</p>
</div>

## 配置方式

```ts
export default {
  // 顶层开关
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
    }
  }
}
```

## 本站现状:暂关(有原因)

时间戳取自 **git 提交历史**——本站尚未 `git init`,开了会报"无数据"。已在 `config.mts` 留有注释:

```ts
// 站点完成 git 首次提交后,可改为 true 以显示每页"最后更新于"时间
lastUpdated: false
```

**启用条件**:git 仓库建立并完成首次提交(M4 一起做)。配合 CI 的 `fetch-depth: 0`(拉全量历史)后,还能像 WHUDAYS 那样加 GitChangelog 展示每页变更记录——对档案馆来说,这就是每件馆藏的"入馆记录"。
