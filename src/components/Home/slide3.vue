<template>
  <div class="slide3">
    <div class="slide3-content-bg">
      <svg
        width="388"
        height="605"
        class="slide3-atmosphere-map"
        viewBox="0 0 388 605"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.09 201.212C1.08679 201.608 0 200.869 0 199.79L0 72.8475C0 72.2295 0.372101 71.6725 0.94342 71.437C85.6198 36.529 175.945 12.2042 270.282 0.216869C271.193 0.101063 272 0.811691 272 1.73038V132.815C177.735 144.355 87.2165 167.655 2.09 201.212Z"
          fill="url(#paint0_linear_733_5717)"
        />
        <path
          d="M2.12381 604.101C1.11591 604.527 0 603.787 0 602.693L0 480.968C0 480.374 0.343781 479.834 0.882233 479.584C85.1733 440.437 176.264 413.062 272 399.668L272 132.815C316.061 127.456 360.921 124.643 406.473 124.582C407.316 124.581 408 125.264 408 126.108L408 521.5C408 522.343 407.318 523.026 406.474 523.028C361.785 523.091 315.138 525.958 272 531.474C177.32 543.591 86.7603 568.405 2.12381 604.101Z"
          fill="url(#paint1_linear_733_5717)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_733_5717"
            x1="204"
            y1="0"
            x2="204"
            y2="605"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00BD79" />
            <stop offset="1" stop-color="#01BD79" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_733_5717"
            x1="204"
            y1="0"
            x2="204"
            y2="605"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00BD79" />
            <stop offset="1" stop-color="#01BD79" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div class="slide3-content">
        <div class="slide3-content-mask" style="z-index: 2">
          <svg
            width="479"
            height="462"
            style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"
            viewBox="0 0 479 462"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              v-for="(point, index) in points"
              :key="index"
              :cx="point.x"
              :cy="point.y"
              r="2.95876"
              fill="#ffffff"
              fill-opacity="0.31"
            />
          </svg>
          <div class="slide3-content-mask-top">
            <p style="font-weight: 600">高校科研团队</p>
            <p>专注于技术赋能教学</p>

            <svg
              width="116"
              height="29"
              viewBox="0 0 116 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M72.5 0H58V14.5H43.5H29V0H14.5V14.5H0V29H14.5V14.5H29V29H43.5H58V14.5H72.5V29H87H101.5H116V14.5H101.5V0H87V14.5H72.5V0Z"
                fill="#BFBFBF"
              />
            </svg>
          </div>

          <div class="slide3-content-mask-bottom">
            <p class="slide3-content-mask-bottom-p0">F R O M</p>

            <div class="slide3-content-mask-bottom-schools">
              <div class="slide3-content-mask-bottom-schools-item">
                <p>中国传媒大学</p>
                <div class="slide3-content-mask-bottom-schools-item-tags">
                  数据科学与智能媒体学院
                </div>
              </div>
              <div class="slide3-content-mask-bottom-schools-item">
                <p>中国传媒大学</p>
                <div class="slide3-content-mask-bottom-schools-item-tags">广告媒体学院</div>
              </div>
              <div class="slide3-content-mask-bottom-schools-item">
                <p>澳门科技大学</p>
                <div class="slide3-content-mask-bottom-schools-item-tags">创新工程学院</div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide3-content-switch-btn">学术动态</div>
        <div class="slide3-content-switch-btn2">团队简介</div>

        <div class="slide3-content-switch-btns-1">
          <div class="slide3-content-switch-btn-1">
            学术动态
            <svg
              width="17"
              height="17"
              style="padding-left: 8px"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 3.5L3.5 13.5M13.5 3.5H3.5M13.5 3.5V13.5"
                stroke="#ffffff"
                stroke-width="1.25"
              />
            </svg>
          </div>
          <div class="slide3-content-switch-btn-1">
            团队简介
            <svg
              width="17"
              height="17"
              style="padding-left: 8px"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 3.5L3.5 13.5M13.5 3.5H3.5M13.5 3.5V13.5"
                stroke="#ffffff"
                stroke-width="1.25"
              />
            </svg>
          </div>
        </div>

        <slide3showcases></slide3showcases>
      </div>
    </div>
  </div>
</template>

<script>
import slide3showcases from './slide3-show-cases.vue'

