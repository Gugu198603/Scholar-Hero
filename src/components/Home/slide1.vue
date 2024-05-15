<template>
  <div class="slide1">
    <img class="slide1-background-base" :src="homeslide1bgbase" alt="background image" />
    <img class="slide1-background2" :src="homeslide3bg" alt="background image" />
    <div class="slide1-content">
      <img class="slide1-background1" :src="homeslide2bg" alt="background image" />
      <h2 class="slide1-slogan">与莘莘学子<br />共创未来智能</h2>
      <img class="slide1-background3" :src="homeslide4bg" alt="background image" />

      <slide1Card
        :title="title1"
        :subtitle="subtitle1"
        :cardDecorate1Color="cardDecorate1Color1"
        style="z-index: 2; position: absolute; top: 450px; left: 0; backdrop-filter: blur(56px)"
      />

      <slide1Card
        :title="title2"
        :subtitle="subtitle2"
        :cardDecorate1Color="cardDecorate1Color2"
        style="z-index: 2; position: absolute; top: 450px; left: 480px; backdrop-filter: blur(56px)"
      />
    </div>
  </div>
</template>

<script>
import homeslide1bgbase from '../../assets/img/framework/homeslide1bgbase.png'
import homeslide2bg from '../../assets/img/framework/homeslide2bg.png'
import homeslide3bg from '../../assets/img/framework/homeslide3bg.png'
import homeslide4bg from '../../assets/img/framework/homeslide4bg.png'

import slide1Card from './slide1-card.vue'

export default {
  name: 'homeSlide1',
  components: {
    slide1Card
  },
  data() {
    return {
      homeslide1bgbase: homeslide1bgbase,
      homeslide2bg: homeslide2bg,
      homeslide3bg: homeslide3bg,
      homeslide4bg: homeslide4bg,
      title1: '书卷侠 Scholar Hero',
      subtitle1: '书卷侠，助你识得万卷书',
      cardDecorate1Color1: '#00BD79',

      title2: '书卷 AI 实验室',
      subtitle2: '探索更前沿的 AI Agent 产品应用',
      cardDecorate1Color2: '#4047F2'
    }
  }
}
</script>

<style scoped>
/* 重置样式，确保所有元素从边缘开始，无默认内外边距 */
* {
  margin: 0;
  padding: 0;
}

/* 基础幻灯片位置设置 */
.slide1 {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}
.slide1-content {
  position: relative;
  width: 1420px;
  height: 720px;
}

/* 幻灯片背景的基本样式 */
.slide1-background-base {
  z-index: 0;
  position: absolute;
  width: 100vw; /* 视口宽度 */
  height: 100vh; /* 视口高度 */
}

/* 特定背景样式 */
.slide1-background1 {
  z-index: 1;
  position: absolute;
  right: 0;
  top: 140px; /* 使用 top 替代 padding-top */
  width: 458px;
  height: 458px;
}

.slide1-background2 {
  z-index: 1;
  position: absolute;
  left: 0;
}

/* 幻灯片中的文本标语样式 */
.slide1-slogan {
  z-index: 2;
  position: absolute;
  color: #1a1a1a;
  font-family: 'MiSans', sans-serif; /* 确保字体回退 */
  font-size: 60px;
  font-weight: 630;
  left: 0;
  top: 140px; /* 使用 top 替代 padding-top */
  width: 479px;
  white-space: pre-line; /* 保留空格和换行 */
}

.slide1-background3 {
  z-index: 2;
  position: absolute;
  top: 298px;
  left: 163px;
}
</style>
