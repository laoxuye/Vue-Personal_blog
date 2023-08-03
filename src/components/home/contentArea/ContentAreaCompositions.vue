<script setup>
import { ref } from 'vue'
import PartitionCompositions from '@/components/home/contentArea/components/PartitionCompositions.vue'
import ContentComposition from '@/components/home/contentArea/components/ContentComposition.vue'

import docker_img from '@/public/docker-logo.png'

import { Rss } from '@icon-park/vue-next'

let blogCardsData = ref([
  {
    title: '最新博客',
    data: [
      {
        article_img: docker_img,
        article_title: 'Docker 技术的应用',
        article_date: '2023-12-10',
        article_intro:
          '从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。'
      },
      {
        article_img: docker_img,
        article_title: 'Web 新技术',
        article_date: '2023-11-10',
        article_intro: 'WebAssembly 是一种新的编码方式，可以在现代的网络浏览器中运行'
      },
      {
        article_img: docker_img,
        article_title: 'JavaScrip 新增类型',
        article_date: '2023-12-10',
        article_intro:
          'js新增基本数据类型，ES10新增数据类型BigInt，js数据基本数据类型,你不知道的js数据类型详解，8种js数据类型'
      }
    ]
  },
  {
    title: '精选文章',
    data: [
      {
        article_img: docker_img,
        article_title: 'Docker 技术的应用',
        article_date: '2023-12-10',
        article_intro:
          '从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。'
      },
      {
        article_img: docker_img,
        article_title: 'Web 新技术',
        article_date: '2023-11-10',
        article_intro: 'WebAssembly 是一种新的编码方式，可以在现代的网络浏览器中运行'
      },
      {
        article_img: docker_img,
        article_title: 'JavaScrip 新增类型',
        article_date: '2023-12-10',
        article_intro:
          'js新增基本数据类型，ES10新增数据类型BigInt，js数据基本数据类型,你不知道的js数据类型详解，8种js数据类型'
      }
    ]
  }
])

let subscribe = ref('订阅我的博客')
</script>

<template>
  <div class="blog-show">
    <div class="content">
      <PartitionCompositions
        v-for="(blogItem, blogIndex) in blogCardsData"
        :key="blogIndex"
        :message="blogItem.title"
      >
        <template v-slot:contentPresentation>
          <div class="article-content">
            <ContentComposition
              v-for="(item, index) in blogItem.data"
              :key="index"
              :article_img="item.article_img"
              :article_title="item.article_title"
              :article_date="item.article_date"
              :article_intro="item.article_intro"
            />
          </div>
        </template>
      </PartitionCompositions>
      <PartitionCompositions :message="subscribe">
        <template v-slot:contentPresentation>
          <div class="rss-email">
            <input type="text" name="email" id="email" placeholder="请输入邮箱" /><label for="email"
              ><rss theme="outline" size="24" fill="#828282"
            /></label>
          </div>
        </template>
      </PartitionCompositions>
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
.article-content {
  width: 100%;
  height: 366px;
  margin-top: 28px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

div.rss-email {
  width: 448px;
  height: 59px;
  border-radius: 10px;
  position: relative;
}
div.rss-email label {
  position: absolute;
  right: 10px;
}
div.rss-email input {
  width: 448px;
  height: 59px;
  border-radius: 10px;
  font-size: 24px;
  border: 1px solid #828282;
  padding-left: 20px;
}
</style>
