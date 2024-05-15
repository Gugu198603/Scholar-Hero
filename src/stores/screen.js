// screenStore.js
import { defineStore } from 'pinia';
import { ref,onMounted,onBeforeUnmount,onUnmounted } from 'vue'

export const useScreenStore = defineStore('screen', () => {
  const isSmallScreen = ref(false);

  const checkScreenSize = () => {
    isSmallScreen.value = window.innerWidth <= 1135;
    //console.log(isSmallScreen.value);
  };

  window.addEventListener('resize', checkScreenSize);


  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  

  // 初始化检查
  checkScreenSize();

  return {
    isSmallScreen
  };
});