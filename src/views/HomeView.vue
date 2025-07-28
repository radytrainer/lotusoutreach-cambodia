<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <SlideshowBase
      :slides="images"
      :content="sharedContent"
      class="w-full max-w-full mx-auto px-2 sm:px-4"
    />

    <!-- Care Program Section -->
    <Program
      :focusCards="focusCards"
      class="w-full max-w-full mx-auto  px-2 sm:px-4 py-6 sm:py-8"
    />
    
    <!-- Quote section-->
    <QuoteSection class="w-full max-w-full mx-auto px-2 sm:px-4 py-6 sm:py-8 mt-20"/>
  </div>
</template>

<script setup>
// Vue built-in imports
import { onMounted, ref } from "vue"; 
// External imports Axios library JS
import axios from "axios"; 

// Component imports
import SlideshowBase from "@/components/SlideshowBase.vue";
import Program from "@/components/home/program.vue";
import QuoteSection from "@/components/home/QuoteSection.vue";

// Reactive variables states
const images = ref([]);
const sharedContent = ref({});
const focusCards = ref([]);
const approaches = ref([]);

// Fetch data from the backend home.JSON file
const fetchHomeData = async () => {
  try {
    const response = await axios.get("/backend/home.json");
    const data = response.data;

    images.value = data.images;
    sharedContent.value = data.sharedContent;
    focusCards.value = data.focusCards;
    approaches.value = data.approaches;
   
  }catch (error){
    console.error("Failed to fetching home data:", error);
  };
  
}

// Load data when the component is mounted
onMounted(fetchHomeData);
</script>