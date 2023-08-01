<script setup>
import HeroCompositions from '@/components/home/hero/HeroCompositions.vue'
import DividingLine from '@/components/home/DividingLine.vue'
import SidebarComposition from '@/components/home/sidebar/SidebarComposition.vue'
import ContentAreaCompositions from '@/components/home/contentArea/ContentAreaCompositions.vue'
</script>

<template>
  <div>
    <HeroCompositions />
    <DividingLine />
    <ContentAreaCompositions />
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
