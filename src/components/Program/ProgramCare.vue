<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="mb-16 text-center">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 shadow-md mb-4">
          <i class="fas fa-hands-helping text-xl text-white"></i>
        </div>
        <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-gray-900 mb-2">Care Programs</h2>
        <div class="w-20 h-1 bg-pink-600 mx-auto mb-4 rounded"></div>
        <p class="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Strengthening Cambodian communities with essential resources and compassionate support
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(program, index) in visibleCare" :key="index"
          class="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div class="h-48 overflow-hidden relative">
            <img :src="program.image" :alt="program.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="handleImageError" />
            <div class="absolute top-3 left-3">
              <div class="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center">
                <i :class="program.icon" class="text-sm text-white"></i>
              </div>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-base font-poppins font-medium text-gray-900 mb-2">{{ program.title }}</h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">{{ program.description }}</p>
            <button
              @click="$emit('show-detail', program, 'community')"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-200 text-sm"
              :aria-label="`Learn more about ${program.title}`">
              Learn More <i class="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- See More / See Less Buttons -->
      <div class="text-center mt-10">
        <button
          v-if="communityPrograms.length > 4 && !showAll"
          @click="showAll = true"
          class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          See More
        </button>
        <button
          v-if="showAll"
          @click="showAll = false"
          class="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          See Less
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, toRef } from 'vue'

const props = defineProps({
  communityPrograms: {
    type: Array,
    required: true,
    validator: (programs) => programs.every(program =>
      typeof program.title === 'string' &&
      typeof program.image === 'string' &&
      typeof program.icon === 'string' &&
      typeof program.description === 'string'
    )
  }
})

defineEmits(['show-detail'])

// Fallback for broken images
const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found'
}
// Show more / less toggle
const showAll = ref(false)

// Convert prop to reactive ref so we can use it in computed
const programList = toRef(props, 'communityPrograms')

// Only show 4 or all based on toggle
const visibleCare = computed(() =>
  showAll.value ? programList.value : programList.value.slice(0, 4)
)
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>