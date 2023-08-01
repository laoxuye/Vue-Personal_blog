<script setup>
import LogoCompositions from '@/components/nav/components/LogoCompositions.vue'
import RightNavComponent from '@/components/nav/components/RightNavComponent.vue'
</script>

<template>
  <nav>
    <!-- logo -->
    <LogoCompositions />
    <!-- 右边区域 -->
    <RightNavComponent />
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 57px;
  padding: 0 42px;
  border-bottom: 1px solid #2c3e50;
  display: flex;
  justify-content: space-between;
}
</style>
