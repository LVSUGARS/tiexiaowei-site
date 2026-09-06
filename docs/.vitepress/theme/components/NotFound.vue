<script setup>
// 404:这一页还没被归档
</script>

<template>
  <div class="not-found">
    <p class="nf-icon">📁</p>
    <h1 class="nf-title">这一页还没被归档</h1>
    <p class="nf-desc">它可能正在路上,也可能从未存在——但档案馆的大门一直开着。</p>
    <div class="nf-actions">
      <a class="nf-btn brand" href="/">返回首页</a>
      <a class="nf-btn alt" href="/archive/">去档案馆逛逛</a>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  padding: 80px 24px;
  text-align: center;
}
.nf-icon {
  font-size: 64px;
  margin: 0 0 8px;
}
.nf-title {
  font-size: 28px;
  font-weight: 800;
  border: none;
  padding: 0;
  margin: 0 0 12px;
  letter-spacing: 0.02em;
}
.nf-desc {
  color: var(--vp-c-text-2);
  margin: 0 0 28px;
}
.nf-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.nf-btn {
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s;
}
.nf-btn.brand {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.nf-btn.brand:hover {
  background: var(--vp-c-brand-3);
}
.nf-btn.alt {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}
.nf-btn.alt:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
