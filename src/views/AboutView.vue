<template>
  <div>
    <SlideshowBase :images="aboutImages" title="See Our About"
      description="Learn about our solutions in education, training, and care that empower vulnerable communities worldwide."
      :buttons="aboutButtons" />
  </div>
</template>

<script setup>
import SlideshowBase from '@/components/SlideshowBase.vue';

const aboutImages = [
  "https://lotusoutreach.org/wp-content/uploads/2019/08/header.jpg",
  "https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9585-2.jpg",
  "https://helpcode.ch/wp-content/uploads/2017/07/CCS-4-750x498.jpg",
];

const aboutButtons = [
  { text: 'LEARN MORE', link: '/about', style: 'bg-pink-600 hover:bg-pink-700 text-white' },
];
</script>