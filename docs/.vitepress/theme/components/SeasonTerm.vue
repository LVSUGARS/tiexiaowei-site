<script setup>
// 首页 Hero 上方的节气彩蛋:链接《二十四节气》获奖专题
import { computed } from 'vue'
import { solarTerms } from '../../data/solarTerms'

const term = computed(() => {
  const now = new Date()
  const mmdd = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const sorted = [...solarTerms].sort((a, b) => a.md.localeCompare(b.md))
  let current = sorted[sorted.length - 1] // 岁末年初兜底:冬至
  for (const t of sorted) {
    if (t.md <= mmdd) current = t
  }
  return current
})
</script>

<template>
  <a class="term-chip" href="/about/awards" title="《二十四节气》全国获奖专题">
    {{ term.emoji }} 今日{{ term.name }} · 《二十四节气》获奖系列
  </a>
</template>

<style scoped>
.term-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 999px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s;
}
.term-chip:hover {
  background: var(--vp-c-brand-soft);
}
</style>
