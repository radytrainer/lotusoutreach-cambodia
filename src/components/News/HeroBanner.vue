<template>
  <!-- Hero Banner Component -->
    <div class="relative min-h-screen bg-gray-100 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="https://lotusoutreachaustralia.org.au/wp-content/uploads/2020/03/Bondi-BH-Class-Donation-Poster.jpg"
          alt="Lotus Outreach activities"
          class="w-full h-full object-cover blur-sm"
        />
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Content Overlay -->
      <div
        class="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div class="text-center max-w-3xl mx-auto">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
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
          <p class="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover our ongoing activities and initiatives creating lasting
            change through education, sports, and community development across
            Cambodia.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button
              class="px-6 py-3 bg-pink-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Our Programs
            </button>
            <button
              class="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
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