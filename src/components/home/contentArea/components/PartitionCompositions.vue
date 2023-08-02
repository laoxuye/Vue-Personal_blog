<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  message: String
})

const { message } = toRefs(props)
</script>

<template>
  <div class="article-display-box">
    <div class="article-title">
      <h1>{{ message }}</h1>
    </div>
    <slot name="contentPresentation"></slot>
  </div>
</template>

<style scoped>
div.article-display-box {
  width: 448px;
  height: 452px;
}

div.article-display-box .article-title {
  width: 448px;
  height: 47px;
  position: relative;
}
.article-title::before {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  content: '';
  width: 100%;
  height: 1px;
  background: #d8d8d8;
}
h1 {
  font-size: 30px;
  font-weight: normal;
}
</style>
