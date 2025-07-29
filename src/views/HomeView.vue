<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <SlideshowBase
      :slides="images"
      :content="sharedContent"
      class="w-full max-w-full mx-auto px-2 sm:px-4"
    />
    <Program
      :programs="programs"
      :subSectionIcons="subSectionIcons"
      class="w-full max-w-full mx-auto px-2 sm:px-4 py-4 sm:py-8"
    />
    <QuoteSection class="w-full max-w-full mx-auto px-2 sm:px-4 py-6 sm:py-8 mb-24"/>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue"; 
import axios from "axios"; 
import SlideshowBase from "@/components/SlideshowBase.vue";
import Program from "@/components/home/program.vue";
import QuoteSection from "@/components/home/QuoteSection.vue";


const images = ref([]);
const sharedContent = ref({});
const programs = ref([]); 
const subSectionIcons = ref([]);


const fetchHomeData = async () => {
  try {
    const response = await axios.get("/backend/home.json");
    const data = response.data;

    images.value = data.images;
    sharedContent.value = data.sharedContent;
    programs.value = data.programs;
    subSectionIcons.value = data.subSectionIcons;
   
  }catch (error){
    console.error("Failed to fetching home data:", error);
  };
  
}

onMounted(fetchHomeData);
</script>