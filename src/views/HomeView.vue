<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <SlideshowBase
      :slides="images"
      :content="sharedContent"
      class="w-full max-w-full mx-auto px-2 sm:px-4"
    />
    <News
      :news="news"
      :subSectionIcons="subSectionIcons"
      :shareMoment="shareMoment"
      class="w-full max-w-full mx-auto px-2 sm:px-4 py-4 sm:py-8"
    />
    <QuoteSection class="w-full max-w-full mx-auto px-2 sm:px-4 py-6 sm:py-8 mb-24"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"; 
import axios from "axios"; 
import SlideshowBase from "@/components/SlideshowBase.vue";
import News from "@/components/home/news.vue";
import QuoteSection from "@/components/home/QuoteSection.vue";


const images = ref([]);
const sharedContent = ref({});
const news = ref([]); 
const shareMoment = ref([])
const subSectionIcons = ref([]);


const fetchHomeData = async () => {
  try {
    const response = await axios.get("/backend/home.json");
    const data = response.data;
    images.value = data.images;
    sharedContent.value = data.sharedContent;
    news.value = data.news;
    subSectionIcons.value = data.subSectionIcons;
    shareMoment.value = data.shareMoment;
    
  }catch (error){
    console.error("Failed to fetching home data:", error);
  };
  
}

onMounted(fetchHomeData);
</script>