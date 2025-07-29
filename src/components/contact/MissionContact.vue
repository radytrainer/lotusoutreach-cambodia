<template>
    <!-- Call to Action -->
    <section class="relative h-[60vh] bg-cover bg-center flex items-center overflow-hidden">
      <!-- Background image with overlay -->
      <img src="/public/image/contact/contactMission.png" alt="Cambodian girls in a classroom"
        class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-400/40"></div>
      <div class="absolute inset-0 bg-black/70 mix-blend-multiply"></div>

      <!-- Content -->
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join Our <span class="text-pink-400">Mission</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Your support can transform lives in Cambodia. Reach out to join our mission of empowering Cambodian girls
            and transforming rural communities.
          </p>
          <router-link to="/donate"
            class="inline-block px-8 py-4 bg-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Support our mission in Cambodia">
            Support Us
          </router-link>
        </div>
      </div>
    </section>
</template>