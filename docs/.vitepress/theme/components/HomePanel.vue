<script setup>
// 首页一体化面板:上半区"站点导航" + 下半区"系统入口",共用一个背板
// 站点导航数据在 data/homeNav.js;系统入口数据在 data 旁的 appLinks.ts
import { appLinks } from '../../appLinks'
import { homeNav } from '../../data/homeNav'
</script>

<template>
  <section class="home-panel">
    <div class="home-panel-inner">
      <p class="home-panel-label">站点导航</p>
      <div class="home-panel-grid cols-4">
        <a v-for="item in homeNav" :key="item.title" class="home-card" :href="item.link">
          <span class="home-card-icon">{{ item.icon }}</span>
          <span class="home-card-name">{{ item.title }}</span>
          <span class="home-card-desc">{{ item.desc }}</span>
        </a>
      </div>
      <p class="home-panel-label app">系统入口</p>
      <div class="home-panel-grid cols-3">
        <a v-for="item in appLinks" :key="item.key" class="home-card" :href="item.url" target="_blank" rel="noopener">
          <span class="home-card-icon">{{ item.icon }}</span>
          <span class="home-card-name">{{ item.title }}</span>
          <span class="home-card-desc">{{ item.desc }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-panel {
  margin-top: 8px;
  padding: 56px 24px 64px;
  background: linear-gradient(180deg, var(--vp-c-brand-soft), transparent 55%);
  border-top: 1px solid var(--vp-c-divider);
}
.home-panel-inner {
  max-width: 1152px;
  margin: 0 auto;
}
.home-panel-label {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0 0 24px;
}
.home-panel-label.app {
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
}
.home-panel-grid {
  display: grid;
  gap: 16px;
}
.home-panel-grid.cols-4 {
  grid-template-columns: repeat(4, 1fr);
}
.home-panel-grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 960px) {
  .home-panel-grid.cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .home-panel-grid.cols-4,
  .home-panel-grid.cols-3 {
    grid-template-columns: 1fr;
  }
}
.home-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
  padding: 20px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  text-decoration: none;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.home-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--vp-c-brand-soft);
}
.home-card-icon {
  font-size: 26px;
}
.home-card-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.home-card-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
