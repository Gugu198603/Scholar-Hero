<script setup>
import HeadingView from '../components/Heading.vue'
import homeSlide1 from '../components/Home/slide1.vue'
import homeSlide2 from '../components/Home/slide2.vue'
import homeSlide3 from '../components/Home/slide3.vue'
import homeSlide4 from '../components/Home/slide4.vue'
import homeSlide5 from '../components/Home/slide5.vue'
</script>

<template>
  <HeadingView />
  <!-- <div class="slide" style="height:61px"></div> -->
  <homeSlide1 class="slide" />
  <!-- <homeSlide2 class="slide"/> -->
  <homeSlide2 class="slide" />
  <!-- <homeSlide3 class="slide"/> -->
  <homeSlide3 class="slide" />
  <homeSlide4 class="slide" />
  <homeSlide5 class="slide" />

  <!-- <homeSlide1 class="slide" style="height:720px;"/>
    <homeSlide2 class="slide" style="height:643px; margin-top:88px;"/>
    <homeSlide3 class="slide" style="height:620px;"/> -->
</template>
<style scoped>
.slide {
  position: relative;
  width: 100%;
}
/* 隐藏滚动条轨道 */
.slide::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
}

/* 隐藏滚动条 */
.slide::-webkit-scrollbar-thumb {
    display: none;
}


@media screen and (min-width: 1500px) {
  .slide homeSlide1 {
    height: 632px;
  }
  .slide homeSlide2 {
    height: 643px;
  }
  .slide homeSlide3 {
    height: 636px;
  }
  .slide homeSlide4 {
    height: 420px;
  }
  .slide homeSlide5 {
    height: 524px;
  }
}

@media screen and (max-width: 1135px) {
  .slide homeSlide1 {
    height: 607px;
  }
  .slide homeSlide2 {
    height: 643px;
    /* margin-top:88px; */
  }
  .slide homeSlide3 {
    height: 636px;
  }
  .slide homeSlide5 {
    height: 524px;
  }
}

@media screen and (max-width: 501px) {
  .slide homeSlide1 {
    height: 607px;
  }
  .slide homeSlide2 {
    height: 643px;
    /* margin-top:88px; */
  }
  .slide homeSlide3 {
    height: 672px;
  }
  .slide homeSlide4 {
    height: 439px;
  }
  .slide homeSlide5 {
    height: 524px;
  }
}
</style>
