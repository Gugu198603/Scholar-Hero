<script setup>
</script>

<template>
  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif; /* 设置默认字体 */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  list-style-type: none;
}

:root {
  /* --primary-color: #2c3e50; */
  --primary-color: #4b84f4;
  /* --default-background: #bdc3c7; */
  --default-background: #ffffff;
  --selected-color: #4b84f4;
  --icon-size: 20px;
  --text-color: #000000;
  --default-disactive:#333;
}

/* 隐藏滚动条轨道 */
::-webkit-scrollbar {
    display: none;
}

/* 隐藏滚动条 */
::-webkit-scrollbar-thumb {
    display: none;
}


body {
  background-color: var(--default-background);
}

/* 隐藏滚动条轨道 */
::-webkit-scrollbar {
  display: none;
}

/* 自定义滚动条宽度为2px并设置颜色 */
::-webkit-scrollbar-thumb {
  width: 2px;
  background-color: #ccc; /* 设置滚动条颜色 */
}


a {
  text-decoration: none; /* 清除下划线 */
  color: inherit; /* 继承父元素的颜色 */
}
</style>