<script setup>
// 招新季横幅:开关与文案在 docs/.vitepress/data/siteBanner.js
import { banner } from '../../data/siteBanner'
</script>

<template>
  <div v-if="banner.enabled" class="announcement-banner">
    <div class="announcement-banner-inner">
      {{ banner.text }}
      <a :href="banner.link" target="_blank" rel="noopener">{{ banner.linkText }}</a>
    </div>
  </div>
</template>
