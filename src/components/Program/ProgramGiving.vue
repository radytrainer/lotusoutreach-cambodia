<template>
  <section class="py-16 bg-white" data-aos="fade-up">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Back Button to Program -->
      <div v-if="!selectedProgram" class="mb-6">
        <router-link
          to="/program"
          class="flex items-center text-pink-600 hover:text-pink-700 transition font-poppins font-medium text-sm"
        >
          <i class="fas fa-arrow-left mr-2"></i> Back to All Programs
        </router-link>
      </div>

      <!-- Section Header -->
      <div v-if="!selectedProgram" class="mb-16 text-center">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 shadow-md mb-4">
          <i class="fas fa-people-carry text-xl text-white"></i>
        </div>
        <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-gray-900 mb-2">
          Giving Back Programs
        </h2>
        <div class="w-20 h-1 bg-pink-600 mx-auto mb-4 rounded"></div>
        <p class="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Empowering Cambodian women through impactful giving back initiatives and professional development programs
        </p>
      </div>

      <!-- Program Cards -->
      <div v-if="!selectedProgram" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(giving, index) in visibleGiving"
          :key="index"
          class="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="giving.image"
              :alt="giving.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="handleImageError"
            />
            <div class="absolute top-3 left-3">
              <div class="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center">
                <i :class="giving.icon" class="text-sm text-white"></i>
              </div>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-base font-poppins font-medium text-gray-900 mb-2">
              {{ giving.title }}
            </h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              {{ giving.description }}
            </p>
            <button
              @click="selectedProgram = giving"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-200 text-sm"
              :aria-label="`Learn more about ${giving.title}`"
            >
              Learn More <i class="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- See More / See Less Buttons -->
      <div v-if="!selectedProgram" class="text-center mt-10">
        <button
          v-if="givingPrograms.length > 4 && !showAll"
          @click="showAll = true"
          class="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
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

      <!-- Program Detail View -->
      <ProgramDetail
        v-if="selectedProgram"
        :educationPrograms="givingPrograms"
        :selectedProgram="selectedProgram"
        @go-back="selectedProgram = null"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import ProgramDetail from './ProgramDetail.vue'

const givingPrograms = ref([])
const showAll = ref(false)
const selectedProgram = ref(null)

const fetchProgramEduData = async () => {
  try {
    const response = await axios.get('/backend/program.json')
    givingPrograms.value = response.data.givingPrograms || []
  } catch (error) {
    console.error("Failed to fetch giving programs:", error)
    givingPrograms.value = []
  }
}

onMounted(fetchProgramEduData)

const handleImageError = (event) => {
  event.target.src = 'https://lotusoutreach.org/wp-content/uploads/2023/02/placeholder.jpg'
}

const visibleGiving = computed(() =>
  showAll.value ? givingPrograms.value : givingPrograms.value.slice(0, 4)
)
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>