# 铁小微融媒体中心官方站(介绍页)

南京铁道职业技术学院铁小微融媒体中心的介绍页与内容档案馆,基于 VitePress 构建的纯静态站点。

- **仓库**:<https://github.com/LVSUGARS/tiexiaowei-site>(内容唯一真源)
- **部署**:待定(推荐 Cloudflare Pages,接入步骤见[交接手册](docs/maintainer/handover.md);构建命令 `pnpm build`,产物目录 `docs/.vitepress/dist`)
- **框架设计计划书**:[PLAN.md](./PLAN.md)(v0.9,先读这个)
- **系统端(主应用)**:https://njrts.txwrmtzx.top/ (后台 `/admin/` · 成员端 `/member/` · 新生报名 `/register/`,入口统一配置在 `docs/.vitepress/appLinks.ts`)

## 快速开始

```bash
pnpm install      # 或 npm install
pnpm dev          # 本地预览 http://localhost:5173
pnpm build        # 构建
pnpm preview      # 预览构建产物
```

环境要求:Node.js 20+。

## 站点结构

| 栏目 | 说明 |
| --- | --- |
| 关于 | 中心简介、全国荣誉、新媒体矩阵 |
| 部门 | 常青职能页 + 按年年册(换届留痕) |
| 档案馆 | 活动工作台账、资料库、文章库(公众号 + 校园号) |
| 招新指南 | 分方向介绍 + 报名 CTA |
| 维护者 | 维护指南、换届交接手册 |

## 当前状态

- ✅ 骨架、内容、GitHub 仓库全部完成;页面历史(每页可溯源)已启用
- ⏳ 部署平台待定(推荐 Cloudflare Pages,步骤见交接手册;构建命令 `pnpm build`,产物 `docs/.vitepress/dist`)
- ⏳ M3 公众号数据接入(方案见 PLAN.md 第五节,目录表模板在 `data/`)
- ⏳ 可选增强:Nolebase 增强插件(标题高亮/索引自动化)、OG 社交卡片

## 授权

除特别声明外,文字内容 CC BY-NC-SA 4.0;站内图片、视频版权归原作者所有。
