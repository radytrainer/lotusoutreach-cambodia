<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Programs</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Culturally-sensitive programs designed for Cambodian communities
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mt-8 rounded-full"></div>
      </div>

      <!-- Programs Grid -->
      <div class="space-y-20 max-w-7xl mx-auto">
        <div
          v-for="(card, index) in focusCards"
          :key="card.id"
          class="group overflow-hidden border-0 shadow-blue-300 transition-all duration-500 bg-white/80 backdrop-blur-sm rounded-2xl"
        >
          <div
            class="flex flex-col lg:flex-row items-center"
            :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
          >
            <!-- Image Container -->
            <div class="w-full lg:w-1/2 relative overflow-hidden">
              <div class="aspect-[4/3] relative">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <!-- Content Container -->
            <div class="w-full lg:w-1/2 p-8 lg:p-12">
              <div class="max-w-lg">
                <h3 class="text-3xl font-bold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  {{ card.title }}
                </h3>
                <p class="text-gray-700 text-lg mb-8 leading-relaxed">
                  {{ card.summary }}
                </p>

                <router-link :to="`/education/${card.id}`">
                  <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-semibold rounded-full hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/button">
                    <span>Learn More</span>
                    <svg
                      class="w-5 h-5 ml-2 transition-transform duration-300 group-hover/button:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["focusCards"]);
</script>

<style scoped>
/* Additional custom styles if needed */
.group\/button:hover .group-hover\/button\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style>