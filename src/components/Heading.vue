<template>
  <div class="banner">
    <div class="banner-content">
      <ul>
        <li>
          <img :src="logoImg" alt="logo" class="logo" />
        </li>
        <li>
          <div class="link">首页</div>
        </li>
        <li>
          <div class="link">书卷侠</div>
        </li>
        <li>
          <div class="link">AI实验室</div>
        </li>
        <li>
          <div class="link">文档中心</div>
        </li>
        <li>
          <div class="link">学术动态</div>
        </li>
        <li>
          <div class="link">关于我们</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import logoImg from '../assets/logo.png'

export default {
  name: 'HeadingView',
  data() {
    return {
      logoImg: logoImg
    }
  }
}
</script>

<style scoped>
.banner {
  z-index: 999;
  width: 100vw;
  height: 80px;
  flex-shrink: 0;

  border-bottom: 1px solid #fff;

  background: rgba(255, 255, 255, 0.8);

  backdrop-filter: blur(10px);

  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
}

.banner-content {
  width: 1420px;
  height: 100%;
  position: relative;
}

.banner ul {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: row;
  list-style-type: none;
}

.banner li {
  padding-right: 20px;
}

.logo {
  width: 120px;
  height: 40px;
  padding-left: 0px;
  padding-top: 18px;
  padding-bottom: 22px;
}

.link {
  padding-top: 29px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;

  color: #000;

  font-family: MiSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 380;
  line-height: 115%; /* 20.7px */
  letter-spacing: -0.54px;
}
@media (max-width: 900px) {
  .logo {
    padding-left: 22px;
  }

  .link {
    display: none;
  }
}
</style>
