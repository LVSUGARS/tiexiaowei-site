<script setup>
// 精选瞬间照片墙:占位瓦片(渐变+emoji);data 里 img 有值时自动切换为真实照片
import { photoWall } from '../../data/photoWall'
</script>

<template>
  <div class="photo-wall">
    <div v-for="(p, i) in photoWall" :key="i" class="pw-tile" :style="{ '--tile-hue': String(p.hue) }">
      <img v-if="p.img" :src="p.img" :alt="p.title" loading="lazy" />
      <span v-else class="pw-emoji">{{ p.emoji }}</span>
      <span class="pw-title">{{ p.title }}</span>
    </div>
  </div>
</template>

<style scoped>
.photo-wall {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin: 16px 0;
}
.pw-tile {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    hsla(var(--tile-hue, 227), 70%, 62%, 0.85),
    hsla(var(--tile-hue, 227), 65%, 42%, 0.85)
  );
}
.pw-tile img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pw-emoji {
  font-size: 30px;
}
.pw-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 4px 10px;
  font-size: 12px;
  color: #fff;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.55));
}
</style>
