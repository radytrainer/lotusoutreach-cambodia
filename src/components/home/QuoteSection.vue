<template>
    <!-- Quote -->
     <section class="relative py-20 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.globalgiving.org/pfil/10626/pict_original.jpg?w=460&h=306&auto=compress,enhance&fit=crop&crop=faces,center&format=auto&dpr=2"
          alt="Cambodia background"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="mb-8">
            <svg
              class="h-16 w-16 mx-auto mb-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <blockquote
            class="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8"
          >
            "Education for Cambodia's girls is the foundation for the country's
            sustainable development and economic growth."
          </blockquote>
          <button
            class="px-10 py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Support Us Today
          </button>
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>