<script setup>
// 历史上的今天:台账日期命中当天才显示
import { computed } from 'vue'
import { activityIndex } from '../../data/activityIndex'

const mmdd = computed(() => {
  const now = new Date()
  return `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
})

const hits = computed(() => activityIndex.filter((a) => a.date.slice(5) === mmdd.value))
</script>

<template>
  <div v-if="hits.length" class="history-today">
    <span class="ht-label">📅 历史上的今天</span>
    <span v-for="h in hits" :key="h.link" class="ht-item">
      {{ h.date.slice(0, 4) }} 年的今天——<a :href="h.link">{{ h.title }}</a>
    </span>
  </div>
</template>

<style scoped>
.history-today {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  padding: 12px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 12px;
  background: var(--vp-c-brand-soft);
  margin: 16px 0;
  font-size: 14px;
}
.ht-label {
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.ht-item a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
