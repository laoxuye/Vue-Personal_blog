<script setup></script>

<template>
  <div class="blog-show">
    <div class="content">
      <div class="article-display-box">
        <div class="article-title">
          <h1>最新文章</h1>
        </div>

        <div></div>
      </div>

      <div class="article-display-box"></div>
    </div>
  </div>
</template>

<style scoped>
div.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
div.content div.article-display-box {
  width: 448px;
  height: 452px;
}

div.content div.article-display-box .article-title {
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
