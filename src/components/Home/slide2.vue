<template>
  <div class="slide2">
    <div class="slide2-content">
      <div class="slide2-content-title">
        <h1 class="slide2-content-title-1">我们能够</h1>
        <h1 class="slide2-content-title-2">
          成为你学习道路上的<span style="color: #00bd79">得力助手</span>
        </h1>
      </div>

      <div class="slide2-content-cards-view">
        <slide2DemoShowCard />
      </div>

      <div class="slide2-content-chat-demo">
        <slide2-demo-card style="position: absolute; top: 0; left: 0; right: 0; bottom: 0" />
        <!-- <p style="color:#00BD79;">组件正在显示</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import slide2DemoCard from './slide2-demo-card.vue'
import slide2DemoShowCard from './slide2-demo-show-card.vue'

export default {
  name: 'homeSlide2',
  components: {
    slide2DemoCard,
    slide2DemoShowCard
  }
}
</script>

<style scoped>
/* 重置样式，确保所有元素从边缘开始，无默认内外边距 */
* {
  margin: 0;
  padding: 0;
}

input {
  background: none; /* 移除背景 */
  border: none; /* 移除边框 */
  outline: none; /* 在聚焦时移除轮廓 */
  padding: 0; /* 移除内边距 */
  margin: 0; /* 移除外边距 */
  box-shadow: none; /* 移除阴影 */
  font-family: inherit; /* 继承字体 */
  font-size: inherit; /* 继承字体大小 */
  color: inherit; /* 继承字体颜色 */
}

/* 基础幻灯片位置设置 */
.slide2 {
  position: relative;
  width: 100%;
  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;
}

.slide2-content {
  height: 643px;
  width: 1420px;
  display: flex;
  max-width: 100%;
  position: relative;
}

.slide2-content-title {
  position: absolute;
  width: 450px;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column; /* 新增此行代码 */
  justify-content: center;
  align-items: center; /* 如果需要的话，可以取消注释此行以垂直居中所有子元素 */
}

.slide2-content-title h1 {
  font-family: MiSans, MiSans;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
}

.slide2-content-title-1 {
  font-size: 28px;
  position: absolute;
  top: 0;
}

.slide2-content-title-2 {
  font-size: 34px;
  position: absolute;
  top: 44px;
}

@media screen and (max-width: 1500px) {
  .slide2-content-title {
    width: 100%;
  }
  .slide2-content {
    height: 1217px;
    display: flex;
    width: calc(100% - 24px);
    margin-left: 12px;
    margin-right: 12px;
    position: relative;
  }
  .slide2-content-title-1 {
    font-size: 20px;
    position: absolute;
    top: 0;
  }

  .slide2-content-title-2 {
    font-size: 28px;
    position: absolute;
    top: 27px;
  }
}

.slide2-content-cards-view {
  position: absolute;
  /* background: #ffffff; */
  height: 520px;
  width: 460px;
  display: flex;

  left: 0;
  bottom: 0;
}

.slide2-content-chat-demo {
  position: absolute;
  /* background: #ffffff; */

  height: 520px;
  width: 940px;
  display: flex;

  right: 0;
  bottom: 0;
}

.slide2-content-chat-demo-card {
  border-radius: 8px 8px 8px 8px;
  background: #363636;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

@media screen and (max-width: 1500px) {
  .slide2-content-chat-demo-card {
    border-radius: 8px 8px 8px 8px;
    background: #363636;
    width: 100%;
    /* margin-left:14px;
        margin-right: 14px; */
    position: absolute;
    height: 520px;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  .slide2-content-cards-view {
    position: absolute;
    /* background: #ffffff; */
    height: 520px;
    width: 100%;
    /* margin-left:14px;
        margin-right: 14px; */
    display: flex;
    top: 635px;
  }

  .slide2-content-chat-demo {
    position: absolute;
    /* background: #ffffff; */

    height: 520px;
    width: 100%;
    display: flex;

    top: 73px;

    right: 50%;
    transform: translateX(50%);
  }

  .slide2-content-chat-demo-card {
    border-radius: 8px 8px 8px 8px;
    background: #363636;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
