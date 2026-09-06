<script setup>
// 活动时间轴:数据由 data/activityIndex.data.js 自动扫描 activity/*.md 生成
// 注意:主题组件里拿到的可能是原始加载形态(frontmatter 嵌套 / url 带 .html),
// 因此这里做防御性映射,兼容两种形态
import { computed } from 'vue'
import { data as raw } from '../../data/activityIndex.data.js'

const activities = computed(() =>
  (Array.isArray(raw) ? raw : [])
    .map((d) => ({
      url: d.url || '',
      title: d.frontmatter?.title || d.title || d.url,
      date: String(d.frontmatter?.date || d.date || ''),
      type: d.frontmatter?.type || d.type || '活动'
    }))
    .filter((d) => d.date && !d.url.endsWith('/activity/'))
    .sort((a, b) => b.date.localeCompare(a.date))
)

const years = computed(() =>
  [...new Set(activities.value.map((a) => a.date.slice(0, 4)))].sort((a, b) => b.localeCompare(a))
)
const byYear = (y) => activities.value.filter((a) => a.date.slice(0, 4) === y)
</script>

<template>
  <div>
    <div v-for="y in years" :key="y">
      <h3 class="tl-year">{{ y }}</h3>
      <div class="tl">
        <a v-for="a in byYear(y)" :key="a.url" class="tl-item" :href="a.url">
          <span class="tl-date">
            {{ a.date.slice(5, 10) }} · {{ a.type }}
            <VPBadge v-if="a.url.includes('sample-shooting-task')" type="warning">未发布</VPBadge>
          </span>
          <span class="tl-title">{{ a.title }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
