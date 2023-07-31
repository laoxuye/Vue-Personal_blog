<script setup>
import Logo from '@/public/Logo.png'
</script>

<template>
  <div>
    <img :src="Logo" :alt="Logo" />
    <p>ShiDu的个人博客</p>
  </div>
</template>

<style scoped>
div {
  width: 215px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
div > p {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;

  color: #3d3d3d;
}
</style>
