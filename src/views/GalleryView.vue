<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl font-extrabold text-gray-900 text-center mb-16 leading-tight tracking-tight">
        Our Organizational Activities Gallery
      </h1>

      <section v-for="(section, sectionIndex) in sections" :key="sectionIndex" class="mb-24">
        <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center sm:text-left border-b-2 border-gray-300 pb-4">
          {{ section.title }}
        </h2>
        <div :class="getGridLayout(section.layout)" class="gap-8">
          <div
            v-for="(image, imageIndex) in section.images"
            :key="imageIndex"
            class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
            @click="openModal(image, sectionIndex, imageIndex)"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              :class="getImageHeight(section.layout)"
              class="w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p class="text-white text-xl font-semibold drop-shadow-lg">{{ image.alt }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      @click.self="closeModal"
      @keydown.escape="closeModal"
      tabindex="-1"
    >
      <div class="relative max-w-full max-h-full flex items-center justify-center">
        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 text-white text-5xl font-light leading-none cursor-pointer z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          @click="closeModal"
          aria-label="Close image viewer"
        >
          &times;
        </button>

        <!-- Previous Button -->
        <button
          v-if="canNavigate"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
          @click.stop="prevImage"
          aria-label="Previous image"
        >
          <ChevronLeftIcon class="w-10 h-10" />
        </button>

        <!-- Image -->
        <img
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        <!-- Next Button -->
        <button
          v-if="canNavigate"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
          @click.stop="nextImage"
          aria-label="Next image"
        >
          <ChevronRightIcon class="w-10 h-10" />
        </button>

        <!-- Image Caption -->
        <p class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl font-medium bg-black/60 px-6 py-3 rounded-full shadow-lg">
          {{ currentImage.alt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';

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
]);

const isModalOpen = ref(false);
const currentImage = ref(null);
const currentSectionIndex = ref(0);
const currentImageIndex = ref(0);

// Computed property to check if navigation is possible (more than one image in the current section)
const canNavigate = computed(() => {
  return sections.value[currentSectionIndex.value]?.images.length > 1;
});

const openModal = (image, sectionIdx, imageIdx) => {
  currentImage.value = image;
  currentSectionIndex.value = sectionIdx;
  currentImageIndex.value = imageIdx;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
};

const closeModal = () => {
  isModalOpen.value = false;
  currentImage.value = null;
  document.body.style.overflow = ''; // Restore scrolling
};

const navigateImage = (direction) => {
  const currentSectionImages = sections.value[currentSectionIndex.value].images;
  let newIndex = currentImageIndex.value + direction;

  if (newIndex < 0) {
    newIndex = currentSectionImages.length - 1; // Wrap around to the last image
  } else if (newIndex >= currentSectionImages.length) {
    newIndex = 0; // Wrap around to the first image
  }

  currentImageIndex.value = newIndex;
  currentImage.value = currentSectionImages[newIndex];
};

const prevImage = () => navigateImage(-1);
const nextImage = () => navigateImage(1);

// Handle keyboard navigation for lightbox
const handleKeydown = (event) => {
  if (isModalOpen.value) {
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'ArrowLeft' && canNavigate.value) {
      prevImage();
    } else if (event.key === 'ArrowRight' && canNavigate.value) {
      nextImage();
    }
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

// Helper function to get grid layout classes based on section.layout
const getGridLayout = (layoutType) => {
  switch (layoutType) {
    case "two-wide":
      return "grid grid-cols-1 sm:grid-cols-2";
    case "three-tall":
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    case "four-square":
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    case "default":
    default:
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  }
};

// Helper function to get image height classes based on section.layout
const getImageHeight = (layoutType) => {
  switch (layoutType) {
    case "two-wide":
      return "h-80 sm:h-96 lg:h-[450px]"; // Taller images for two-column layout
    case "three-tall":
      return "h-96 sm:h-[450px] lg:h-[550px]"; // Even taller for three-column
    case "four-square":
      return "h-64 sm:h-72 lg:h-80"; // More square-like for four-column
    case "default":
    default:
      return "h-64 sm:h-72"; // Standard height
  }
};
</script>

<style scoped>
/* No custom CSS needed as Tailwind CSS handles all styling */
</style>