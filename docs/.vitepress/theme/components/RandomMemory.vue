<script setup>
// 随手翻开一页:随机跳转到档案库里的一页
import { randomPages } from '../../data/randomPages'

function open() {
  const pick = randomPages[Math.floor(Math.random() * randomPages.length)]
  window.location.href = pick.link
}
</script>

<template>
  <button class="random-btn" type="button" @click="open">🎲 随手翻开一页</button>
</template>

<style scoped>
.random-btn {
  padding: 10px 22px;
  border: 1px dashed var(--vp-c-brand-1);
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s;
}
.random-btn:hover {
  background: var(--vp-c-brand-soft);
}
</style>
