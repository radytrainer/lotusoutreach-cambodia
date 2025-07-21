<template>
  <div>
    <SlideshowBase
      :images="homeImages"
      :title="'Empowering <span style=\'color: #ff69b4;\'>Cambodia\'s</span> Girls'"
      description="In rural Cambodia, education transforms lives. When you empower a Cambodian girl, you transform an entire community."
      :buttons="homeButtons"
      align="left"
    />
  </div>
</template>

<script setup>
import SlideshowBase from '@/components/SlideshowBase.vue';

const homeImages = [
  'https://lotusoutreach.org/wp-content/uploads/2019/08/header.jpg',
  'https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9585-2.jpg',
];

const homeButtons = [
  { text: 'Support Cambodia', link: '/donate', style: 'bg-pink-600 hover:bg-pink-700 text-white' },
  { text: 'Learn About Our Work', link: '/program', style: 'bg-white hover:bg-gray-200 text-pink-600' },
];
</script>