---
title: 编辑链接
---

# 编辑链接

> 官方文档:[默认主题 · 编辑链接](https://vitepress.dev/zh/reference/default-theme-edit-link)

## 它长这样(样式复刻)

每篇文档页脚右下角的"编辑此页"链接:

<div style="display:flex; justify-content:flex-end; margin:20px 0;">
  <a style="font-size:14px; color:var(--vp-c-brand-1);">在 GitHub 上编辑此页 →</a>
</div>

## 配置方式

```ts
themeConfig: {
  editLink: {
    pattern: 'https://github.com/ORG/REPO/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页'
  }
}
```

`:path` 会自动替换为当前页面的 md 文件路径——点开就是 GitHub 的在线编辑器,**改完提交就是 PR**,非技术成员也能参与纠错。

## 本站现状:🚧 待 M4

编辑链接依赖 GitHub 仓库存在,仓库建立 + 部署后(M4)一行配置即启用。届时与"全站纠错行"(doc-footer-before 插槽)配合:纠错行给读者入口,编辑链接给动手的人。
