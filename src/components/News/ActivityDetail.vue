<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen dark:bg-gray-900">
    <button @click="$emit('back')"
      class="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 mb-8 transition-colors duration-200 dark:text-indigo-400 dark:hover:text-indigo-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium sm:text-lg md:text-2xl lg:text-base">Back to Activities</span>
    </button>

    <article
      class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      <div class="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img :src="activity.image || '/placeholder.svg?height=400&width=800'" :alt="activity.title"
          class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90" />
      </div>
      <div class="p-8 lg:p-12">
        <div class="mb-8">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-base sm:text-lg md:text-xl lg:text-base">
              {{ getCategoryLabel(activity.category) }}
            </span>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-base">{{ formatDate(activity.date) }}</span>
          </div>
          <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight dark:text-white">
            {{ activity.title }}
          </h1>
          <div class="flex flex-wrap items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-8 text-base sm:text-lg md:text-xl lg:text-base">
            <span class="font-medium">By {{ activity.author }}</span>
            <span>•</span>
            <span>{{ calculateReadTime(activity.content) }} min read</span>
            <span v-if="activity.location" class="flex items-center">
              <span>•</span>
              <span class="ml-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                {{ activity.location }}
              </span>
            </span>
          </div>
        </div>
        <div class="prose prose-lg max-w-none text-gray-700 space-y-6 dark:text-gray-300 dark:prose-invert">
          <h2 class="md:text-2xl text-xl font-semibold text-gray-900 mt-8 dark:text-white">Event Overview</h2>
          <p class="md:text-justify text-base sm:text-lg md:text-xl lg:text-base">{{ activity.content }}</p>
          <h2 class="md:text-2xl text-xl font-semibold text-gray-900 mt-8 dark:text-white">Visual Highlights</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(img, index) in activity.image1" :key="index">
              <img :src="img" alt="Student Reflection" class="w-full md:h-64 object-cover rounded-lg shadow-md" />
            </div>
          </div>
          <div
            class="mt-12 p-6 bg-indigo-50 rounded-xl text-center border border-indigo-100 dark:bg-indigo-950 dark:border-indigo-900">
            <h3 class="lg:text-xl font-bold text-indigo-900 mb-3 dark:text-indigo-200 md:text-2xl">Support Our Mission</h3>
            <p class="text-gray-600 mb-5 dark:text-gray-400 md:text-xl lg:text-[16px]">Help us continue empowering
              communities through education,
              health, and sustainable development in Cambodia.</p>
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

    <div v-if="related.length > 0" class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 dark:text-white">Related Activities</h3>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        <article v-for="relatedItem in related" :key="relatedItem.title" @click="$emit('view-detail', relatedItem)"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition-all duration-200 dark:bg-gray-800">
          <div class="flex">
            <div class="w-28 h-28 flex-shrink-0 bg-gray-200 dark:bg-gray-700">
              <img :src="relatedItem.image || '/placeholder.svg?height=112&width=112'" :alt="relatedItem.title"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-4 flex-1">
              <h4 class="font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug dark:text-white">
                {{ relatedItem.title }}
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ relatedItem.author }} • {{ formatDate(relatedItem.date) }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const calculateReadTime = (content) => {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const getCategoryLabel = (category) => {
  if (!category) return 'General';
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: (activity) => {
      return (
        'title' in activity &&
        'content' in activity &&
        'author' in activity &&
        'date' in activity &&
        'category' in activity
      );
    }
  },
  related: {
    type: Array,
    required: true,
    validator: (related) => related.every(item => 'title' in item && 'author' in item && 'date' in item)
  },
});

const emit = defineEmits(['back', 'view-detail']);
</script>