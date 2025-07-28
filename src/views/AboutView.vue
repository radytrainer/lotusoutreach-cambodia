<template>
  <div class="min-h-screen bg-white">
    <SlideshowBase :slides="slides" :content="sharedContent" align="center" />
    <HistorySection :years-of-experience="yearsOfExperience" :content="historyContent" />
    <MissionVisionSection :principles="principles" />
    <TeamSection :team-members="teamMembers" />
    <PartnerSection :logos="partnerLogos" :marquee-width="marqueeWidth" :marquee-duration="marqueeDuration" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SlideshowBase from '@/components/SlideshowBase.vue';
import HistorySection from '@/components/about/HistorySection.vue';
import MissionVisionSection from '@/components/about/MissionVisionSection.vue';
import TeamSection from '@/components/about/TeamSection.vue';
import PartnerSection from '@/components/about/PartnerSection.vue';


const historyContent = ref([]);
const principles = ref([]);
const teamMembers = ref([]);
const partnerLogos = ref([]);
const marqueeWidth = ref('0px');
const marqueeDuration = ref(30);
const slides = ref([]);
const sharedContent = ref([]);

const startYear = 2008;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - startYear;

const calculateMarqueeWidth = () => {
  const singleLogoItemWidth = 160 + 24;
  marqueeWidth.value = `${partnerLogos.value.length * singleLogoItemWidth}px`;
};


const fetchAboutData = async () => {
  try {
    const response = await axios.get('/backend/about.json');
    const data = response.data;
    historyContent.value = data.historyContent;
    principles.value = data.principles;
    teamMembers.value = data.teamMembers;
    slides.value = data.slides;
    sharedContent.value = data.sharedContent;
    partnerLogos.value = [
      ...data.originalPartnerLogos,
      ...data.originalPartnerLogos,
      ...data.originalPartnerLogos,
      ...data.originalPartnerLogos,
    ];
    nextTick(() => calculateMarqueeWidth());
  } catch (error) {
    console.error('Failed to fetch about.json:', error);
  }
};

onMounted(() => {
  fetchAboutData();
  AOS.init({ duration: 1000, once: true });
});
</script>