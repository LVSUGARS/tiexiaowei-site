<script setup>
// 首页一体化面板:精选内容 + 系统入口,不重复完整顶栏目录
import { appLinks, signupUrl } from '../../appLinks'
import { homeNav } from '../../data/homeNav'
</script>

<template>
  <section class="home-panel">
    <div class="home-panel-inner">
      <section class="home-signal" aria-label="迎新公告">
        <div class="home-signal-main">
          <p class="home-signal-kicker">迎新公告</p>
          <a class="home-signal-title" :href="signupUrl" target="_blank" rel="noopener">
            2026 招新进行中，六大部门等你加入
          </a>
          <span class="home-signal-meta">视频 · 摄影 · 音频 · 采编 · 办公室 · 设计</span>
        </div>
      </section>

      <p class="home-panel-label">精选内容</p>
      <div class="home-panel-grid cols-3">
        <a v-for="item in homeNav" :key="item.title" class="home-card" :href="item.link">
          <span class="home-card-icon">{{ item.icon }}</span>
          <span class="home-card-name">{{ item.title }}</span>
          <span class="home-card-desc">{{ item.desc }}</span>
        </a>
      </div>
      <p class="home-panel-label app"><span>成员工作区</span><small>登录后使用</small></p>
      <div class="home-panel-grid cols-2">
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
  padding: 12px 24px 64px;
}
.home-panel-inner {
  max-width: 1152px;
  margin: 0 auto;
}
.home-signal {
  display: block;
  margin: 0 0 48px;
  padding: 20px 24px;
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 10px;
  background: var(--vp-c-bg);
}
.home-signal-main {
  min-width: 0;
}
.home-signal-kicker {
  margin: 0 0 6px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 700;
}
.home-signal-title {
  display: block;
  overflow: hidden;
  color: var(--vp-c-text-1);
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home-signal-title:hover {
  color: var(--vp-c-brand-1);
}
.home-signal-meta {
  display: block;
  margin-top: 4px;
  color: var(--vp-c-text-2);
  font-size: 13px;
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
.home-panel-label.app small {
  margin-left: 8px;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 400;
}
.home-panel-grid {
  display: grid;
  gap: 16px;
}
.home-panel-grid.cols-4 {
  grid-template-columns: repeat(4, 1fr);
}
.home-panel-grid.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}
.home-panel-grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 960px) {
  .home-panel-grid.cols-3,
  .home-panel-grid.cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .home-signal {
    margin-bottom: 36px;
    padding: 16px;
  }
  .home-signal-title {
    white-space: normal;
  }
  .home-panel-grid.cols-3,
  .home-panel-grid.cols-4,
  .home-panel-grid.cols-2 {
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
