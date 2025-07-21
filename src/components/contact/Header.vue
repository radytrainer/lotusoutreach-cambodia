<template>
  <div class="relative h-screen bg-cover bg-center text-white" :style="{ backgroundImage: `url(${contactImages[0]})` }">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact with Us</h1>
      <p class="text-lg md:text-xl mb-6 max-w-2xl">
        Reach out to join our mission of empowering Cambodian girls and transforming rural communities.
      </p>
      <router-link
        to="/contact"
        class="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-lg transition-colors duration-200"
      >
        Donation
      </router-link>
    </div>
  </div>
</template>

<script setup>
const contactImages = [
  "http://localhost:5173/src/img/cam3.png"
];
</script>
