<script setup>
import avatar from '@/public/notion.png'
</script>

<template>
  <div class="introduce-yourself">
    <div class="hero-left">
      <h1>Shi Du - 编程小卒</h1>
      <div class="text">
        <p>
          <span>我</span
          >仅是一个探索者，一直在试图创建出既美观又功能强大的网站。我的网站可能没有最炫酷的特效，没有最前沿的设计，但每一个元素，无论是色彩、线条，还是图像、文字，都是我精心打磨后的结果。在网站的功能方面，我也尽力去实现了一些实用的工具，希望它们能在你需要的时候，提供方便。
        </p>
      </div>
      <div class="across-black-box"></div>
      <div class="vertical-black-box"></div>
      <div class="white-box"></div>
      <img :src="avatar" class="avatar" alt="avatar" />
      <button>最新博客</button>
    </div>
  </div>
</template>

<style scoped>
h1,
p {
  font-family: Source Han Sans CN;
  font-weight: normal;
  letter-spacing: 0;
}

.hero-left {
  width: 893px;
  height: 691px;
  display: grid;
  grid-auto-columns: 18px 140px 195px 18px 1fr 18px;
  grid-auto-rows: 39px 60px 18px 1fr 378px 84px 51px 1fr;
}

h1 {
  font-size: 57px;
  text-align: center;

  grid-column: 5 / span 1;
  grid-row: 2 / 1;
}

.text {
  grid-column: 2 / 4;
  grid-row: 2 / 6;

  z-index: 9;
}

p {
  display: -webkit-box; /* 使用 flexbox 布局 */
  -webkit-box-orient: vertical; /* 垂直布局 */
  -webkit-line-clamp: 9; /* 显示最多2行 */
  overflow: hidden; /* 隐藏超出的内容 */

  font-size: 20px;
  line-height: 46px;
  color: white;
  margin: 0;
  text-align: justify;
}

p > span {
  font-size: 57px;
}
.across-black-box {
  width: 737px;
  height: 574px;
  background: #1b1b1b;

  grid-column: 3 / span 5;
  grid-row: 4 / span 6;
}

.vertical-black-box {
  width: 371px;
  height: 660px;
  background: #1b1b1b;

  grid-column: 1 / span 5;
  grid-row: 1 / span 8;
}

.white-box {
  width: 507px;
  background: #ffffff;

  grid-column: 5 / span 2;
  grid-row: 5 / 9;
}

.avatar {
  width: 537px;
  height: 537px;

  grid-column: 5 / span 2;
  grid-row: 5 / 9;
}

button {
  width: 335px;
  height: 84px;
  border: none;
  border-radius: 17px;

  font-size: 30px;
  letter-spacing: 2px;

  background: #ffffff;

  grid-column: 2 / 4;
  grid-row: 6 / 7;
}
</style>
