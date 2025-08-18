<template>
  <div class="min-h-screen bg-gray-50">
    <section id="news" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            News
          </h2>
          <p class="md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive programs designed to transform lives and build
            stronger communities in Cambodia.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(newItem, index) in news" :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition w-full max-w-sm mx-auto hover:-translate-y-2 flex flex-col">
            
            <!-- Image -->
            <div class="relative">
              <img :src="newItem.image" :alt="`Image for ${newItem.name}`"
                class="w-full h-80 sm:h-72 md:h-80 object-cover" loading="lazy" />
              <span
                class="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                News
              </span>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                {{ newItem.name }}
              </h3>
              <p class="text-sm text-gray-600 mb-6 line-clamp-3 flex-1">
                {{ newItem.description }}
              </p>
              <router-link :to="newItem.link"
                class="self-start bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Share Moment Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Share Moment
          </h2>
          <p class="md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Life is made of little joys—don’t keep them to yourself, share the moment with those who matter.
          </p>
        </div>

        <!-- Masonry Gallery -->
        <div class="bg-neutral-50 py-16 px-6 md:px-12">
          <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
            <div v-for="(image, idx) in shareMoment" :key="idx"
              class="mb-4 relative break-inside rounded-xl shadow-lg cursor-pointer group overflow-hidden border border-gray-200 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              @click="openLightbox(idx)">
              <img :src="image.image" :alt="image.alt"
                class="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>

        <!-- Lightbox -->
        <div v-if="showLightbox" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          @click.self="closeLightbox">
          <!-- Close -->
          <button class="absolute top-6 right-6 text-white text-4xl hover:text-gray-300" @click="closeLightbox">&times;</button>

          <!-- Prev -->
          <button class="absolute left-6 text-white text-5xl hover:text-gray-300" @click="prevImage">&lsaquo;</button>

          <!-- Current Image -->
          <img :src="currentImage.src" :alt="currentImage.alt"
            class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />

          <!-- Next -->
          <button class="absolute right-6 text-white text-5xl hover:text-gray-300" @click="nextImage">&rsaquo;</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineProps({
  news: { type: Array, required: true },
  subSectionIcons: { type: Array, required: true },
  shareMoment: { type: Array, required: true }
});

const showLightbox = ref(false);
const currentIndex = ref(0);

// Open Lightbox
function openLightbox(index) {
  currentIndex.value = index;
  showLightbox.value = true;
}
function closeLightbox() {
  showLightbox.value = false;
}
function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + shareMoment.length) % shareMoment.length;
}
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % shareMoment.length;
}

// Current image computed
const currentImage = computed(() => shareMoment[currentIndex.value]);
</script>