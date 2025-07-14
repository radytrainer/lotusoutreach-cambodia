<template>
  <div>
    <!-- Slideshow -->
    <Slideshow />
    
    <!-- Content Section -->
    <section class="mt-8 p-6 max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6">Welcome to Lotus Outreach Cambodia</h2>
      <p class="text-lg text-center mb-4">
        We are dedicated to empowering underprivileged girls in Cambodia by providing education opportunities from primary school to university.
      </p>

      <div class="text-center mt-6">
        <router-link 
          to="/about" 
          class="bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition"
        >
          Learn More About Us
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import Slideshow from '@/components/Slideshow.vue';
</script>

<style scoped>
/* Add any custom styles for the home page */
</style>

