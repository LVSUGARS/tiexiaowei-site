<script setup>
// 资料条目自动列表:数据由 data/resourceIndex.data.js 扫描生成(防御性映射)
import { computed } from 'vue'
import { data as raw } from '../../data/resourceIndex.data.js'

const entries = computed(() =>
  (Array.isArray(raw) ? raw : [])
    .map((d) => ({
      url: d.url || '',
      title: d.frontmatter?.title || d.title || d.url,
      type: d.frontmatter?.type || '资料',
      permission: d.frontmatter?.permission || '公开'
    }))
    .filter((d) => !d.url.endsWith('/resources/') && !d.url.includes('contribute'))
    .sort((a, b) => a.type.localeCompare(b.type))
)
</script>

<template>
  <div class="card-grid cols-2">
    <a v-for="e in entries" :key="e.url" class="card" :href="e.url">
      <span class="icon">📦</span>
      <span>
        <span class="name">{{ e.title }}<em v-if="e.permission === '仅成员'" class="card-badge">仅成员</em></span>
        <span class="desc">{{ e.type }}</span>
      </span>
    </a>
  </div>
</template>
