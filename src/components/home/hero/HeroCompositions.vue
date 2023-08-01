<script setup>
import HeroLeft from '@/components/home/hero/components/HeroLeft.vue'
import HeroRight from '@/components/home/hero/components/HeroRight.vue'
import { ref } from 'vue'

let HeroRightShow = ref(false)
</script>

<template>
  <div class="hero-box">
    <HeroLeft />
    <HeroRight v-show="HeroRightShow" />
  </div>
</template>

<style scoped>
.hero-box {
  width: 100%;
  padding: 48px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
