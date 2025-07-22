<template>
  <SlideshowBase :slides="slides" align="center"/>
</template>

<script setup>
import SlideshowBase from "@/components/SlideshowBase.vue";

const slides = [
  {
    src: "https://lotusoutreachaustralia.org.au/wp-content/uploads/2015/07/Row-of-girls-watching-grad-ceremony-768x417.png",
    alt: "Cambodia program 1",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Education</span> Power',
    description: "Empowering girls through education and care programs",
  },
  {
    src: "https://lotusoutreachaustralia.org.au/wp-content/uploads/2025/02/three-girls-banner-.jpg",
    alt: "Cambodia program 2",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Learning</span> Pathways',
    description: "Building pathways to education for young women",
  },
  {
    src: "https://lotusoutreach.org/wp-content/uploads/2023/02/2LO-3-1.jpg",
    alt: "Cambodia program 3",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Leadership</span> Growth',
    description: "Leadership training and mentorship for young women",
  },
  {
    src: "https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9377-1024x768.jpg",
    alt: "Cambodia program 4",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Future</span> Leaders',
    description: "Inspiring the next generation of female leaders",
  },
];
</script>
