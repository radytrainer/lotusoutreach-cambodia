<template>
  <section class="py-8 md:py-16 bg-white font-poppins">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Back Button -->
      <router-link :to="{ name: 'News', hash: '#success-stories' }"
        class="inline-flex items-center text-blue-600 hover:underline font-medium text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
        Back to News & Stories
      </router-link>
      <!-- Hero Section -->
      <div class="relative mb-8 md:mb-12 h-72 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
        <img :src="currentStory.avatar" :alt="currentStory.name + ' graduating'"
          class="w-full h-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
          <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-2">
            {{ currentStory.name }}
          </h1>
          <p class="text-lg md:text-xl text-blue-200">
            {{ currentStory.program }}
          </p>
        </div>
      </div>
      <!-- Full Story Section -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Her Journey</h2>
        <div class="space-y-8">
          <div v-for="(item, index) in currentStory.fullStory" :key="index" class="bg-white p-6 rounded-lg shadow-sm">
            <h3 v-if="item.title" class="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 text-base md:text-lg leading-relaxed">{{ item.content }}</p>
          </div>
        </div>
      </div>
      <!-- Image Gallery Section -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Moments from Her Life</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(image, index) in currentStory.images" :key="index" class="rounded-lg overflow-hidden shadow-md">
            <img :src="image" :alt="`Image of ${currentStory.name} ${index + 1}`"
              class="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, ref } from 'vue';
import axios from 'axios';

const storyDetails = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('/backend/newsStory.json');
    storyDetails.value = response.data.storyDetails || [];
    console.log("Data loaded from newsStory.json", storyDetails.value);
  } catch (error) {
    console.error("Failed to load data from newsStory.json", error);
  }
};

fetchData();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const currentStory = computed(() => {
  return storyDetails.value[props.id] || {}; 
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>