<template>
  <SlideshowBase :slides="slides" align="center"/>
</template>

<script setup>
import SlideshowBase from "@/components/SlideshowBase.vue";

const slides = [
  {
    src: "/image/Program/Education.png",
    alt: "Cambodia program 1",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Education</span> Power',
    description: "Empowering girls through education and care programs",
  },
  {
    src: "/image/Program/Three-girl.jpg",
    alt: "Cambodia program 2",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Learning</span> Pathways',
    description: "Building pathways to education for young women",
  },
  {
    src: "/image/Program/Leader.jpg",
    alt: "Cambodia program 3",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Leadership</span> Growth',
    description: "Leadership training and mentorship for young women",
  },
  {
    src: "/image/Program/Future.jpg",
    alt: "Cambodia program 4",
    title:
      '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Future</span> Leaders',
    description: "Inspiring the next generation of female leaders",
  },
];
</script>
