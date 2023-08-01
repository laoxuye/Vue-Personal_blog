<script setup>
import NavBlockComponent from '@/components/nav/components/NavBlockComponent.vue'
import SearchCompositions from '@/components/nav/components/SearchCompositions.vue'
</script>

<template>
  <div id="right-nav">
    <!-- 导航块 -->
    <NavBlockComponent />
    <!-- 搜索 -->
    <SearchCompositions class="SearchCompositions" v-show="true" />
  </div>
</template>

<style scoped>
div#right-nav {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.SearchCompositions {
  margin-left: 30px;
}
</style>
