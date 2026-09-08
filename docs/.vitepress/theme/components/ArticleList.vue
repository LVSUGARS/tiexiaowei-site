<script setup>
// 文章目录列表:仅展示 CSV 中日期与原文链接均完整的公开目录记录
import { computed } from 'vue'
import { data as raw } from '../../data/articleCatalog.data.js'

const articles = computed(() => (Array.isArray(raw) ? raw : []))
const years = computed(() => [...new Set(articles.value.map((article) => article.date.slice(0, 4)))])

const byYear = (year) => articles.value.filter((article) => article.date.startsWith(year))
</script>

<template>
  <div v-if="articles.length" class="article-index">
    <section v-for="year in years" :key="year" class="article-year">
      <h3>{{ year }}</h3>
      <article v-for="article in byYear(year)" :key="article.url" class="article-entry">
        <time :datetime="article.date">{{ article.date }}</time>
        <div class="article-main">
          <a :href="article.url" target="_blank" rel="noopener">{{ article.title }}</a>
          <p>{{ article.platform }} · {{ article.category }}<span v-if="article.author"> · {{ article.author }}</span></p>
        </div>
        <span class="article-status">{{ article.status }}</span>
      </article>
    </section>
  </div>
  <p v-else class="article-empty">目录正在整理中，首批可公开条目会在核验后显示。</p>
</template>

<style scoped>
.article-year {
  margin: 24px 0;
}
.article-year h3 {
  margin-bottom: 10px;
  color: var(--vp-c-brand-1);
}
.article-entry {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: start;
  padding: 14px 0;
  border-top: 1px solid var(--vp-c-divider);
}
.article-entry time,
.article-main p,
.article-status,
.article-empty {
  color: var(--vp-c-text-2);
  font-size: 13px;
}
.article-main a {
  font-weight: 600;
}
.article-main p {
  margin: 4px 0 0;
}
.article-status {
  white-space: nowrap;
}
@media (max-width: 640px) {
  .article-entry {
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
  }
  .article-entry time {
    grid-column: 1 / -1;
  }
}
</style>
