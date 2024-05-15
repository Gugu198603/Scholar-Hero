<template>
  <div class="slide5">
    <div class="slide5-content">
      <div class="slide5-content-InfoLists">
        <ul class="slide5-content-InfoLists-mb-hidden">
          <li class="slide5-content-InfoLists-section slide5-content-InfoLists-mb-hidden">
            产品咨询
          </li>
          <li>全部产品</li>
          <li>免费试用</li>
          <li>书卷侠（教师端）</li>
          <li>书卷侠（学生反馈中心）</li>
        </ul>
        <ul class="slide5-content-InfoLists-mb-hidden">
          <li class="slide5-content-InfoLists-section slide5-content-InfoLists-mb-hidden">
            文档中心
          </li>
          <li>书卷侠使用指南</li>
          <li>个性化指南</li>
        </ul>
        <ul>
          <li class="slide5-content-InfoLists-section">关注我们</li>
          <li style="margin-bottom: 0">
            <img :src="homeSlide5WechatImg" alt="" height="170px" width="170px" />
          </li>
          <li style="display: flex; width: 170px; align-items: center; justify-content: center">
            书卷侠官方微信公众号
          </li>
        </ul>
        <ul class="slide5-content-InfoLists-mb-hidden">
          <li class="slide5-content-InfoLists-section">联系方式</li>
          <li style="margin-bottom: 0">媒体问询：</li>
          <li style="color: #00bd79">media@scholarhero.cn</li>
          <li style="margin-bottom: 0">合作交流：</li>
          <li style="color: #00bd79">business@scholarhero.cn</li>
          <li style="margin-bottom: 0">加入我们：</li>
          <li style="color: #00bd79">recruit@scholarhero.cn</li>
        </ul>
        <ul class="slide5-content-InfoLists-mb-hidden">
          <li class="slide5-content-InfoLists-section">指导单位</li>
          <li>中国传媒大学</li>
          <li>数据科学与智能媒体学院</li>
          <li>广告学院</li>
          <li>北京智体纪元技术有限公司</li>
        </ul>
      </div>
      <homeslide5contactus class="slide5-content-contactus" />
      <div class="slide5-content-copyright">
        <p>版权所有 Copyright @2024</p>
        <a class="slide5-content-copyright-dst" href="https://beian.miit.gov.cn/"
          >京ICP备 2024062260 | 京公网安备 11010502050010 号</a
        >
        <a class="slide5-content-copyright-mb" href="https://beian.miit.gov.cn/"
          >京ICP备 2024062260</a
        >
        <a class="slide5-content-copyright-mb" href="https://beian.miit.gov.cn/"
          >京公网安备 11010502050010 号</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import homeSlide5WechatImg from '@/assets/img/loading-src/home-slide5-wechat-img.jpg'
import homeslide5contactus from '../icons/home-slide5-contact-us.vue'

export default {
  name: 'homeSlide5',
  components: {
    homeslide5contactus
  },
  data() {
    return {
      homeSlide5WechatImg: homeSlide5WechatImg
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

a {
  text-decoration: underline !important;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  list-style-type: none;
}
/* 基础幻灯片位置设置 */
.slide5 {
  position: relative;
  height: 524px;
  width: 100%;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}

.slide5-content {
  width: 1420px;
  height: 484px;
  /* background: #cccccc; */
}

.slide5-content-contactus {
  display: none;
}

.slide5-content-InfoLists {
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
  /* align-items: start; */
}

.slide5-content-InfoLists ul {
  display: flex;
  flex-direction: column;
}

.slide5-content-InfoLists li {
  font-family: MiSans;
  font-size: 16px;
  color: #999999;
  margin-bottom: 12px;
}

.slide5-content-InfoLists-section {
  margin-bottom: 63px !important;
  color: #1a1a1a !important;
  font-weight: 600;
  font-size: 16px;
}

.slide5-content-copyright {
  font-family: MiSans;
  font-weight: 380;
  color: #999999;
  font-size: 16px;
}

.slide5-content-copyright p {
  margin-bottom: 20px;
}

.slide5-content-copyright-dst {
  display: block;
}

.slide5-content-copyright-mb {
  display: none;
}

@media screen and (max-width: 1135px) {
  .slide5 {
    background: linear-gradient(180deg, #e9e9e9 0%, #ffffff 23.41%);
  }
  .slide5-content {
    width: 100%;
  }
  .slide5-content-InfoLists {
    justify-content: center;
  }
  .slide5-content-InfoLists-mb-hidden {
    display: none !important;
  }
  .slide5-content-InfoLists {
    margin-top: 32px;
  }
  .slide5-content-InfoLists-section {
    margin-bottom: 16px !important;
    color: #1a1a1a !important;
    font-weight: 630;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide5-content-InfoLists-section {
    font-size: 18px !important;
  }
  .slide5-content-copyright {
    padding-top: 14px;
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  li {
    margin-top: 8px;
    font-size: 14px !important;
  }

  .slide5-content-contactus {
    display: block;
    /* background: #1a1a1a; */
    margin: auto;
    margin-top: 12px;
    margin-bottom: 24px;
  }

  .slide5-content-copyright p {
    margin-bottom: 23px;
  }

  .slide5-content-copyright-dst {
    display: none;
  }

  .slide5-content-copyright-mb {
    display: block;
  }
}
</style>
