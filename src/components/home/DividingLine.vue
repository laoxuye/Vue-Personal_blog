<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  div_width: Number
})

const { div_width } = toRefs(props)
</script>

<template>
  <div class="dividing-line">
    <div></div>
  </div>
</template>

<style scoped>
div.dividing-line div {
  margin: 0 auto;

  height: 1px;
  background: #d8d8d8;
}
</style>
