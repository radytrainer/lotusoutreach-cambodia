<template>
  <!-- Quote -->
  <section class="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/public/image/Home/Quote.png"
        alt="Cambodia background"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Centered Content -->
    <div class="relative z-10 w-full max-w-4xl mx-auto text-center">
      <div class="mb-6 sm:mb-8">
        <svg
          class="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-4 sm:mb-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <blockquote
        class="text-lg sm:text-xl lg:text-3xl font-medium text-white leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0"
      >
        "Education for Cambodian girls is the foundation for the country's
        sustainable development and economic growth."
      </blockquote>
      <router-link to="/donate">
        <button 
          class="sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
        >
          Support Us Today
        </button>
      </router-link>
    </div>
  </section>
</template>
