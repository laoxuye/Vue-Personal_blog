<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

let canvas = ref(null)
let intervalId = null
let ctx = null
let radius = null

const initClock = () => {
  ctx = canvas.value.getContext('2d')
  radius = canvas.value.height / 2
  ctx.translate(radius, radius)
  radius = radius * 0.9
}

const drawClock = () => {
  ctx.clearRect(-radius / 0.9, -radius / 0.9, canvas.value.width, canvas.value.height)
  drawFace(ctx, radius)
  drawNumbers(ctx, radius)
  drawTime(ctx, radius)
}

const drawFace = (ctx, radius) => {
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, 2 * Math.PI)
  ctx.fillStyle = 'white'
  ctx.fill()

  var grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
  grad.addColorStop(0, '#333')
  grad.addColorStop(0.5, 'white')
  grad.addColorStop(1, '#333')
  ctx.strokeStyle = grad
  ctx.lineWidth = radius * 0.1
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI)
  ctx.fillStyle = '#333'
  ctx.fill()
}

const drawNumbers = (ctx, radius) => {
  let ang
  let num
  ctx.font = radius * 0.15 + 'px arial'
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6
    ctx.rotate(ang)
    ctx.translate(0, -radius * 0.85)
    ctx.rotate(-ang)
    ctx.fillText(num.toString(), 0, 0)
    ctx.rotate(ang)
    ctx.translate(0, radius * 0.85)
    ctx.rotate(-ang)
  }
}

const drawTime = (ctx, radius) => {
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  hour = hour % 12
  hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60)
  drawHand(ctx, hour, radius * 0.5, radius * 0.07)
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60)
  drawHand(ctx, minute, radius * 0.8, radius * 0.07)
  second = (second * Math.PI) / 30
  drawHand(ctx, second, radius * 0.9, radius * 0.02)
}

const drawHand = (ctx, pos, length, width) => {
  ctx.beginPath()
  ctx.lineWidth = width
  ctx.lineCap = 'round'
  ctx.moveTo(0, 0)
  ctx.rotate(pos)
  ctx.lineTo(0, -length)
  ctx.stroke()
  ctx.rotate(-pos)
}

onMounted(() => {
  initClock()
  drawClock() // Draw the clock immediately
  intervalId = setInterval(drawClock, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <main>
    <canvas id="canvas" width="600" height="600" ref="canvas"></canvas>
  </main>
</template>

<style scoped></style>
