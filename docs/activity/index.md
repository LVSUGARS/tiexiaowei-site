---
title: 活动存档
---

<script setup>
import HistoryToday from '../.vitepress/theme/components/HistoryToday.vue'
</script>

# 活动存档 —— 每场必录的工作台账

活动存档不等于作品展示:**每一场活动都记录在案,包括没有发布到任何平台的拍摄任务**。是否发布只是状态字段,不是收录门槛。

<HistoryToday />

## 精选活动

<div class="card-grid cols-2">
  <a class="card" href="/activity/2022-vocational-week"><span class="icon">🚂</span><span><span class="name">职教周铁路科普短视频</span><span class="desc">与文化教育中心联合制作 · 2022-05</span></span></a>
  <a class="card" href="/activity/railway-museum"><span class="icon">🏛️</span><span><span class="name">铁小微带你看江苏铁路教育馆</span><span class="desc">9 批近 500 名中小学生的社区研学</span></span></a>
  <a class="card" href="/activity/sample-shooting-task"><span class="icon">🎬</span><span><span class="name">示例 · 迎新晚会拍摄</span><span class="desc">未发布拍摄任务的台账样例</span></span></a>
</div>

## 时间轴

<h3 class="tl-year">2026</h3>
<div class="tl">
  <a class="tl-item" href="/activity/sample-shooting-task">
    <span class="tl-date">09-20 · 拍摄任务 · 未发布</span>
    <span class="tl-title">示例 · 迎新晚会拍摄</span>
  </a>
</div>
<h3 class="tl-year">2022</h3>
<div class="tl">
  <a class="tl-item" href="/activity/2022-vocational-week">
    <span class="tl-date">05-13 · 官方活动</span>
    <span class="tl-title">职教周铁路科普系列短视频</span>
  </a>
  <a class="tl-item" href="/activity/railway-museum">
    <span class="tl-date">01-01(占位) · 官方活动</span>
    <span class="tl-title">铁小微带你看江苏铁路教育馆</span>
  </a>
</div>

## 台账模板(每场活动一页)

```yaml
---
title: 活动名称
date: 2026-09-XX
type: 拍摄任务          # 拍摄任务 / 官方活动 / 内部培训 / 其他
departments: [影像部]    # 参与部门
published: false         # false=未发布;或填发布平台
outputs:
  - 素材包: (网盘链接,仅成员级可不填)
  - 成片: (发布平台链接)
---
```

正文写三五句即可:时间地点、做了什么、参与人员、遇到的问题与经验。已发布的内容**链接过去**,不在活动页重复维护。

## 活动类型

| 类型 | 说明 | 示例 |
| --- | --- | --- |
| 拍摄任务 | 受邀为校内单位/活动拍摄 | 迎新晚会、运动会、讲座 |
| 官方活动 | 中心主办的/深度参与的活动 | 职教周、教育馆研学 |
| 内部培训 | 部门线下培训(产出资料进[资料库](/resources/)) | 相机基础培训 |
| 其他 | 团建等 | — |

## 收录与自动化

<VPBadge type="warning">补录中</VPBadge> 更多活动按年补录;时间轴与"历史上的今天"由 `data/activityIndex.js` 驱动——**新增活动时追加一条即可**,三处展示自动生效。列表页自动化(按年/类型筛选)在数据积累后配置。
