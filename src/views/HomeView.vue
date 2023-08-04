<script setup>
import HeroCompositions from '@/components/home/hero/HeroCompositions.vue'
import DividingLine from '@/components/home/DividingLine.vue'
import ContentAreaCompositions from '@/components/home/contentArea/ContentAreaCompositions.vue'
</script>

<template>
  <HeroCompositions />
  <DividingLine class="DividingLine" />
  <ContentAreaCompositions />
</template>

<style scoped>
div {
  width: 100%;
}
.DividingLine {
  margin: 20px 0;
}
</style>
