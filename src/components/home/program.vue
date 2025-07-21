<template>
   <!-- Our program -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Our Programs 
          </h2>
          <p class="text-xl text-gray-600">
            Culturally-sensitive programs designed for Cambodian communities
          </p>
        </div>

        <!-- Constrain width to match navbar content -->
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="card in focusCards"
              :key="card.id"
              class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <router-link :to="`/education/${card.id}`" class="block">
                <div class="aspect-[4/3] overflow-hidden">
                  <img
                    :src="card.image"
                    :alt="card.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-6">
                  <h3
                    class="text-xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors"
                  >
                    {{ card.title }}
                  </h3>
                  <p class="text-gray-600 mb-4 line-clamp-3">
                    {{ card.summary }}
                  </p>
                  <div
                    class="flex items-center text-pink-600 font-semibold group-hover:text-pink-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <svg
                      class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
defineProps(["focusCards"])
</script>

<style scoped>

</style>