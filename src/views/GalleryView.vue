<template>
  <!-- Hero Banner -->
  <section class="relative h-[70vh] md:h-[100vh] bg-gray-100 overflow-hidden">
    <div class="absolute inset-0">
      <img 
        src="/public/image/Galleries/heading.jpg" 
        alt="Lotus Outreach activities"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/40"></div>
    </div>
    <div class="relative z-10 flex items-center justify-center h-full px-4 md:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-2xl md:text-2xl lg:text-6xl font-bold leading-tight mb-2 text-white">
          Our Gallery of <span class="text-pink-500">Activities</span>
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-3xl mx-auto mt-2 font-beginner">
          In rural Cambodia, education changes lives. Each photo captures the spirit of Lotus Outreach Cambodia’s
          mission empowering girls and strengthening communities through knowledge, opportunity, and hope.
        </p>
      </div>
    </div>
  </section>

  <!-- Gallery Content -->
  <div class="min-h-screen bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div 
        v-for="(section, sectionIndex) in galleryData" 
        :key="sectionIndex" 
        class="mb-20"
      >
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 border-b-4 border-gray-200 pb-4">
          {{ section.title }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="(image, imageIndex) in section.images" 
            :key="imageIndex"
            class="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer border border-gray-200"
            @click="openLightbox(sectionIndex, imageIndex)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p class="text-lg font-semibold truncate">{{ image.pathTitle || image.alt }}</p>
              <p v-if="image.description" class="text-sm text-gray-300 mt-1 line-clamp-2">
                {{ image.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div 
      v-if="showLightbox" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      @click.self="closeLightbox"
    >
      <button 
        class="absolute top-4 right-4 text-white text-4xl font-light z-50 hover:text-gray-300 transition-colors"
        @click="closeLightbox" 
        aria-label="Close Lightbox"
      >
        &times;
      </button>
      <button 
        class="absolute left-4 text-white text-5xl z-50 hover:text-gray-300 transition-colors" 
        @click="prevImage"
        aria-label="Previous Image"
      >
        &lsaquo;
      </button>
      <img 
        :src="currentImage.src" 
        :alt="currentImage.alt"
        class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />
      <button 
        class="absolute right-4 text-white text-5xl z-50 hover:text-gray-300 transition-colors" 
        @click="nextImage"
        aria-label="Next Image"
      >
        &rsaquo;
      </button>
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-md max-w-md">
        <p class="text-lg font-semibold">{{ currentImage.pathTitle || currentImage.alt }}</p>
        <p v-if="currentImage.description" class="text-sm text-gray-300">
          {{ currentImage.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const showLightbox = ref(false);
const currentImageIndex = ref(0);
const galleryData = ref([]);

const allImages = computed(() => {
  return galleryData.value.flatMap(section => section.images);
});

const currentImage = computed(() => {
  return allImages.value[currentImageIndex.value] || {};
});

const fetchData = async () => {
  try {
    const response = await axios.get('/backend/gallery.json');
    galleryData.value = response.data.galleryData || [];
  } catch (error) {
    console.error('Failed to load gallery data:', error);
  }
};

const openLightbox = (sectionIdx, imageIdx) => {
  let flatIndex = 0;
  for (let i = 0; i < sectionIdx; i++) {
    flatIndex += galleryData.value[i].images.length;
  }
  flatIndex += imageIdx;
  currentImageIndex.value = flatIndex;
  showLightbox.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  showLightbox.value = false;
  document.body.style.overflow = '';
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % allImages.value.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + allImages.value.length) % allImages.value.length;
};

const handleKeyDown = (event) => {
  if (!showLightbox.value) return;
  switch (event.key) {
    case 'ArrowRight':
      nextImage();
      break;
    case 'ArrowLeft':
      prevImage();
      break;
    case 'Escape':
      closeLightbox();
      break;
  }
};

onMounted(() => {
  fetchData();
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>