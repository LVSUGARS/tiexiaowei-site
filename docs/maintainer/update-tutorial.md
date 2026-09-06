---
title: 数据更新教程
---

<script setup>
import { VPBadge } from 'vitepress/theme'
</script>

# 数据更新教程(写给想自己动手的你)

> 全站内容都是 Markdown 文本文件——**更新数据 = 改文件 + 推送到 GitHub**,不需要碰任何代码逻辑。本页覆盖五个最常见的更新场景,照抄即可。

## 准备:一次性的环境

1. 安装 [Node.js 20+](https://nodejs.org/zh-cn) 与 [VS Code](https://code.visualstudio.com/)
2. 克隆仓库(只需一次):

```bash
git clone https://github.com/LVSUGARS/tiexiaowei-site
cd tiexiaowei-site
pnpm install
```

3. 日常开工:`pnpm dev` → 浏览器打开 http://localhost:5173 —— 改文件会**实时热更新**,所见即所得

## 五个最常见的更新场景

### 场景一:新增一场活动

1. 复制 `docs/activity/sample-shooting-task.md`,改名为新活动(英文/拼音,如 `2026-sports-meeting.md`),填好 frontmatter 与正文
2. 打开 `docs/.vitepress/data/activityIndex.js`,**追加一条**(日期 / 标题 / 链接)——时间轴、"历史上的今天"、随机回忆三处自动生效
3. 在 `config.mts` 侧栏的对应年份分组里登记链接

### 场景二:收录一篇公众号文章

打开 `data/article-catalog.template.csv`,**追加一行**(标题 / 日期 / 原文链接 / 平台 / 分类 / 作者 / 状态),保存为 UTF-8 编码。完整字段说明见[收录规范](/library/spec)。

### 场景三:新增一个资料条目

1. 参照 [条目示例](/resources/sample-study-material),在 `docs/resources/` 下新建 md 文件,照模板填 frontmatter
2. 图片与文件放同目录,网盘链接写进正文;注意[权限分级](/resources/)——仅成员级的资料**不写真实链接**

### 场景四:改"数据型"内容(只改数据文件,不碰页面)

| 想改什么 | 改哪个文件 |
| --- | --- |
| 维护者名单 | `data/maintainers.js` |
| 招新横幅(开关与文案) | `data/siteBanner.js` |
| 首页"站点导航"卡片 | `data/homeNav.js` |
| 系统入口链接(成员端/报名/后台) | `appLinks.ts` |

### 场景五:更新部门年册 / 职能页

直接编辑 `docs/department/2026.md`(负责人、变更记录)或对应职能页。**历史年册只增不改**。

## 改完之后:三步提交

```bash
pnpm audit                                # 自检:死链 + 目录表格式
pnpm build                                # 确认构建通过
git add -A && git commit -m "更新:xxx" && git push
```

push 后内容即同步到 GitHub 仓库;部署平台接好后,**push 即上线**。

## 搞砸了怎么办

- 只想撤销某个文件的改动:`git checkout -- 文件路径`
- 已经 commit 还没 push:`git reset --soft HEAD~1`
- 大问题不用慌:GitHub 上有完整提交历史,任何版本都能恢复;实在不行把报错丢给 AI 助手(协作约定见 [AGENTS.md](https://github.com/LVSUGARS/tiexiaowei-site/blob/main/AGENTS.md))

## 更多文档

[收录规范](/library/spec) · [资料收录指南](/resources/contribute) · [维护指南](/maintainer/guide) · [换届交接手册](/maintainer/handover) · [组件试衣间](/demo/)

<VPBadge type="tip">提示</VPBadge> 懒得手改?把需求用自然语言告诉 AI 编码助手(仓库里有 AGENTS.md 作为约定),让它照着教程改,你负责验收。
