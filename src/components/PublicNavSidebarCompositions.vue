<script setup>
import NavComponents from '@/components/nav/NavComponents.vue'
import SidebarComposition from '@/components/home/sidebar/SidebarComposition.vue'
import { ref } from 'vue'

let SidebarCompositionShow = ref(false)
</script>

<template>
  <NavComponents />
  <div class="two-box">
    <div class="LeftHome">
      <RouterView />
    </div>
    <SidebarComposition class="SearchCompositions" v-show="SidebarCompositionShow" />
  </div>
</template>

<style scoped>
div.two-box {
  width: 100vw;
  display: grid;
  grid-auto-columns: 3fr 1fr;
  grid-auto-rows: auto;
}

.LeftHome {
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / span 1;
}

.SearchCompositions {
  grid-column: 2 / 3;
  grid-row: 1 / span 1;
}
</style>
