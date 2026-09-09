<script setup>
// 首页 Hero 上方的节气彩蛋:链接《二十四节气》获奖专题
// 色相随节气微调:徽章即时着色,整页背板的水合后微调由 onMounted 设置全局变量
import { computed, onMounted } from 'vue'
import { getCurrentSolarTerm } from '../../data/solarTerms'

const term = computed(() => getCurrentSolarTerm())

// 水合后把节气色相挂到根元素,首页背板的渐变随之微调
onMounted(() => {
  document.documentElement.style.setProperty('--seasonal-hue', String(term.value.hue))
})
</script>

<template>
  <a
    class="term-chip"
    href="/about/awards"
    title="《二十四节气》全国获奖专题"
    :style="{ '--seasonal-hue': String(term.hue) }"
  >
    {{ term.emoji }} 今日{{ term.name }} · 《二十四节气》获奖系列
  </a>
</template>

<style scoped>
.term-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border: 1px solid hsl(var(--seasonal-hue, 227), 70%, 45%);
  border-radius: 999px;
  color: hsl(var(--seasonal-hue, 227), 70%, 40%);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s;
}
.term-chip:hover {
  background: hsla(var(--seasonal-hue, 227), 80%, 60%, 0.15);
}
.dark .term-chip,
:global(.dark) .term-chip {
  color: hsl(var(--seasonal-hue, 227), 85%, 72%);
  border-color: hsl(var(--seasonal-hue, 227), 70%, 55%);
}
</style>
