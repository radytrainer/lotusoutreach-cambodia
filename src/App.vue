<template>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isTelegram = ref(false);
const themeParams = ref({});

onMounted(() => {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    isTelegram.value = true;
    themeParams.value = tg.themeParams || {};
    console.log('Telegram User:', tg.initDataUnsafe.user);
    document.body.style.backgroundColor = themeParams.value.bg_color || '#ffffff';
    // Ensure no automatic navigation
    tg.MainButton.hide(); // Hide the main button if not needed
  }
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  transition: background-color 0.3s;
}
</style>