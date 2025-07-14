<template>
  <div class="relative w-full h-96 overflow-hidden rounded-lg">
    <!-- Slide Images -->
    <div 
      class="absolute inset-0 flex transition-transform duration-500" 
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <img 
        v-for="(slide, index) in slides" 
        :key="index" 
        :src="slide.src" 
        alt="Slideshow Image" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Next & Previous Buttons -->
    <button 
      @click="prevSlide" 
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      &#8592;
    </button>
    
    <button 
      @click="nextSlide" 
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      &#8594;
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slides = [
  { src: '/assets/home/slide-1.jpg' },
  { src: '/assets/home/slide-2.jpg' },
  { src: '/assets/home/slide-3.jpg' },
];

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
</script>

<style scoped>
/* Optional: Add some transition or style for better sliding effect */
</style>
