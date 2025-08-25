<template>
  <div class="min-h-screen bg-gray-50">
    <section id="news" class="py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 
                   bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            News
          </h2>
          <p class="md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive programs designed to transform lives and build
            stronger communities in Cambodia.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div v-for="(newItem, index) in props.news" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg 
                   transition transform hover:-translate-y-2 flex flex-col">
            <!-- Image -->
            <div class="relative">
              <img :src="getItemImage(newItem)" :alt="`Image for ${newItem.name || 'News Item'}`"
                class="w-full h-56 sm:h-64 md:h-72 object-cover" loading="lazy" />
              <span
                class="absolute top-3 left-3 bg-pink-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                {{ newItem.type.charAt(0).toUpperCase() + newItem.type.slice(1) }}
              </span>
            </div>
            <!-- Content -->
            <div class="p-4 sm:p-6 flex flex-col flex-1">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                {{ newItem.name || 'Untitled' }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 flex-1">
                {{ getItemDescription(newItem) }}
              </p>
              <router-link :to="`/card-detail/${newItem.type}/${encodeURIComponent(newItem.name || 'untitled')}`"
                class="self-start bg-pink-600 hover:bg-pink-700 text-white text-sm sm:text-base font-medium px-4 py-2 rounded-lg transition">
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Share Moment Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
        <div class="text-center mb-8 md:mb-8">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 
                   bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Share Moment
          </h2>
          <p class="md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Life is filled with joyful moments share them with those who matter through Lutos Outreach Cambodia.
          </p>
        </div>
        <div class="relative w-full max-w-6xl mx-auto mb-12 bg-neutral-50">
          <!-- Desktop/Tablet -->
          <div class="hidden sm:block relative w-full md:h-[600px]">
            <!-- Top center -->
            <div v-if="shareMoment[0]"
              class="absolute left-1/2 -translate-x-1/2 top-48 w-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              @click="openLightbox(0)">
              <img :src="shareMoment[0].image" class="w-full h-[350px] object-cover rounded-xl" />
            </div>

            <!-- Middle left -->
            <div v-if="shareMoment[1]"
              class="absolute top-20 -left-12 w-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              @click="openLightbox(1)">
              <img :src="shareMoment[1].image" class="w-full h-[250px] object-cover rounded-xl" />
            </div>

            <!-- Middle right -->
            <div v-if="shareMoment[2]"
              class="absolute top-20 -right-12 w-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              @click="openLightbox(2)">
              <img :src="shareMoment[2].image" class="w-full h-[250px] object-cover rounded-xl" />
            </div>

            <!-- Bottom left -->
            <div v-if="shareMoment[3]"
              class="absolute bottom-2 -left-1 w-[360px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              @click="openLightbox(3)">
              <img :src="shareMoment[3].image" class="w-full h-[250px] object-cover rounded-xl" />
            </div>

            <!-- Bottom right -->
            <div v-if="shareMoment[4]"
              class="absolute bottom-2 -right-1 w-[360px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              @click="openLightbox(4)">
              <img :src="shareMoment[4].image" class="w-full h-[250px] object-cover rounded-xl" />
            </div>
          </div>
          <!-- Mobile only -->
          <div class="block sm:hidden grid grid-cols-1 gap-4">
            <div v-if="shareMoment[0]" @click="openLightbox(0)">
              <img :src="shareMoment[0].image" class="w-full h-56 rounded-xl shadow-lg object-cover" />
            </div>
            <div v-if="shareMoment[1]" @click="openLightbox(1)">
              <img :src="shareMoment[1].image" class="w-full h-56 rounded-xl shadow-lg object-cover" />
            </div>
            <div v-if="shareMoment[2]" @click="openLightbox(2)">
              <img :src="shareMoment[2].image" class="w-full h-56 rounded-xl shadow-lg object-cover" />
            </div>
            <div v-if="shareMoment[3]" @click="openLightbox(3)">
              <img :src="shareMoment[3].image" class="w-full h-56 rounded-xl shadow-lg object-cover" />
            </div>
            <div v-if="shareMoment[4]" @click="openLightbox(4)">
              <img :src="shareMoment[4].image" class="w-full h-56 rounded-xl shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div v-if="showLightbox"
        class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
        :class="{ 'opacity-100': showLightbox, 'opacity-0': !showLightbox }">
        <div
          class="relative max-w-5xl w-full rounded-2xl overflow-hidden transform transition-all duration-300 ease-in-out"
          :class="{ 'scale-100': showLightbox, 'scale-95': !showLightbox }">
          <!-- Close Button -->
          <button @click="closeLightbox"
            class="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition-colors duration-200">
            &times;
          </button>
          <!-- Image -->
          <img :src="shareMoment[currentImageIndex].image" class="w-full max-h-[85vh] object-contain" />
          <!-- Navigation Arrows -->
          <button v-if="shareMoment.length > 1" @click="prevImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-white md:text-4xl sm:text-4xl text-xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200">
            &#10094;
          </button>
          <button v-if="shareMoment.length > 1" @click="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white md:text-4xl sm:text-4xl text-xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200">
            &#10095;
          </button>
          <!-- Image Counter -->
          <div v-if="shareMoment.length > 1"
            class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full text-sm font-medium">
            {{ currentImageIndex + 1 }} / {{ shareMoment.length }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  news: { type: Array, default: () => [] },
  subSectionIcons: { type: Array, default: () => [] },
  shareMoment: { type: Array, required: true }
});


const showLightbox = ref(false);
const currentImageIndex = ref(0);

function openLightbox(index) {
  currentImageIndex.value = index;
  showLightbox.value = true;
}

function closeLightbox() {
  showLightbox.value = false;
}

function prevImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = props.shareMoment.length - 1;
  }
}

function nextImage() {
  if (currentImageIndex.value < props.shareMoment.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
}

function getItemImage(item) {
  if (item.type === "story") return item.avatar || "/image/placeholder.jpg";
  if (item.type === "program") return item.image || "/image/placeholder.jpg";
  if (item.type === "event") return item.image || item.image1?.[0] || "/image/placeholder.jpg";
  return "/image/placeholder.jpg";
}

function getItemDescription(item) {
  if (item.type === "story") {
    return item.fullStory?.[0]?.content || "No description available.";
  }
  if (item.type === "program") {
    return item.description || "No description available.";
  }
  if (item.type === "event") {
    return item.content?.substring(0, 150) + "..." || "No description available.";
  }
  return "No description available.";
}
</script>
