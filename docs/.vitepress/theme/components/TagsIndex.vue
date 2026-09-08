<script setup>
// 标签索引:数据由 data/tags.data.js 自动扫描(注意主题组件拿到的是原始形态,做防御映射)
import { computed } from 'vue'
import { data as raw } from '../../data/tags.data.js'

const items = computed(() =>
  (Array.isArray(raw) ? raw : [])
    .map((d) => ({
      url: d.url || '',
      title: d.frontmatter?.title || d.title || d.url,
      tags: Array.isArray(d.frontmatter?.tags) ? d.frontmatter.tags : Array.isArray(d.tags) ? d.tags : []
    }))
    .filter((d) => d.tags.length && !d.url.endsWith('/activity/') && !d.url.endsWith('/resources/'))
)

const groups = computed(() => {
  const map = {}
  for (const item of items.value) {
    for (const tag of item.tags) {
      ;(map[tag] = map[tag] || []).push(item)
    }
  }
  return Object.entries(map)
    .map(([tag, pages]) => ({ tag, pages }))
    .sort((a, b) => b.pages.length - a.pages.length)
})
</script>

<template>
  <div v-for="g in groups" :key="g.tag" class="tag-group">
    <h3 class="tag-name"><VPBadge type="tip">{{ g.tag }}</VPBadge></h3>
    <ul class="tag-pages">
      <li v-for="p in g.pages" :key="p.url">
        <a :href="p.url">{{ p.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tag-group {
  margin: 20px 0;
}
.tag-name {
  margin: 0 0 8px;
  padding: 0;
  border: none;
  font-size: 16px;
}
.tag-pages {
  margin: 0;
  padding-left: 4px;
  list-style: none;
}
.tag-pages li {
  padding: 4px 0;
}
</style>
