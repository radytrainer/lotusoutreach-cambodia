<template>
  <div class="card-detail min-h-screen bg-gray-50 p-4 dark:bg-gray-900">
    <button class="back-button mb-4 text-blue-600 hover:underline dark:text-blue-400" @click="goBack"
      aria-label="Go back to News & Stories page">
      ← Back to News & Stories
    </button>
    <div v-if="item" class="bg-white rounded-xl shadow-md p-6 dark:bg-gray-800">
      <!-- story section -->
      <div v-if="item.type === 'story'" class="person-layout">
        <div class="relative mb-8 md:mb-12 h-72 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <img :src="item.avatar" :alt="`Portrait of ${item.name} graduating`"
            class="w-full h-full object-cover object-center" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
            <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-2">
              {{ item.name }}
            </h1>
            <p class="text-lg md:text-xl text-blue-200">
              {{ item.program || 'CATALYST Scholarship' }}
            </p>
          </div>
        </div>
        <div class="mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 dark:text-white">Her Journey</h2>
          <div class="space-y-8">
            <div v-for="(story, index) in item.fullStory" :key="index"
              class="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-700">
              <h3 v-if="story.title" class="text-xl md:text-2xl font-semibold text-gray-800 mb-3 dark:text-white">
                {{ story.title }}
              </h3>
              <p class="text-gray-600 text-base md:text-lg leading-relaxed dark:text-gray-300">{{ story.content }}</p>
            </div>
          </div>
        </div>
        <div class="mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 dark:text-white">Moments from Her Life</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(image, index) in item.images" :key="index" class="rounded-lg overflow-hidden shadow-md">
              <img :src="image" :alt="`Image of ${item.name} ${index + 1}`"
                class="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-300"
                loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <!-- program section -->
      <div v-else-if="item.type === 'program'" class="program-layout">
        <div class="relative bg-cover bg-center bg-no-repeat text-white 
         h-[60vh] md:h-screen py-12 sm:py-16"
          :style="{ backgroundImage: `url(${item.image || 'https://via.placeholder.com/1200x600'})` }">
          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div class="container mx-auto px-4 max-w-7xl relative z-10">
            <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <!-- Icon -->
              <div
                class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-200/20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                <i :class="item.icon || 'fas fa-question'" class="text-xl sm:text-2xl text-white"></i>
              </div>

              <!-- Title & Description -->
              <div>
                <h1 class="text-xl sm:text-3xl md:text-5xl font-poppins font-semibold mb-2">
                  {{ item.title || 'No Program Selected' }}
                </h1>
                <p class="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  {{ item.description || 'No description available' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="py-16 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2 space-y-8">
                <section>
                  <h2 class="text-2xl font-poppins font-semibold text-gray-900 mb-4 dark:text-white">About This Program
                  </h2>
                  <p class="text-gray-700 text-base leading-relaxed dark:text-gray-300">
                    {{ item.fullDescription || 'No detailed description available' }}
                  </p>
                </section>
                <section>
                  <h3 class="text-xl font-poppins font-semibold text-gray-900 mb-4 dark:text-white">Key Features</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(feature, index) in item.features || []" :key="index"
                      class="flex items-start p-3 bg-gray-50 rounded-md dark:bg-gray-700">
                      <i class="fas fa-check-circle text-blue-600 mr-2 mt-1 dark:text-blue-400"></i>
                      <span class="text-gray-700 text-sm dark:text-gray-300">{{ feature }}</span>
                    </div>
                    <div v-if="!(item.features && item.features.length)"
                      class="text-gray-500 text-sm dark:text-gray-400">
                      No features available.
                    </div>
                  </div>
                </section>
                <section v-if="item.image1 || item.image2">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <img v-if="item.image1" :src="item.image1" :alt="`${item.title} Image 1`"
                      class="w-full h-64 object-cover rounded-xl shadow-lg" @error="handleImageError" loading="lazy" />
                    <img v-if="item.image2" :src="item.image2" :alt="`${item.title} Image 2`"
                      class="w-full h-64 object-cover rounded-xl shadow-lg" @error="handleImageError" loading="lazy" />
                  </div>
                </section>
              </div>
              <div class="space-y-8">
                <section v-if="item.stats" class="bg-gray-50 rounded-lg p-6 dark:bg-gray-700">
                  <h3 class="text-xl font-poppins font-semibold text-gray-900 mb-4 dark:text-white">Our Impact</h3>
                  <div class="space-y-4">
                    <div v-for="(stat, index) in item.stats || []" :key="index" class="text-center">
                      <div class="text-xl font-bold text-blue-600 mb-1 dark:text-blue-400">{{ stat.number }}</div>
                      <div class="text-gray-600 text-sm dark:text-gray-300">{{ stat.label }}</div>
                    </div>
                    <div v-if="!(item.stats && item.stats.length)" class="text-gray-500 text-sm dark:text-gray-400">
                      No impact statistics available.
                    </div>
                  </div>
                </section>
                <section class="bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg p-6 text-white">
                  <h3 class="text-xl font-poppins font-semibold mb-3">Support This Program</h3>
                  <p class="text-sm mb-4 opacity-90">Your contribution can make a direct impact on this program.</p>
                  <div class="space-y-3">
                    <RouterLink to="/donate">
                      <button
                        class="w-full bg-white text-blue-600 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-200 dark:text-gray-900">
                        Donate Now
                      </button>
                    </RouterLink>
                    <RouterLink to="/contact">
                      <button
                        class="w-full border-2 border-white text-white py-2 rounded-md font-medium hover:bg-white hover:text-pink-600 transition-colors duration-200">
                        Learn More
                      </button>
                    </RouterLink>
                  </div>
                </section>
                <section class="bg-gray-50 rounded-lg p-6 dark:bg-gray-700">
                  <h3 class="text-lg font-poppins font-semibold text-gray-900 mb-4 dark:text-white">Get in Touch</h3>
                  <div class="space-y-3 text-gray-600 text-sm dark:text-gray-300">
                    <div class="flex items-center">
                      <i class="fas fa-envelope mr-2 text-blue-600 dark:text-blue-400"></i>
                      <span>LotusOutreachCambodia@gmail.com</span>
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-phone mr-2 text-pink-600 dark:text-pink-400"></i>
                      <span>+855 12 911 075</span>
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-map-marker-alt mr-2 text-blue-600 dark:text-blue-400"></i>
                      <span>26A Street 492, Phnom Penh, Cambodia</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- event section -->
      <div v-else class="event-layout">
        <article
          class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
          <div class="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
            <img :src="item.image" :alt="item.title"
              class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90" loading="lazy"
              @error="handleImageError" />
          </div>
          <div class="p-8 lg:p-12">
            <div class="mb-8">
              <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-base sm:text-lg md:text-xl lg:text-base">
                  {{ getCategoryLabel(item.category) }}
                </span>
                <span
                  class="text-sm font-medium text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-base">
                  {{ formatDate(item.date) }}
                </span>
              </div>
              <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight dark:text-white">
                {{ item.title }}
              </h1>
              <div
                class="flex flex-wrap items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-8 text-base sm:text-lg md:text-xl lg:text-base">
                <span class="font-medium">By {{ item.author }}</span>
                <span>•</span>
                <span>{{ calculateReadTime(item.content) }} min read</span>
                <span v-if="item.location" class="flex items-center">
                  <span>•</span>
                  <span class="ml-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ item.location }}
                  </span>
                </span>
              </div>
            </div>
            <div class="prose prose-lg max-w-none text-gray-700 space-y-6 dark:text-gray-300 dark:prose-invert">
              <p v-for="(paragraph, index) in item.content.split('\n\n')" :key="index"
                class="md:text-justify text-base sm:text-lg md:text-xl lg:text-base">
                {{ paragraph }}
              </p>
              <h2 class="md:text-2xl text-xl font-semibold text-gray-900 mt-8 dark:text-white">Visual Highlights</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(img, index) in item.image1" :key="index">
                  <img :src="img" :alt="`${item.title} Image ${index + 1}`"
                    class="w-full md:h-64 object-cover rounded-lg shadow-md" loading="lazy" @error="handleImageError" />
                </div>
              </div>
              <div
                class="mt-12 p-6 bg-indigo-50 rounded-xl text-center border border-indigo-100 dark:bg-indigo-950 dark:border-indigo-900">
                <h3 class="lg:text-xl font-bold text-indigo-900 mb-3 dark:text-indigo-200 md:text-2xl">
                  Support Our Mission
                </h3>
                <p class="text-gray-600 mb-5 dark:text-gray-400 md:text-xl lg:text-[16px]">
                  Help us continue empowering communities through education, health, and sustainable development in
                  Cambodia.
                </p>
                <router-link to="/donate">
                  <button
                    class="bg-indigo-600 text-white md:text-xl lg:text-[14px] md:px-6 px-4 md:py-2 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Get Involved Today
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <p v-else class="text-center text-gray-500 dark:text-gray-400">Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['person', 'program', 'event'].includes(value),
  },
  name: {
    type: String,
    required: true,
  },
  news: {
    type: Array,
    default: () => [],
  },
});

