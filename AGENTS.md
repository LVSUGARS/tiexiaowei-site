# AGENTS.md —— AI 协作与维护约定

> 本文件写给参与维护本仓库的 **AI 编码助手**与新接手的同学(借鉴 WHUDAYS 的同款实践)。动手前请通读。

## 项目一句话

铁小微融媒体中心的介绍页 + 内容档案馆,VitePress 1.6.4 纯静态站,内容即 Markdown。完整设计见 `PLAN.md`。

## 铁律(违反即返工)

1. **内容即 Markdown**:所有正文放 `docs/` 对应栏目目录,不要把内容写死进组件
2. **文件名一律英文或拼音**,标题用中文(避免 URL 中文编码)
3. **单篇内容不进侧栏**:侧栏只到"分组级"(年 / 类型);单篇文章、单个资料条目走各库列表页
4. **系统入口地址**只改 `docs/.vitepress/appLinks.ts`(导航 / 首页卡片 / 招新 CTA / 维护者页全联动)
5. **维护者、横幅、首页导航卡**等数据只改 `docs/.vitepress/data/` 下的文件
6. **徽章陷阱**:VPBadge 放段落 / 列表 / 提示块,**不进表格单元格和标题**
7. **团队页陷阱**:VPTeamPageSection 没有默认插槽,卡片必须放 `<template #members>`
8. **历史不删除**:年册、活动台账只增不改,变化本身就是档案
9. **隐私红线**:人物肖像未授权不上站;阅读量 / 评论数据不上公开站
10. **版本纪律**:依赖用精确版本(如 vitepress 1.6.4),升级必须单独 PR 并跑通构建

## 常用命令

```bash
pnpm install     # 安装
pnpm dev         # 本地预览 :5173
pnpm build       # 构建(含死链检查)
pnpm preview     # 预览构建产物
pnpm audit       # 死链 + CSV 自检
```

## 结构速查

```
docs/
├── .vitepress/
│   ├── config.mts      # 导航/侧栏/搜索/布局插槽配置
│   ├── appLinks.ts     # ★系统入口唯一配置点
│   ├── data/           # ★数据文件:维护者/横幅/首页导航卡
│   └── theme/          # 主题:custom.css 品牌色,components/ 插槽组件
├── public/             # 静态资源(favicon、avatars)
├── about/  department/  matrix(在 about/)  library/
├── activity/  resources/  archive/  guide/  maintainer/
└── index.md            # 首页(hero)
```

## 新页面流程

1. 放进对应栏目目录,frontmatter 带齐全字段(活动页:`title/date/type/departments/published/outputs`;资料条目:`title/date/type/source/permission/tags`)
2. 在 `config.mts` 侧栏登记(档案馆页面自动继承统一侧栏)
3. `pnpm audit` + `pnpm build` 通过后提 PR

## 风格约定

- 简体中文;语气可以轻松、可以有梗,但涉及学校与人员时正式
- 占位统一:<VPBadge type="warning">待补充</VPBadge> 徽章(放段落里)+ 文字「🚧 待补」;表格里用纯文字
- 视觉:并列用卡片、号召用行动面板(.cta-panel)、流程用步骤条(ol.steps);表格只留给数据型内容
- 年份排序:新年在上;当前年默认展开
