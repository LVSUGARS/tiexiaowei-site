# 铁小微融媒体中心官方站(介绍页)

南京铁道职业技术学院铁小微融媒体中心的介绍页与内容档案馆,基于 VitePress 构建的纯静态站点。

- **仓库**:<https://github.com/LVSUGARS/tiexiaowei-site>(内容唯一真源)
- **部署**:GitHub Pages 自动部署(push 到 `main` 即发布),线上地址 <https://txwrmtzx.top/>;构建命令 `pnpm build`,产物目录 `docs/.vitepress/dist`
- **框架设计计划书**:[PLAN.md](./PLAN.md)(当前 v0.15,先读这个)
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
| 活动 | 活动工作台账(精选活动 / 时间轴 / 年度总结 / 照片墙) |
| 档案馆 | 资料库、文章库(公众号 + 校园号)、主题标签、口述史 |
| 招新指南 | 部门方向介绍 + 报名 CTA + 招新群 |
| 维护者 | 维护指南、换届交接手册 |

## 当前状态

- ✅ 骨架、内容、GitHub 仓库全部完成(每页可溯源)
- ✅ 部署:GitHub Pages + 自定义根域 <https://txwrmtzx.top/>(push `main` 自动发布)
- ⏳ M3 公众号数据接入(方案见 PLAN.md 第五节,目录表模板在 `data/`)
- ⏳ 可选增强:Nolebase 增强插件(标题高亮/索引自动化)、OG 社交卡片

## 授权

除特别声明外,文字内容 CC BY-NC-SA 4.0;站内图片、视频版权归原作者所有。
