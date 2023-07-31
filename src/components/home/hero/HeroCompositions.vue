<script setup>
import HeroLeft from '@/components/home/hero/components/HeroLeft.vue'
import HeroRight from '@/components/home/hero/components/HeroRight.vue'
</script>

<template>
  <div class="hero-box">
    <HeroLeft />
    <HeroRight />
  </div>
</template>

<style scoped>
.hero-box {
  width: 100vw;
  padding: 48px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
