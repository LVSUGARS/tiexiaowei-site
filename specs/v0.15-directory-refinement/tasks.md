# v0.15 目录逻辑与日历内容实施清单

> 本清单只在用户确认方案后执行。

## 阶段 0：冻结基线

- [x] 0.1 确认本方案四项核心决策
  - 活动与档案馆边界
  - `calendar_key` 文章关联
  - 活动年份索引放置位置
  - 标签是否暂时限定活动与资料
- [x] 0.2 创建 `backup-v0.14-directory` tag
- [x] 0.3 保存 `git status`、`pnpm build`、`pnpm run audit`、`pnpm audit` 原始结果

## 阶段 1：重整栏目边界

- [x] 1.1 修改 `docs/archive/index.md`
  - 删除活动精选的完整重复列表
  - 保留关联活动台账入口
  - 将四个档案入口统一为同层级结构
  - _Requirement: R1_
- [x] 1.2 修改 `docs/activity/index.md`
  - 保留活动精选、时间轴、历史上的今天、照片墙
  - 增加自动生成年份索引的容器或说明
  - _Requirement: R1, R2_
- [x] 1.3 修改 `config.mts`
  - 移除活动侧栏手工年份项
  - 保留总览和年度总结
  - _Requirement: R2_

## 阶段 2：修正年份导航

- [x] 2.1 评估 VitePress 配置能否安全生成动态年份分组
- [x] 2.2 若不能，在 `ActivityTimeline.vue` 中生成页面内年份索引
- [x] 2.3 验证新增年份只需新增活动 md，不需改多个文件
- _Requirement: R2_

## 阶段 3：文章日历关联迁移

- [x] 3.1 扩展 CSV 表头为 8 列并为旧行补空字段
- [x] 3.2 更新 `articleCatalog.data.js` 的兼容解析
- [x] 3.3 更新 `scripts/audit-links.cjs` 的列数校验
- [x] 3.4 为事件数据增加稳定 `key`
- [x] 3.5 修改 `SeasonTerm.vue`，移除标题模糊匹配和同日期兜底
- [x] 3.6 用临时测试数据验证：匹配文章、无匹配文章、同日无关文章
- _Requirement: R3_

## 阶段 4：标签与随机回忆边界

- [x] 4.1 将标签页范围明确为活动与资料
- [x] 4.2 从 `randomPages.js` 移除维护、demo、交接和规范页面
- [x] 4.3 检查随机池每个链接仍可访问
- _Requirement: R4, R5_

## 阶段 5：文档同步

- [x] 5.1 同步 `PLAN.md` 当前结构和状态
- [x] 5.2 同步 `docs/library/spec.md` 的 `calendar_key` 规则
- [x] 5.3 修正 `docs/demo/sidebar.md`、`docs/demo/search.md` 的旧示例
- [x] 5.4 同步维护教程的活动、文章和年份更新流程
- [x] 5.5 校验香港天文台参考链接可访问
- _Requirement: R6_

## 阶段 6：验收与交付

- [x] 6.1 `pnpm build`
- [x] 6.2 `pnpm run audit`
- [x] 6.3 `pnpm audit`，如仍有漏洞则如实记录，不升级依赖
- [x] 6.4 `git diff --check`
- [x] 6.5 递归扫描 dist：入口、年份索引、日历链接、随机池
- [x] 6.6 桌面/移动端浏览器冒烟测试
- [x] 6.7 更新任务状态和 `PLAN.md`
- [x] 6.8 用户验收后提交并推送
- _Requirement: R1-R7_

## 完成定义

- 活动和档案馆不再重复承担同一浏览任务。
- 新活动年份不会因为忘记改侧栏而“消失”。
- 日历文章只通过明确键关联，不会按同日期误链。
- 标签和随机回忆不再混入未面向访客的维护内容。
- 构建、链接审计、CSV 兼容性和浏览器验证均有记录。
