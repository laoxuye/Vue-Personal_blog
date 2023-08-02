<script setup>
import { Search } from '@icon-park/vue-next'
</script>

<template>
  <div>
    <button>
      <search theme="outline" size="24" fill="#333" />
      <span>搜索博客</span>
    </button>
  </div>
</template>

<style scoped>
button {
  height: 40px;
  border: 0;

  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 30px;
}
button span {
  margin-left: 10px;

  font-size: 17px;
  font-family: Source Han Sans CN;
}
</style>
