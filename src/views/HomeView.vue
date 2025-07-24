<template>
  <div class="min-h-screen">
    <SlideshowBase
      :slides="images"
      :content="sharedContent"
      class="w-full max-w-full mx-auto px-2 sm:px-4"
    />
    <Program
      :focusCards="focusCards"
      class="w-full max-w-full mx-auto px-2 sm:px-4 py-6 sm:py-8"
    />
    <OurAproach
      :approaches="approaches"
      :activeApproach="activeApproach"
      @update:activeApproach="activeApproach = $event"
      class="w-full max-w-full mx-auto px-2 sm:px-4 py-6 sm:py-8"
    />
    <QuoteSection class="w-full max-w-full mx-auto px-2 sm:px-4 py-6 sm:py-8" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SlideshowBase from "@/components/SlideshowBase.vue";
import Program from "@/components/home/program.vue";
import OurAproach from "@/components/home/OurAproach.vue";
import QuoteSection from "@/components/home/QuoteSection.vue";

const images = [
  { src: "/public/image/Home/Home_hero01.jpg", alt: "Cambodia Girls" },
  { src: "/public/image/Home/Home_hero02.jpg", alt: "Community Support" },
  { src: "/public/image/Home/Home_hero03.jpg", alt: "Helping Hands" },
];

const sharedContent = {
  title: "Empowering <span class='text-pink-400'>Cambodian</span> Girls",
  description:
    "In rural Cambodia, education transforms lives. When you empower a Cambodian girl, you transform an entire community.",
  buttons: [
    { text: "Support Us", link: "/donate", primary: true },
    { text: "Learn About Our Work", link: "/about", primary: false },
  ],
};

const homeButtons = [
  { text: "Support Cambodia", link: "/donate", style: "bg-pink-600 hover:bg-pink-700 text-white" },
  { text: "Learn About Our Work", link: "/program", style: "bg-white hover:bg-gray-200 text-pink-600" },
];

// Full program list (same as in the list view)
const focusCards = [
  {
    id: 1,
    title: " Educations",
    image: "/public/image/Home/Program_card01.png",
    summary:
      "Supporting Cambodian girls through scholarships, school supplies, and educational programs in rural provinces.",
    content:
      "Our education programs in Cambodia focus on keeping girls in school through comprehensive support including scholarships, uniforms, school supplies, and nutritional assistance...",
  },
  {
    id: 2,
    title: "Cares",
    image: "/public/image/Home/Program_card02.png",
    summary:
      "Providing essential healthcare services and clean water access to remote Cambodian villages.",
    content:
      "In Cambodia's remote areas, we provide mobile health clinics, maternal health services, and health education programs...",
  },
  {
    id: 3,
    title: "Training",
    image: "/public/image/Home/Program_card03.png",
    summary:
      "Protecting vulnerable Cambodian women and children from trafficking and exploitation.",
    content:
      "Cambodia faces unique challenges with human trafficking, particularly affecting young women and children...",
  },
  {
    id: 4,
    title: "Giving Back",
    image: "/public/image/Home/Program_card04.png",
    summary:
      "Building sustainable infrastructure and economic opportunities in Cambodia's rural communities.",
    content:
      "Our community development programs in Cambodia focus on building essential infrastructure like water wells, improving agricultural practices...",
  },
];

// Approach tabs state
const activeApproach = ref("culturally-sensitive");

const approaches = ref([
  {
    key: "culturally-sensitive",
    title: "Culturally Sensitive",
    image: "/public/image/Home/Our_approach.png",
    content: [
      "Our programs in Cambodia are designed with deep respect for Khmer culture, Buddhist traditions, and local customs. We work closely with village elders, monks, and community leaders to ensure our initiatives align with cultural values while promoting positive change.",
      "Understanding the importance of family honor and community harmony in Cambodian society, we approach sensitive topics like girls' education and women's empowerment with cultural sensitivity and patience, building trust over time.",
    ],
  },
  {
    key: "locally-led",
    title: "Locally Led",
    image: "/public/image/Home/Our_approach02.png",
    content: [
      "Our Cambodia operations are led by Cambodian staff who understand the language, culture, and specific challenges facing rural communities. This local leadership ensures our programs are relevant, effective, and sustainable.",
      "We prioritize hiring and training Cambodian team members, creating local employment while building capacity within communities. Our approach empowers Cambodians to lead their own development initiatives.",
    ],
  },
  {
    key: "community-based",
    title: "Community Based",
    image: "/public/image/Home/Our_approach03.png",
    content: [
      "Every program begins with extensive community consultation. We work with village committees, women's groups, and local leaders to identify priorities and design solutions that reflect community needs and values.",
      "Our community-based approach ensures that programs are owned and sustained by the communities themselves, creating lasting change that continues long after our direct involvement ends.",
    ],
  },
  {
    key: "holistic",
    title: "Holistic Approach",
    image: "/public/image/Home/Our_approach04.png",
    content: [
      "We recognize that challenges in rural Cambodia are interconnected. Poverty, lack of education, health issues, and limited economic opportunities all affect each other. Our programs address multiple issues simultaneously for maximum impact.",
      "By combining education support with health services, clean water access, and economic opportunities, we create comprehensive solutions that address root causes of poverty and inequality in Cambodian communities.",
    ],
  },
]);
</script>