export default {
  name: 'homeSlide3',
  components: {
    slide3showcases
  },
  data() {
    return {
      points: []
    }
  },
  created() {
    for (let y = 0; y < 23; y++) {
      for (let x = 0; x < 23; x++) {
        this.points.push({ x: x * 20.7112, y: y * 20.7112 })
      }
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
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  list-style-type: none;
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
.slide3 {
  position: relative;
  height: 620px;
  width: 100%;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}

.slide3-content-bg {
  height: 605px;
  width: 1480px;
  margin-left: 60px;
  position: relative;
  margin-top: 25px;
}

.slide3-atmosphere-map {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: auto;
  margin-bottom: auto;
  /* z-index: 3; */
}

.slide3-content {
  height: 460px;
  width: 1420px;
  background: rgba(245, 245, 245, 0.9);
  border-radius: 12px;
  border: 1px solid #ffffff;
  position: absolute;
  right: 60px;
  top: 60px;
  backdrop-filter: blur(8px); /* 添加毛玻璃效果 */
}

.slide3-content-mask {
  background: none;
  height: 100%;
  width: 480px;
  background: rgba(245, 245, 245, 0.9);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border: 1px solid #ffffff;
  position: relative;
  backdrop-filter: blur(8px); /* 添加毛玻璃效果 */

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  font-family: MiSans, MiSans;
}

.slide3-content-mask-top {
  position: absolute;
  top: 60px;
  left: 40px;
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-family: MinSans, MinSans;
}

.slide3-content-mask-top svg {
  margin-top: 12px;
}

.slide3-content-mask-bottom {
  position: absolute;
  height: 156px;
  width: 321px;
  /* background: #cccc; */
  bottom: 40px;
  left: 40px;
}

.slide3-content-mask-bottom-p0 {
  font-family: MiSans;
  font-weight: 600;
  font-size: 20px;

  position: absolute;
  top: 0;
  left: 0;
}

.slide3-content-mask-bottom-schools {
  position: absolute;
  bottom: 0;
  left: 0;
  /* gap:12px; */
}

.slide3-content-mask-bottom-schools-item {
  margin-top: 12px;
  height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  font-size: 14px;
  font-family: MiSans;
}
.slide3-content-mask-bottom-schools-item p {
  margin-right: 19px;
}

.slide3-content-mask-bottom-schools-item-tags {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;

  border: #bfbfbf 1px solid;
  border-radius: 20px;
}

.slide3-content-switch-btn {
  margin-left: 24px;
  z-index: 2;
  position: absolute;
  top: 17px;
  left: 480px;

  height: 30px;
  padding: 0 31px;

  border-bottom: 3px solid rgba(0, 189, 121, 0.62);
  /* padding: auto 0; */

  display: flex;
  align-items: start;
  justify-content: center;

  font-family: MiSans, MiSans;
  font-weight: 600;
  font-size: 16px;
  color: #000;
  text-align: left;
}

.slide3-content-switch-btn2 {
  margin-left: 24px;
  z-index: 2;
  position: absolute;
  top: 17px;

  height: 30px;
  padding: 0 31px;

  border-bottom: 3px solid rgba(0, 189, 121, 0.62);

  display: flex;
  align-items: start;
  justify-content: center;

  font-family: MiSans, MiSans;
  font-weight: 600;
  font-size: 16px;
  color: #000;
  text-align: left;

  left: 639px;
  color: #818181;
  border: none;
  padding-bottom: 3px;
}

.slide3-content-switch-btn-1,
.slide3-content-switch-btn2-1 {
  display: none;
}

.slide3-content-showcases {
  z-index: 1;
}

@media (max-width: 501px) {
  .slide3 {
    height: 672px;
  }
  .slide3-atmosphere-map {
    position: absolute;
    right: calc(50% - 53px);
    top: 0;
    margin-top: auto;
    margin-bottom: auto;

    width: 107px;
    height: 163px;
    gap: 0px;
    opacity: 0px;
  }

  .slide3-content-bg {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .slide3-content {
    height: 619px;
    width: calc(100% - 24px);
    border-radius: 12px;
    border: 1px solid #ffffff;
    position: absolute;
    right: 12px;
    top: 50px;
    backdrop-filter: blur(8px); /* 添加毛玻璃效果 */
    background: rgba(162, 162, 162, 0.1);
  }

  .slide3-content-mask {
    height: 242px;
    width: 100%;
    border-radius: 12px 12px 0 0;
    background: none;
    border: none;
    /* display: none; */
  }
  .slide3-content-mask svg {
    display: none;
  }

  .slide3-content-mask-top {
    display: none;
    position: absolute;
    height: 78px;
    width: 216px;
    top: 20px;
    left: calc(50% - 108px);
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 27.6px;
    font-size: 24px;
    font-family: MinSans, MinSans;
  }

  .slide3-content-mask-top svg {
    margin-top: 4px;
    display: block;
    color: #d9d9d9;
  }
  .slide3-content-mask-bottom {
    width: 262px;
    height: 120px;
    top: 106px;
    left: 12px;
    gap: 12px;
    opacity: 0px;
  }

  .slide3-content-mask-bottom-p0 {
    font-family: MiSans;
    font-weight: 600;
    font-size: 12px;

    position: absolute;
    top: 0;
    left: 0;
  }

  .slide3-content-mask-bottom-schools {
    font-size: 12px;
    margin-top: 8px;
    bottom: 0;
  }

  .slide3-content-mask-bottom-schools-item {
    font-size: 12px;
    margin: 0;
    margin-top: 8px;
  }

  .slide3-content-mask-bottom-schools-item p {
    margin-right: 12px;
  }

  .slide3-content-mask-bottom-schools-item-tags {
    font-size: 12px;
    padding: 5px 19px 5px 19px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
  }

  .slide3-content-showcases {
    height: 377px;
    top: calc(100% - 377px);
    bottom: 0;
    position: absolute;
  }

  .slide3-content-switch-btns-1 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 59px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .slide3-content-switch-btn,
  .slide3-content-switch-btn2 {
    display: none;
  }

  .slide3-content-switch-btn-1 {
    display: block;
    width: 157px;
    height: 35px;
    border-radius: 8px;
    background: #212121;
    color: #ffffff;
    z-index: 999;
    margin: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
