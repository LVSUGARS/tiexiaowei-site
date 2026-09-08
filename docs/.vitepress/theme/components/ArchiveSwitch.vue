<template>
  <nav class="archive-switch" aria-label="档案馆分区">
    <a href="/activity/">活动</a>
    <a href="/resources/">资料</a>
    <a href="/library/">文章</a>
    <a href="/tags/">标签</a>
    <a href="/stories/">口述史</a>
  </nav>
</template>

<style scoped>
.archive-switch {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 28px;
}
.archive-switch a {
  padding: 5px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  text-decoration: none;
}
.archive-switch a:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
