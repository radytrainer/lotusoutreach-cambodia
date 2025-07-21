<template>
  <SlideshowBase :slides="images" :content="sharedContent" />
</template>

<script setup>
import SlideshowBase from '@/components/SlideshowBase.vue'
  
const images = [
  { src: 'image/About_heading.jpg', alt: 'Cambodia Girls' },
  { src: 'image/About_heading.jpg', alt: 'Community Support' },
  { src: 'image/About_heading.jpg', alt: 'Helping Hands' }
]

const sharedContent = {
  title: "Empowering <span class='text-pink-400'>Cambodia's</span> Girls",
  description: 'In rural Cambodia, education transforms lives. When you empower a Cambodian girl, you transform an entire community.',
  buttons: [
    { text: 'Support Cambodia', link: '/donate', primary: true },
    { text: 'Learn About Our Work', link: '/cambodia', primary: false }
  ]
}
</script>
