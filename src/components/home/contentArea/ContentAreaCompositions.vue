<script setup>
import docker_img from '@/public/docker-logo.png'
import navigation_but from '@/public/navigation-but.png'
import { ref } from 'vue'

let items = ref([
  {
    docker_img: 'https://example.com/path/to/docker/image.jpg',
    article_title: 'Docker 技术的应用',
    article_date: '2023-12-10',
    article_intro: '从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。'
  },
  {
    docker_img: 'https://example.com/path/to/docker/image.jpg',
    article_title: 'Web 新技术',
    article_date: '2023-11-10',
    article_intro: 'WebAssembly 是一种新的编码方式，可以在现代的网络浏览器中运行'
  },
  {
    docker_img: 'https://example.com/path/to/docker/image.jpg',
    article_title: 'JavaScrip 新增类型',
    article_date: '2023-12-10',
    article_intro:
      'js新增基本数据类型，ES10新增数据类型BigInt，js数据基本数据类型,你不知道的js数据类型详解，8种js数据类型'
  }
])
</script>

<template>
  <div class="blog-show">
    <div class="content">
      <div class="article-display-box">
        <div class="article-title">
          <h1>最新文章</h1>
        </div>
        <div class="article-content">
          <div class="article-article" v-for="(item, index) in items" :key="index">
            <div class="article-article-img">
              <img :src="docker_img" :alt="docker_img" />
            </div>
            <div class="article-article-content">
              <div>
                <h1>{{ item.article_title }}</h1>
                <p>{{ item.article_date }}</p>
                <div class="article-article-introduce">
                  {{ item.article_intro }}
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
      </div>
    </div>
  </div>
</template>

<style scoped>
div.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
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

.article-content {
  width: 100%;
  height: 366px;
  margin-top: 28px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

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
