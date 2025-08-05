<template>
  <!-- Hero Banner -->
  <section class="relative h-[70vh] md:h-[100vh] bg-gray-100 overflow-hidden">
    <!-- Background Image with Gradient -->
    <div class="absolute inset-0">
      <img src="/public/image/Galleries/heading.jpg" alt="Lotus Outreach activities"
        class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/40"></div>
    </div>

    <!-- Text Content -->
    <div class="relative z-10 flex items-center justify-center h-full px-4 md:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-4 text-white">
          Our Gallery of <span class="text-pink-500">Activities</span>
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-3xl mx-auto mt-4 font-medium">
          In rural Cambodia, education changes lives. Each photo captures the spirit of Lotus Outreach Cambodia’s
          mission empowering girls and strengthening communities through knowledge, opportunity, and hope.
        </p>

      </div>

    </div>
  </section>
  <div class="min-h-screen bg-white font-sans text-gray-800">
    <!-- Main Gallery Content -->
    <main class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        <div v-for="(image, index) in images" :key="index" :class="image.gridClass"
          class="relative overflow-hidden rounded-lg shadow-sm group hover:shadow-md transition duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          @click="openModal(image, index)">
          <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height"
            class="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
            loading="lazy" />
          <div
            class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
            <p class="text-white text-sm font-medium truncate">{{ image.alt }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Lightbox Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6 animate-fade-in"
      @click.self="closeModal" @keydown.escape="closeModal" tabindex="-1">
      <div class="relative max-w-full max-h-full flex items-center justify-center">
        <!-- Close -->
        <button
          class="absolute top-4 right-4 text-white text-4xl font-light z-10 p-2 hover:text-gray-300 transition-colors"
          @click="closeModal" aria-label="Close modal">
          &times;
        </button>
        <!-- Previous -->
        <button v-if="canNavigate"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          @click.stop="prevImage" aria-label="Previous image">
          <ChevronLeftIcon class="w-10 h-10" />
        </button>
        <!-- Image -->
        <img :src="currentImage.src" :alt="currentImage.alt"
          class="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-xl" />
        <!-- Next -->
        <button v-if="canNavigate"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          @click.stop="nextImage" aria-label="Next image">
          <ChevronRightIcon class="w-10 h-10" />
        </button>
        <!-- Caption -->
        <p
          class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg bg-black/60 px-4 py-1 rounded-full max-w-[80%] text-center">
          {{ currentImage.alt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from 'lucide-vue-next'

// Gallery data - manually defining grid classes to mimic the layout
const images = ref([
  // Row 1
  { src: "/image/Home/05.jpg", alt: "Woman lying on grass", width: 300, height: 400, gridClass: "row-span-2" }, // Portrait, spans 2 rows
  { src: "/image/Home/05.jpg", alt: "Legs with socks on path", width: 450, height: 300, gridClass: "" }, // Landscape
  { src: "/image/Home/05.jpg", alt: "Cityscape with fog", width: 450, height: 300, gridClass: "" }, // Landscape
  { src: "/image/Home/05.jpg", alt: "Cityscape with highway and buildings", width: 450, height: 300, gridClass: "" }, // Landscape
  // Row 2 (continues from previous row's grid flow)
  { src: "/image/Home/05.jpg", alt: "Woman on scooter with graffiti", width: 450, height: 300, gridClass: "" }, // Landscape
  { src: "/image/Home/05.jpg", alt: "Woman on couch", width: 450, height: 300, gridClass: "" }, // Landscape
  // Row 3 (starts new visual row)
  { src: "/image/Home/05.jpg", alt: "Black and white man portrait", width: 300, height: 400, gridClass: "row-span-2" }, // Portrait, spans 2 rows
  { src: "/image/Home/05.jpg", alt: "Woman with long hair facing brick wall", width: 300, height: 400, gridClass: "row-span-2" }, // Portrait, spans 2 rows
  { src: "/image/Home/05.jpg", alt: "Black and white woman sitting", width: 300, height: 400, gridClass: "row-span-2" }, // Portrait, spans 2 rows
  // Row 4 (continues from previous row's grid flow)
  { src: "/image/Home/05.jpg", alt: "Blue sky with clouds over house roof", width: 300, height: 400, gridClass: "" }, // Portrait
  { src: "/image/Home/05.jpg", alt: "Blue sky with clouds over buildings", width: 300, height: 400, gridClass: "" }, // Portrait
  { src: "/image/Home/05.jpg", alt: "Blue sky with single cloud over house roof", width: 300, height: 400, gridClass: "" }, // Portrait
  // Row 5 (large image at bottom)
  { src: "/image/Home/05.jpg", alt: "Woman on scooter in front of graffiti wall", width: 600, height: 450, gridClass: "col-span-2 md:col-span-3 lg:col-span-4" }, // Large landscape, spans all columns
])

// Lightbox State
const isModalOpen = ref(false)
const currentImage = ref(null)
const currentImageIndex = ref(0)

const canNavigate = computed(() => {
  return images.value.length > 1
})

const openModal = (image, index) => {
  currentImage.value = image
  currentImageIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
}

const closeModal = () => {
  isModalOpen.value = false
  currentImage.value = null
  document.body.style.overflow = '' // Restore scrolling
}

const navigateImage = (direction) => {
  let newIndex = currentImageIndex.value + direction
  if (newIndex < 0) newIndex = images.value.length - 1
  else if (newIndex >= images.value.length) newIndex = 0
  currentImageIndex.value = newIndex
  currentImage.value = images.value[newIndex]
}

const prevImage = () => navigateImage(-1)
const nextImage = () => navigateImage(1)

// Keyboard navigation for modal
const handleKeydown = (event) => {
  if (isModalOpen.value) {
    if (event.key === 'Escape') closeModal()
    else if (event.key === 'ArrowLeft' && canNavigate.value) prevImage()
    else if (event.key === 'ArrowRight' && canNavigate.value) nextImage()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.97);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

/* Custom grid row height for masonry effect */
/* This is a simplified approach. For true masonry, a library is recommended. */
.grid {
  grid-auto-rows: 150px;
  /* Base row height, adjust as needed for visual alignment */
}

/* Example for row-span-2. Adjust based on desired visual */
.row-span-2 {
  grid-row: span 2 / span 2;
}
</style>
