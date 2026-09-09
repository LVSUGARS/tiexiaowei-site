<script setup>
// 随手翻开一页:随机跳转到档案库里的一页
import { randomPages } from '../../data/randomPages'

function open() {
  if (!randomPages.length) return
  const pick = randomPages[Math.floor(Math.random() * randomPages.length)]
  window.location.href = pick.link
}
</script>

<template>
  <button class="random-btn" type="button" :disabled="!randomPages.length" @click="open">🎲 随手翻开一页</button>
  <p v-if="!randomPages.length" class="random-empty">暂时没有可公开随机浏览的内容。</p>
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
.random-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.random-empty {
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>