defineEmits(['view-detail']);

const item = ref(null);
const related = ref([]);
const router = useRouter();

const goBack = () => {
  router.go(-1);
};

const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/150';
};

const getCategoryLabel = (category) => {
  return category || 'Event';
};

const formatDate = (date) => {
  if (!date) return 'Unknown Date';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const calculateReadTime = (content) => {
  if (!content) return 1;
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const fetchData = async () => {
  console.log('Fetching data for:', { type: props.type, name: props.name });
  try {
    const response = await axios.get('/backend/home.json');
    const newsData = response.data.news || [];
    console.log('Fetched news data:', newsData);
    item.value = newsData.find(
      (item) => item.type.toLowerCase() === props.type.toLowerCase() && item.name.toLowerCase() === props.name.toLowerCase()
    ) || null;

    if (item.value) {
      console.log('Found item:', item.value);

      if (item.value.type === 'story') {
        item.value.avatar = item.value.avatar || '/placeholder.svg?height=450&width=800';
        item.value.program = item.value.program || 'CATALYST Scholarship';
        item.value.images = item.value.images || [item.value.avatar];
      }

      else if (item.value.type === 'event') {
        item.value.image1 = item.value.image1 || [];
      }

      else if (item.value.type === 'program') {
        item.value.gallery = item.value.gallery || [];
      }
      related.value = newsData.filter(
        (item) => item.type === 'event' && item.name !== props.name
      );
    } else {
      console.log('No item found for:', { type: props.type, name: props.name });
    }
    console.log('Related items:', related.value);
  } catch (error) {
    console.error('Failed to fetch news data:', error);
  }
};


onMounted(() => {
  fetchData();
});

onUnmounted(() => {

});
</script>

<style scoped>
.card-detail {
  max-width: 1200px;
  margin: 0 auto;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
}

.prose :where(h2):not(:where([class~="not-prose"] *)) {
  font-size: 1.5rem;
}

.prose :where(p):not(:where([class~="not-prose"] *)) {
  line-height: 1.75;
}
</style>