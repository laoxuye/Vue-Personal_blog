<script setup>
// 导入必要的 Vue 组件函数
import { onMounted, ref, onUnmounted } from 'vue'

// 创建 ref 引用，它将用于获取 canvas DOM 对象
let canvas = ref(null)
// 创建变量以存储 setInterval 的 id，用于在组件卸载时清除计时器
let intervalId = null
// 创建变量以存储 canvas 的 context 对象
let ctx = null
// 创建变量以存储钟表的半径
let radius = null

// 初始化钟表的函数
const initClock = () => {
  // 获取 canvas 的 context
  ctx = canvas.value.getContext('2d')
  // 计算钟表的半径，这个半径是 canvas 的一半
  radius = canvas.value.height / 2
  // 设置坐标系统的原点到 canvas 的中心
  ctx.translate(radius, radius)
  // 缩小半径到90%，这样钟表就不会贴着 canvas 的边缘
  radius = radius * 0.9
}

// 绘制钟表的函数
const drawClock = () => {
  // 清除整个画布
  ctx.clearRect(-radius / 0.9, -radius / 0.9, canvas.value.width, canvas.value.height)
  // 绘制钟表的外圈
  drawFace(ctx, radius)
  // 绘制时针标记
  drawNumbers(ctx, radius)
  // 绘制时针、分针和秒针
  drawTime(ctx, radius)
}

// 绘制钟表外圈的函数
const drawFace = (ctx, radius) => {
  // 开始一个新的路径
  ctx.beginPath()
  // 画一个圆，表示钟表的外圈
  ctx.arc(0, 0, radius, 0, 2 * Math.PI)
  // 设置填充颜色为白色
  ctx.fillStyle = 'white'
  // 填充路径
  ctx.fill()
  // 创建一个径向渐变，用于画钟表的边框
  var grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
  grad.addColorStop(0, '#333')
  grad.addColorStop(0.5, 'white')
  grad.addColorStop(1, '#333')
  // 设置边框颜色为渐变色
  ctx.strokeStyle = grad
  // 设置边框宽度
  ctx.lineWidth = radius * 0.1
  // 画边框
  ctx.stroke()
  // 开始一个新的路径
  ctx.beginPath()
  // 画一个圆，表示钟表的中心
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI)
  // 设置填充颜色为黑色
  ctx.fillStyle = '#333'
  // 填充路径
  ctx.fill()
}

// 绘制时针标记的函数
const drawNumbers = (ctx, radius) => {
  let ang
  let num
  // 设置字体大小和字体
  ctx.font = radius * 0.15 + 'px arial'
  // 设置文本的基线为中心
  ctx.textBaseline = 'middle'
  // 设置文本的对齐方式为居中
  ctx.textAlign = 'center'
  // 遍历 1 到 12 的每个数字
  for (num = 1; num < 13; num++) {
    // 计算每个数字对应的角度
    ang = (num * Math.PI) / 6
    // 旋转坐标系
    ctx.rotate(ang)
    // 平移坐标系
    ctx.translate(0, -radius * 0.85)
    // 旋转坐标系回来
    ctx.rotate(-ang)
    // 绘制数字
    ctx.fillText(num.toString(), 0, 0)
    // 旋转坐标系
    ctx.rotate(ang)
    // 平移坐标系回来
    ctx.translate(0, radius * 0.85)
    // 旋转坐标系回来
    ctx.rotate(-ang)
  }
}

// 绘制时间（时针、分针、秒针）的函数
const drawTime = (ctx, radius) => {
  // 获取当前时间
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  // 计算时针的角度，并画出时针
  hour = hour % 12
  hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60)
  drawHand(ctx, hour, radius * 0.5, radius * 0.07)
  // 计算分针的角度，并画出分针
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60)
  drawHand(ctx, minute, radius * 0.8, radius * 0.07)
  // 计算秒针的角度，并画出秒针
  second = (second * Math.PI) / 30
  drawHand(ctx, second, radius * 0.9, radius * 0.02)
}

// 绘制钟表指针的函数
const drawHand = (ctx, pos, length, width) => {
  // 开始一个新的路径
  ctx.beginPath()
  // 设置线宽
  ctx.lineWidth = width
  // 设置线端点的样式为圆形
  ctx.lineCap = 'round'
  // 移动画笔到坐标原点
  ctx.moveTo(0, 0)
  // 旋转坐标系到指针的位置
  ctx.rotate(pos)
  // 画一条线，表示指针
  ctx.lineTo(0, -length)
  // 使用当前的样式画线
  ctx.stroke()
  // 旋转坐标系回到原来的位置
  ctx.rotate(-pos)
}

// 当组件加载完毕时，初始化钟表并开始定时更新画面
onMounted(() => {
  initClock()
  drawClock() // Draw the clock immediately
  intervalId = setInterval(drawClock, 1000)
})

// 当组件被卸载时，清除定时器
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <main>
    <!-- Canvas element, the 'ref' attribute is used to get the DOM object -->
    <canvas id="canvas" width="600" height="600" ref="canvas"></canvas>
  </main>
</template>

<style scoped></style>
