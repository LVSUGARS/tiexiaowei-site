<script setup>
// 首页 Hero 上方的节气/节日彩蛋:有对应文章时自动链接到文章目录
// 色相随当天事件微调,整页背板的水合后微调由 onMounted 设置全局变量
import { onMounted, ref } from 'vue'
import { data as rawArticles } from '../../data/articleCatalog.data.js'
import { getBeijingMonthDay, solarTerms } from '../../data/solarTerms'
import { getFestivalsOnDate } from '../../data/festivals'

// 静态站不能依赖构建日期,因此只在客户端按当天北京时间计算。
const highlights = ref([])

const articles = Array.isArray(rawArticles) ? rawArticles : []

function articleFor(event) {
  const candidates = articles
    .filter((article) => article.date.slice(5) === event.md)
    .sort((a, b) => b.date.localeCompare(a.date))
  return candidates.find((article) => article.title.includes(event.name)) || candidates[0] || null
}

// 水合后把节气色相挂到根元素,首页背板的渐变随之微调
onMounted(() => {
  const mmdd = getBeijingMonthDay()
  const events = [...getFestivalsOnDate(), ...solarTerms.filter((event) => event.md === mmdd)]
    .map((event) => ({ ...event, article: articleFor(event) }))
  highlights.value = events
  if (events[0]) {
    document.documentElement.style.setProperty('--seasonal-hue', String(events[0].hue))
  } else {
    document.documentElement.style.removeProperty('--seasonal-hue')
  }
})
</script>

<template>
  <div v-if="highlights.length" class="calendar-chips">
    <template v-for="event in highlights" :key="event.name">
      <a
        v-if="event.article"
        class="term-chip"
        :href="event.article.url"
        target="_blank"
        rel="noopener"
        :style="{ '--seasonal-hue': String(event.hue) }"
      >
        {{ event.emoji }} 今日{{ event.name }} · {{ event.article.title }}
      </a>
      <span v-else class="term-chip" :style="{ '--seasonal-hue': String(event.hue) }">
        {{ event.emoji }} 今日{{ event.name }}
      </span>
    </template>
  </div>
</template>

<style scoped>
.calendar-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
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
.calendar-chips span.term-chip {
  cursor: default;
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
