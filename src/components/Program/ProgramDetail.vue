<template>
  <div class="min-h-screen">
    <!-- Back Button -->
    <button
      @click="$emit('go-back')"
      class="flex items-center text-blue-500 hover:text-blue-300 transition-colors duration-200 mb-2"
    >
      <i class="fas fa-arrow-left mr-2"></i>
      Back to Programs
    </button>

    <!-- Header Section -->
    <div
      class="relative bg-cover bg-center bg-no-repeat text-white py-20 md:h-screen h-[60vh]"
      :style="{ backgroundImage: `url(${selectedProgram.image || 'https://via.placeholder.com/1200x600'})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full bg-blue-200/20 flex items-center justify-center mr-6">
            <i :class="selectedProgram.icon || 'fas fa-question'" class="text-2xl text-white"></i>
          </div>
          <div>
            <h1 class="text-2xl md:text-5xl font-poppins font-semibold mb-2">
              {{ selectedProgram.title || 'No Program Selected' }}
            </h1>
            <p class="text-base md:text-lg text-white/90">
              {{ selectedProgram.description || 'No description available' }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column -->
          <div class="lg:col-span-2 space-y-8">
            <!-- About -->
            <section>
              <h2 class="text-2xl font-poppins font-semibold text-gray-900 mb-4">About This Program</h2>
              <p class="text-gray-700 text-base leading-relaxed">
                {{ selectedProgram.fullDescription || 'No detailed description available' }}
              </p>
            </section>

            <!-- Key Features -->
            <section>
              <h3 class="text-xl font-poppins font-semibold text-gray-900 mb-4">Key Features</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="(feature, index) in selectedProgram.features || []"
                  :key="index"
                  class="flex items-start p-3 bg-gray-50 rounded-md"
                >
                  <i class="fas fa-check-circle text-blue-600 mr-2 mt-1"></i>
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </div>
                <div
                  v-if="!(selectedProgram.features && selectedProgram.features.length)"
                  class="text-gray-500 text-sm"
                >
                  No features available.
                </div>
              </div>
            </section>

            <!-- Additional Images -->
            <section v-if="selectedProgram.image1 || selectedProgram.image2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <img
                  v-if="selectedProgram.image1"
                  :src="selectedProgram.image1"
                  :alt="`${selectedProgram.title} Image 1`"
                  class="w-full h-64 object-cover rounded-xl shadow-lg"
                  @error="handleImageError"
                />
                <img
                  v-if="selectedProgram.image2"
                  :src="selectedProgram.image2"
                  :alt="`${selectedProgram.title} Image 2`"
                  class="w-full h-64 object-cover rounded-xl shadow-lg"
                  @error="handleImageError"
                />
              </div>
            </section>

            <!-- Gallery -->
            <section v-if="selectedProgram.gallery">
              <h3 class="text-xl font-poppins font-semibold text-gray-900 mb-4">Gallery</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  v-for="(img, index) in selectedProgram.gallery || []"
                  :key="index"
                  class="rounded Neurolinguistic Programming overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    :src="img"
                    :alt="`${selectedProgram.title} ${index + 1}`"
                    class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    @error="handleImageError"
                  />
                </div>
                <div
                  v-if="!(selectedProgram.gallery && selectedProgram.gallery.length)"
                  class="text-gray-500 text-sm"
                >
                  No gallery images available.
                </div>
              </div>
            </section>
          </div>

          <!-- Right Column -->
          <div class="space-y-8">
            <!-- Support Section -->
            <section class="bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg p-6 text-white">
              <h3 class="text-xl font-poppins font-semibold mb-3">Support This Program</h3>
              <p class="text-sm mb-4 opacity-90">Your contribution can make a direct impact on this program.</p>
              <div class="space-y-3">
                <RouterLink to="/donate">
                  <button
                    class="w-full bg-white text-blue-600 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200​ mb-4"
                  >
                    Donate Now
                  </button>
                </RouterLink>
                <RouterLink to="/contact">
                  <button
                    class="w-full border-2 border-white text-white py-2 rounded-md font-medium hover:bg-white hover:text-pink-600 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </RouterLink>
              </div>
            </section>

            <!-- Contact -->
            <section class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-poppins font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div class="space-y-3 text-gray-600 text-sm">
                <div class="flex items-center">
                  <i class="fas fa-envelope mr-2 text-blue-600"></i>
                  <span>Lotus.Outreach.Cambodia@gmail.com</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-phone mr-2 text-pink-600"></i>
                  <span>+855 12 911 075</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                  <span>26a Street 492, Phnom Penh, Cambodia</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted } from 'vue'

defineProps({
  educationPrograms: {
    type: Array,
    required: true,
  },
  selectedProgram: {
    type: Object,
    required: true,
  },
})

defineEmits(['go-back'])

const handleImageError = (event) => {
  event.target.src = 'https://lotusoutreach.org/wp-content/uploads/2023/02/placeholder.jpg'
}


onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 768px) {
  .h-\[60vh\] {
    min-height: 60vh;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .text-base {
    font-size: 0.875rem;
  }
}

button:hover {
  transform: translateY(-1px);
}
</style>