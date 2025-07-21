<template>
  <SlideshowBase :slides="images" :content="sharedContent" />
</template>

<script setup>
import SlideshowBase from '@/components/SlideshowBase.vue'

const homeImages = [
  '/public/image/Home/Home_hero01.jpg',
  '/public/image/Home/Home_hero02.jpg',
  '/public/image/Home/Home_hero03.jpg',
];

const homeButtons = [
  { text: 'Support Cambodia', link: '/donate', style: 'bg-pink-600 hover:bg-pink-700 text-white' },
  { text: 'Learn About Our Work', link: '/program', style: 'bg-white hover:bg-gray-200 text-pink-600' },
];


// / Full program list (same as in the list view)
const focusCards = [
  {
    id: 1,
    title: "Education in Cambodia",
    image: "/public/image/Home/Program_card01.png",
    summary: "Supporting Cambodian girls through scholarships, school supplies, and educational programs in rural provinces.",
    content: "Our education programs in Cambodia focus on keeping girls in school through comprehensive support including scholarships, uniforms, school supplies, and nutritional assistance..."
  },
  {
    id: 2,
    title: "Healthcare Access",
    image: "/public/image/Home/Program_card02.png",
    summary: "Providing essential healthcare services and clean water access to remote Cambodian villages.",
    content: "In Cambodia's remote areas, we provide mobile health clinics, maternal health services, and health education programs..."
  },
  {
    id: 3,
    title: "Anti-Trafficking Protection",
    image: "/public/image/Home/Program_card03.png",
    summary: "Protecting vulnerable Cambodian women and children from trafficking and exploitation.",
    content: "Cambodia faces unique challenges with human trafficking, particularly affecting young women and children..."
  },
  {
    id: 4,
    title: "Rural Development",
    image: "/public/image/Home/Program_card04.png",
    summary: "Building sustainable infrastructure and economic opportunities in Cambodia's rural communities.",
    content: "Our community development programs in Cambodia focus on building essential infrastructure like water wells, improving agricultural practices..."
  }
]
</script>
