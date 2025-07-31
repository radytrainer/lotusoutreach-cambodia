<template>
  <!-- Hero Banner -->
  <section class="relative h-[70vh] md:h-[100vh] bg-gray-100 overflow-hidden">
    <!-- Background Image with Gradient -->
    <div class="absolute inset-0">
      <img
        src="/public/image/News/new.jpg"
        alt="Lotus Outreach activities"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
    </div>

    <!-- Text Content -->
    <div class="relative z-10 flex items-center justify-center h-full px-4 md:px-6 lg:px-8 text-center">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          <span class="inline-block transition-transform duration-500 hover:scale-105">
            Empowering Communities
          </span>
          <br />
          <span class="text-pink-400">
            In Cambodia Through Sustainable Action
          </span>
        </h1>
        <p class="text-white text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover our ongoing activities and initiatives creating lasting change through education, training, care, and giving back to the community.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-3">
          <router-link to="/program">
            <button
              class="px-6 py-3 bg-pink-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Our Programs
            </button>
          </router-link>
          <router-link to="/donate">
            <button
              class="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Get Involved
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JS needed for static hero section
</script>

<style scoped>
/* You can add scoped CSS here if needed later */
</style>
