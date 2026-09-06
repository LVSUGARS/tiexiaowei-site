---
title: 加入我们
---

<script setup>
import { VPButton, VPFeatures } from 'vitepress/theme'
import { signupUrl, memberUrl } from '../.vitepress/appLinks'
</script>

# 加入我们

九月纳新季,铁小微在等新的同伴——把"喜欢刷视频、拍照片"变成真正拿得出手的作品与技能。

<div class="cta-panel">
  <p class="cta-kicker">2026 秋季纳新 · 进行中</p>
  <h3>加入铁小微融媒体中心</h3>
  <p style="margin:0 0 16px; color:var(--vp-c-text-2);">填写报名表单即可,零基础完全没问题;也可以先到各部门介绍里逛逛再决定。纳新开放时间以当届招新推文为准。</p>
  <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
    <VPButton theme="brand" size="big" text="进入新生报名" :href="signupUrl" />
    <VPButton theme="alt" size="big" text="先看看部门" link="/department/" />
  </div>
</div>

## 六大部门,总有一个适合你

<VPFeatures :features="[
  { icon: '🎬', title: '视频部(A/B)', details: '活动摄像、剪辑成片——学校每场大活动都有我们的机位。', link: '/department/video', linkText: '部门介绍' },
  { icon: '📷', title: '摄影部', details: '活动跟拍与图集,用照片沉淀校园记忆。', link: '/department/photo', linkText: '部门介绍' },
  { icon: '🎙️', title: '音频部', details: '现场收音调音、配音与音频后期,画面之外的另一半体验。', link: '/department/audio', linkText: '部门介绍' },
  { icon: '✍️', title: '采编部(A/B)', details: '新闻采写、推文撰稿、专题策划,把校园故事讲给更多人听。', link: '/department/caibian', linkText: '部门介绍' },
  { icon: '🗂️', title: '办公室', details: '统筹协调、考勤物资、纳新组织,中心运转的调度中枢。', link: '/department/office', linkText: '部门介绍' },
  { icon: '🎨', title: '设计部', details: '海报、物料、栏目包装,定义铁小微的视觉气质。', link: '/department/design', linkText: '部门介绍' }
]" />

> ⚠️ 以上为 2026-2027 学年架构;具体职责说明为拟定稿,以中心内部确认为准。

## 报名流程

<ol class="steps">
  <li><b>线上报名</b><br>点击上方按钮填写报名表单,留好联系方式。</li>
  <li><b>等待通知</b><br>纳新负责人会通过表单里的联系方式告知面聊安排。</li>
  <li><b>简单面聊</b><br>不考技能,只聊兴趣和可投入的时间,零基础完全没问题。</li>
  <li><b>正式入部</b><br>进入<a :href="memberUrl" target="_blank" rel="noopener">成员端</a>,开始你的第一篇作品。</li>
</ol>

## FAQ

<VPBadge type="warning">待补充</VPBadge> 以下问题以当届纳新口径为准:

::: details 零基础、没有设备可以加入吗?
可以。中心更看重兴趣与投入度,设备可以先用部门的,技能有内部培训(见[资料库](/resources/))。
:::

::: details 纳新面试考什么?
不考技能,聊兴趣与可投入时间。(示例答复)
:::

::: details 参与中心工作有综测 / 志愿时长认定吗?
以当届纳新推文与学校规定为准。
:::
