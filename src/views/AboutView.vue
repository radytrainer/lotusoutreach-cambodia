<template>
  <div class="min-h-screen bg-white">
    <section class="relative w-full h-[42rem] bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-700">
      <!-- slideshow images -->
      <div class="absolute inset-0 z-0">
        <div v-for="(image, index) in images" :key="index" :class="[
          'absolute inset-0 transition-opacity duration-700 ease-in-out',
          current === index ? 'opacity-100' : 'opacity-0',
        ]">
          <img :src="image" :alt="`Slide ${index + 1}`" class="w-full h-full object-cover object-center" />

          <div class="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      <!-- centered hero card -->
      <div class="absolute inset-0 flex items-center justify-center px-4 z-20">
        <div class="p-10 max-w-2xl text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            See Our About
          </h1>
          <p class="text-xl text-gray-100 mb-8 leading-relaxed">
            Learn about our solutions in education, training, and care that
            empower vulnerable communities worldwide.
          </p>
          <a href="#programs"
            class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg rounded-lg inline-block transition-colors duration-200">
            LEARN MORE
          </a>
        </div>
      </div>

      <!-- dots pagination -->
      <div class="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button v-for="(image, index) in images" :key="index" @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`" :class="[
            'rounded-full transition-all',
            current === index ? 'bg-white' : 'bg-gray-400',
          ]" class="w-2 h-2"></button>
      </div>
    </section> 
  </div>
</template>

<script setup>
</script>
