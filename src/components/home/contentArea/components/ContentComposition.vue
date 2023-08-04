<script setup>
import navigation_but from '@/public/navigation-but.png'
import { toRefs } from 'vue'

const props = defineProps({
  article_img: String,
  article_title: String,
  article_date: String,
  article_intro: String
})

const { article_img, article_title, article_date, article_intro } = toRefs(props)
</script>

<template>
  <div>
    <div class="article-article">
      <div class="article-article-img">
        <img :src="article_img" :alt="article_img" />
      </div>
      <div class="article-article-content">
        <div>
          <h1>{{ article_title }}</h1>
          <p>{{ article_date }}</p>
          <div class="article-article-introduce">
            {{ article_intro }}
          </div>
        </div>
      </div>
      <div class="article-article-but">
        <button>
          <img :src="navigation_but" :alt="navigation_but" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-article {
  width: 100%;
  height: 109px;
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  display: flex;
}

div.article-article-img,
div.article-article-but {
  flex: 1;
}
div.article-article-content {
  flex: 3;
  padding: 6px 0 0 20px;
}

.article-article-img {
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  font-size: 0;
}

.article-article-img > img {
  width: 100%;
  height: 100%;
}

.article-article-content * {
  margin: 0;
}

.article-article-content h1 {
  font-size: 19px;
  color: #3d3d3d;
}
.article-article-content p {
  margin-top: 2px;
  font-size: 12px;
  color: #7b7b7b;
}
.article-article-content div.article-article-introduce {
  margin-top: 7px;
  min-width: 228px;
  font-size: 14px;
  line-height: 21px;

  display: -webkit-box; /* 使用 flexbox 布局 */
  -webkit-box-orient: vertical; /* 垂直布局 */
  -webkit-line-clamp: 2; /* 显示最多2行 */
  overflow: hidden; /* 隐藏超出的内容 */
}

.article-article-but {
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.article-article-but button {
  width: 64px;
  height: 64px;
  background: #000000;
  border: none;
  border-radius: 50%;
  font-size: 0;
  text-align: center;
  padding-left: 11px;
}
.article-article-but button img {
  width: 29px;
  height: 30px;
}
</style>
