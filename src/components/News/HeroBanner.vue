<template>
  <!-- Hero Banner Component -->
  <div class="relative min-h-screen bg-gray-100 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="/public/image/News/Banner.png"
        alt="Lotus Outreach activities"
        class="w-full h-full object-cover object-center md:object-fill lg:object-cover blur-sm"
      />
      <div class="absolute inset-0 bg-black/10"></div>
    </div>

    <!-- Content Overlay -->
    <div
      class="relative z-10 flex items-center justify-center min-h-screen px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <div class="text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight"
        >
          <span
            class="inline-block transform transition-all duration-500 hover:scale-105"
          >
            Empowering Communities
          </span>
          <br />
          <span
            class="inline-block transition-all duration-300 text-pink-400"
          >
            In Cambodia Through Sustainable Action
          </span>
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-8 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
          Discover our ongoing activities and initiatives creating lasting
          change through education, sports, and community development across
          Cambodia.
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          <button
            class="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-pink-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Our Programs
          </button>
          <button
            class="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto mt-2 sm:mt-0"
          >
            Get Involved
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>