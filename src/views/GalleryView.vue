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
  <section>
    <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-16">
          Our Organizational Activities Gallery
        </h1>

        <!-- Gallery Sections -->
        <section v-for="(section, sectionIndex) in sections" :key="sectionIndex"
          class="mb-16 bg-white p-6 md:p-10 rounded-2xl shadow-md">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 border-b pb-3 text-center md:text-left">
            {{ section.title }}
          </h2>
          <div :class="getGridLayout(section.layout)" class="gap-6 sm:gap-8">
            <div v-for="(image, imageIndex) in section.images" :key="imageIndex"
              class="relative overflow-hidden rounded-xl shadow group hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
              @click="openModal(image, sectionIndex, imageIndex)">
              <img :src="image.src" :alt="image.alt" :class="getImageHeight(section.layout)"
                class="w-full object-cover object-center transition duration-300 group-hover:scale-105 rounded-xl"
                loading="lazy" />
              <div
                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p class="text-white font-medium text-lg drop-shadow">{{ image.alt }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Lightbox Modal -->
      <div v-if="isModalOpen"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6 animate-fade-in"
        @click.self="closeModal" @keydown.escape="closeModal" tabindex="-1">
        <div class="relative max-w-full max-h-full flex items-center justify-center">
          <!-- Close -->
          <button class="absolute top-4 right-4 text-white text-4xl font-light z-10 p-2 hover:text-gray-300"
            @click="closeModal">&times;</button>

          <!-- Previous -->
          <button v-if="canNavigate"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 hover:text-gray-300"
            @click.stop="prevImage">
            <ChevronLeftIcon class="w-10 h-10" />
          </button>

          <!-- Image -->
          <img :src="currentImage.src" :alt="currentImage.alt"
            class="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-xl" />

          <!-- Next -->
          <button v-if="canNavigate"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 hover:text-gray-300"
            @click.stop="nextImage">
            <ChevronRightIcon class="w-10 h-10" />
          </button>

          <!-- Caption -->
          <p class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg bg-black/60 px-5 py-2 rounded-full">
            {{ currentImage.alt }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'

// Gallery data
const sections = ref([
  {
    title: "Annual Team Building Retreat 2024",
    layout: "default",
    images: [
      { src: "/image/Home/08.jpg", alt: "Outdoor team challenge" },
      { src: "/image/Home/08.jpg", alt: "Group discussion session" },
      { src: "/image/Home/08.jpg", alt: "Cooking class fun" },
      { src: "/image/Home/08.jpg", alt: "Evening campfire stories" },
      { src: "/image/Home/08.jpg", alt: "Awards ceremony" },
    ],
  },
  {
    title: "Community Outreach Program - Spring 2024",
    layout: "two-wide",
    images: [
      { src: "/image/Home/08.jpg", alt: "Volunteers planting trees" },
      { src: "/image/Home/08.jpg", alt: "Food distribution event" },
      { src: "/image/Home/08.jpg", alt: "Children enjoying activities" },
      { src: "/image/Home/08.jpg", alt: "Outreach team group photo" },
    ],
  },
  {
    title: "Innovation Workshop Series - Q2 2024",
    layout: "three-tall",
    images: [
      { src: "/image/Home/08.jpg", alt: "Brainstorming session" },
      { src: "/image/Home/08.jpg", alt: "Project presentation" },
      { src: "/image/Home/08.jpg", alt: "Coding challenge" },
      { src: "/image/Home/08.jpg", alt: "Networking break" },
      { src: "/image/Home/08.jpg", alt: "Certificate distribution" },
      { src: "/image/Home/08.jpg", alt: "Collaborative group work" },
    ],
  },
  {
    title: "Annual Company Gala - 2023 Highlights",
    layout: "four-square",
    images: [
      { src: "/image/Home/08.jpg", alt: "Red carpet entrance" },
      { src: "/image/Home/08.jpg", alt: "Elegant dinner setup" },
      { src: "/image/Home/08.jpg", alt: "Award recipient" },
      { src: "/image/Home/08.jpg", alt: "Dancing and celebration" },
      { src: "/image/Home/08.jpg", alt: "CEO delivering speech" },
      { src: "/image/Home/08.jpg", alt: "Live band performance" },
      { src: "/image/Home/08.jpg", alt: "Fun at the photo booth" },
      { src: "/image/Home/08.jpg", alt: "Cheers and toasts" },
    ],
  },
])

// Lightbox State
const isModalOpen = ref(false)
const currentImage = ref(null)
const currentSectionIndex = ref(0)
const currentImageIndex = ref(0)

const canNavigate = computed(() => {
  return sections.value[currentSectionIndex.value]?.images.length > 1
})

const openModal = (image, sectionIdx, imageIdx) => {
  currentImage.value = image
  currentSectionIndex.value = sectionIdx
  currentImageIndex.value = imageIdx
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  currentImage.value = null
  document.body.style.overflow = ''
}

const navigateImage = (direction) => {
  const images = sections.value[currentSectionIndex.value].images
  let newIndex = currentImageIndex.value + direction
  if (newIndex < 0) newIndex = images.length - 1
  else if (newIndex >= images.length) newIndex = 0

  currentImageIndex.value = newIndex
  currentImage.value = images[newIndex]
}

const prevImage = () => navigateImage(-1)
const nextImage = () => navigateImage(1)

// Keyboard navigation
const handleKeydown = (event) => {
  if (isModalOpen.value) {
    if (event.key === 'Escape') closeModal()
    else if (event.key === 'ArrowLeft' && canNavigate.value) prevImage()
    else if (event.key === 'ArrowRight' && canNavigate.value) nextImage()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// Layout helpers
const getGridLayout = (layoutType) => {
  switch (layoutType) {
    case "two-wide":
      return "grid grid-cols-1 md:grid-cols-2"
    case "three-tall":
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    case "four-square":
      return "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
    default:
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  }
}

const getImageHeight = (layoutType) => {
  switch (layoutType) {
    case "two-wide":
    case "three-tall":
      return "h-72 md:h-96"
    case "four-square":
      return "h-56 md:h-64"
    default:
      return "h-64 md:h-72"
  }
}
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
</style>
