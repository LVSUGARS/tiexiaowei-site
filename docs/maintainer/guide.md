---
title: 维护指南
---

# 维护指南

本站是纯静态站点(VitePress),内容即 Markdown 文件。技术维护只需会最基础的命令行和 Git。

## 本地开发

```bash
# 环境:Node.js 20+,推荐 pnpm
pnpm install        # 或 npm install
pnpm dev            # 本地预览 http://localhost:5173
pnpm build          # 构建产物在 docs/.vitepress/dist
pnpm preview        # 本地预览构建产物
pnpm audit          # 死链与目录表自检
```

## 目录结构

```
docs/
├── .vitepress/
│   ├── config.mts      # 导航/侧栏/搜索等站点配置
│   ├── appLinks.ts     # ★系统入口唯一配置点(成员端/报名/后台)
│   ├── data/
│   │   └── maintainers.js  # ★维护团队数据(加人只改这里)
│   └── theme/          # 主题与品牌色(custom.css)
├── public/             # 静态资源(favicon、avatars 头像)
├── about/  department/  library/
├── activity/  resources/
├── guide/  maintainer/
└── index.md            # 首页
```

## 内容规范

- 文件名用英文或拼音(避免 URL 中文编码问题)
- 页面放对应栏目目录,并在 `config.mts` 侧栏登记
- 图片入库前压缩;涉及人物肖像须本人同意
- 示例/占位内容统一用"🚧 待补"标注,方便后续检索清理
- 新增维护者:编辑 `docs/.vitepress/data/maintainers.js`,头像放入 `docs/public/avatars/`

## 系统入口(重要)

顶部导航"成员端 ↗"、首页"系统入口"卡片、招新页报名按钮、维护者页后台入口,**全部**读取 `docs/.vitepress/appLinks.ts`。主应用路由变更时只改这一个文件。

## 发布流程

main 分支 push → CI 自动构建部署(待 M4 配置 GitHub Actions / Cloudflare Pages)。日常内容更新走 PR,由当值维护者合并。

## 管理后台

中心系统端后台:<a :href="adminUrl" target="_blank" rel="noopener">后台管理 ↗</a>(管理员专用)。

<script setup>
import { adminUrl } from '../.vitepress/appLinks'
</script>
