<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <SlideshowBase :slides="slides" align="center" />
    <Program
      :programs="programs"
      :subSectionIcons="subSectionIcons"
      class="w-full max-w-full mx-auto px-2 sm:px-4 py-4 sm:py-8"
    />
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue"; 
import axios from "axios"; 
import SlideshowBase from "@/components/SlideshowBase.vue";
import Program from "@/components/Program/program.vue";


const programs = ref([]); 
const subSectionIcons = ref([]);
const slides = ref([]);


const fetchHomeData = async () => {
  try {
    const response = await axios.get("/backend/program.json");
    const data = response.data;
    slides.value = data.slides;
    programs.value = data.programs;
    subSectionIcons.value = data.subSectionIcons;
   
  }catch (error){
    console.error("Failed to fetching home data:", error);
  };
  
}

onMounted(fetchHomeData);
</script>