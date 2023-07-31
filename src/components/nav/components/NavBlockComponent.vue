<script setup></script>

<template>
  <div id="nav-block">
    <div class="block">关于我</div>
    <div class="block">博客</div>
    <div class="block">联系我</div>
  </div>
</template>

<style scoped>
div#nav-block {
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block:hover {
  cursor: pointer;
  border-bottom: 1px solid #2c3e50;
}
</style>
