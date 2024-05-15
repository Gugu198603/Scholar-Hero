<template>
  <div class="slide1-card">
    <div class="slide1-card-header">{{ title }}</div>
    <div class="slide1-card-body">{{ subtitle }}</div>

    <svg
      width="63"
      height="101"
      viewBox="0 0 63 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="slide1-card-decorate1"
    >
      <g id="Union">
        <path
          d="M0.861023 32.7744C-0.718594 33.3899 -2.44186 32.2369 -2.44186 30.5416V13.868C-2.44186 12.9183 -1.87779 12.0582 -1.00233 11.6903C11.4805 6.44442 24.7154 2.69039 38.501 0.653369C39.9222 0.443373 41.186 1.55357 41.186 2.99015V22.513C27.1567 24.3055 13.6448 27.793 0.861023 32.7744Z"
          :fill="cardDecorate1Color"
        />
        <path
          d="M0.917267 100.116C-0.671154 100.777 -2.44186 99.6228 -2.44186 97.9024V82.1209C-2.44186 81.2101 -1.92258 80.3778 -1.0995 79.9878C12.0834 73.7412 26.2838 69.361 41.186 67.185L41.186 22.513C47.5642 21.7034 54.0466 21.2409 60.6209 21.1508C61.9347 21.1328 63 22.1997 63 23.5137L63 85.4566C63 86.7705 61.9349 87.834 60.6211 87.8528C54.1135 87.9458 47.4212 88.4177 41.186 89.2498C27.1196 91.1287 13.62 94.8312 0.917267 100.116Z"
          :fill="cardDecorate1Color"
        />
      </g>
    </svg>

    <svg
      width="140"
      height="212"
      viewBox="0 0 140 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="slide1-card-decorate2"
    >
      <path
        id="Union"
        d="M47.3007 47.3007V3.35134C47.3007 2.10423 48.3965 1.14024 49.6323 1.3073C80.7684 5.51626 110.608 13.7697 138.639 25.5077C139.406 25.8286 139.902 26.5793 139.902 27.4101V68.3599C139.902 69.828 138.415 70.8295 137.05 70.2885C108.694 59.0496 78.6041 51.2249 47.3007 47.3007ZM47.3007 47.3007V140.328C79.5614 144.95 110.272 154.346 138.723 167.771C139.444 168.112 139.902 168.839 139.902 169.636V208.754C139.902 210.244 138.375 211.246 137.003 210.665C108.815 198.72 78.7242 190.395 47.3007 186.277C33.1123 184.419 17.8085 183.424 3.06822 183.338C1.92574 183.332 1 182.406 1 181.264V46.4988C1 45.3563 1.92635 44.4295 3.06884 44.4358C18.0451 44.5182 32.7999 45.4948 47.3007 47.3007Z"
        stroke="white"
      />
    </svg>

    <a :href="funcUrl" class="slide1-card-botton">
      立即体验
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 208">
          <path id="Vector 42" d="M15 1L1 15M15 1H1M15 1V15" stroke="white" stroke-width="1.75" />
        </g>
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  name: 'slide1-card',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    cardDecorate1Color: {
      type: String,
      default: '#4047F2'
    },
    funcUrl: {
      type: String,
      default: 'https://ai.eggshellos.online'
    }
  }
}
</script>
<style scope>
.slide1-card {
  width: 460px;
  height: 240px;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(233, 234, 235, 0.5);
  transition:
    transform 0.6s ease-in-out,
    box-shadow 0.6s ease-in-out;
  transform-style: preserve-3d;
}

/* 
.slide1-card:hover {
  transform: rotateX(10deg) rotateY(-10deg) translateZ(5px); /* 绕另一条对角线反转效果 */
/* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */ /* 右下角抬起 */
/* } */
*/ */ .atvImg-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.2s ease-out;
}

.atvImg-container.over .atvImg-shadow {
  box-shadow:
    0 45px 100px rgba(14, 21, 47, 0.4),
    0 16px 40px rgba(14, 21, 47, 0.4);
}

.atvImg-layers {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  transform-style: preserve-3d;
}

.atvImg-rendered-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  background-size: cover;
  transition: all 0.1s ease-out;
  overflow: hidden;
  border-radius: 8px;
}

.atvImg-shadow {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  transition: all 0.2s ease-out;
  box-shadow: 0 8px 30px rgba(14, 21, 47, 0.6);
}

.atvImg-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%);
}
.slide1-card-header {
  color: rgba(0, 0, 0, 0.8);
  font-family: MiSans;
  font-size: 24px;
  font-style: normal;
  font-weight: 630;
  line-height: normal;
  padding-left: 24px;
  padding-top: 16px;
}

.slide1-card-body {
  color: #999;
  font-family: MiSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 380;
  line-height: normal;
  padding-left: 24px;
  padding-top: 4px;
}

.slide1-card-decorate1 {
  position: absolute;
  top: 105px;
  left: 0;
}

.slide1-card-decorate2 {
  position: absolute;
  bottom: 0;
  right: 0;
}

.slide1-card-botton {
  position: absolute;
  right: 24px;
  top: 168px;

  display: inline-flex;
  padding: 12px 42px 12px 44px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 74px;
  background: linear-gradient(180deg, #1a1a1a 0%, #252525 92.86%);

  color: #fff;
  font-family: MiSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 380;
  line-height: normal;
}
</style>
