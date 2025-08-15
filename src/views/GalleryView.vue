<template>
  <!-- Hero Banner -->
  <section class="relative h-[70vh] md:h-[100vh] bg-gray-100 overflow-hidden">
    <img 
      src="/public/image/Galleries/heading.jpg" 
      alt="Lotus Outreach activities"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
        Our Gallery of <span class="text-pink-500">Activities</span>
      </h1>
      <p class="text-lg md:text-xl text-white max-w-3xl">
        In rural Cambodia, education changes lives. Each photo captures the spirit of Lotus Outreach Cambodia’s mission empowering girls and strengthening communities through knowledge, opportunity, and hope.
      </p>
    </div>
  </section>

  <!-- Gallery Sections -->
  <div class="bg-neutral-50 py-16 px-6 md:px-12">
    <div class="max-w-7xl mx-auto space-y-24">
      <div v-for="(section, sIdx) in galleryData" :key="sIdx">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-pink-500 pb-2">
          {{ section.title }}
        </h2>

        <!-- Masonry-style responsive grid -->
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <div 
            v-for="(image, iIdx) in section.images" 
            :key="iIdx"
            class="mb-4 relative break-inside rounded-xl shadow-lg cursor-pointer group overflow-hidden border border-gray-200 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            @click="openLightbox(sIdx, iIdx)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p class="text-white font-semibold truncate">{{ image.pathTitle || image.alt }}</p>
              <p v-if="image.description" class="text-sm text-gray-300 mt-1 line-clamp-2">
                {{ image.description }}
              </p>
            </div>
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
      class="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
      @click="closeLightbox"
      aria-label="Close"
    >&times;</button>

    <button 
      class="absolute left-6 text-white text-5xl hover:text-gray-300 transition-colors"
      @click="prevImage"
      aria-label="Previous"
    >&lsaquo;</button>

    <img 
      :src="currentImage.src" 
      :alt="currentImage.alt"
      class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
    />

    <button 
      class="absolute right-6 text-white text-5xl hover:text-gray-300 transition-colors"
      @click="nextImage"
      aria-label="Next"
    >&rsaquo;</button>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-lg max-w-md text-center">
      <p class="font-semibold text-lg">{{ currentImage.pathTitle || currentImage.alt }}</p>
      <p v-if="currentImage.description" class="text-sm mt-1 text-gray-300">{{ currentImage.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const showLightbox = ref(false);
const currentImageIndex = ref(0);
const galleryData = ref([]);

const allImages = computed(() => galleryData.value.flatMap(section => section.images));
const currentImage = computed(() => allImages.value[currentImageIndex.value] || {});

const fetchData = async () => {
  try {
    const response = await axios.get('/backend/gallery.json');
    galleryData.value = response.data.galleryData || [];
  } catch (err) {
    console.error('Failed to fetch gallery:', err);
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
  if (event.key === 'ArrowRight') nextImage();
  else if (event.key === 'ArrowLeft') prevImage();
  else if (event.key === 'Escape') closeLightbox();
};

onMounted(() => {
  fetchData();
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => window.removeEventListener('keydown', handleKeyDown));
</script>
