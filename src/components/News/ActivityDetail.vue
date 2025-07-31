<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen dark:bg-gray-900">
    <button @click="$emit('back')"
      class="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 mb-8 transition-colors duration-200 dark:text-indigo-400 dark:hover:text-indigo-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium">Back to Activities</span>
    </button>

    <article class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div class="aspect-video overflow-hidden bg-gray-200">
        <img :src="activity.image || '/placeholder.svg'" :alt="activity.title" class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90" />
      </div>
      <div class="p-8 lg:p-12">
        <div class="mb-8">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              {{ getCategoryLabel(activity.category) }}
            </span>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ formatDate(activity.date) }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight dark:text-white">
            {{ activity.title }}
          </h1>
          <div class="flex flex-wrap items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
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

        <div class="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Event Overview</h2>
          <p>{{ activity.content }}</p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-8">Key Highlights</h2>
          <div class="space-y-6">
            <div v-if="activity.content.includes('Mr. Glenn Fawcett')">
              <h3 class="text-xl font-medium text-gray-800">Message from Leadership</h3>
              <p class="text-gray-600">Mr. Glenn Fawcett, Executive Director of Lotus Outreach International, congratulated the graduates and shared: "{{ getLeadershipMessage(activity.content) }}"</p>
              <p class="text-gray-600">He encouraged graduates to give back in small ways and thanked partners Cambodian Women’s Crisis Centre (CWCC) and Cambodian Organization for Children and Development (COCD) for their support.</p>
            </div>

            <div v-if="activity.content.includes('Ms. Sdeoung Lisa')" class="flex flex-col md:flex-row gap-4">
              <div class="w-full md:w-1/2">
                <h3 class="text-xl font-medium text-gray-800">Student Reflections</h3>
                <p class="text-gray-600">Ms. Sdeoung Lisa and Ms. Sat Marany, student representatives, said: "{{ getStudentReflections(activity.content) }}"</p>
                <div v-if="activity.content.includes('Hoeun Ya')">
                  <h3 class="text-xl font-medium text-gray-800">Personal Story</h3>
                  <p class="text-gray-600">Hoeun Ya, elder sister of graduate Hoeun Lina, shared: "{{ getPersonalStory(activity.content) }}"</p>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <img src="/image/News/2.jpg" alt="Student Reflection" class="w-full h-68 object-cover rounded-lg shadow-md">
              </div>
            </div>

            <div v-if="activity.content.includes('Ms. Va VannakSerey Raksmey')">
              <h3 class="text-xl font-medium text-gray-800">Gratitude and Conclusion</h3>
              <p class="text-gray-600">{{ getConclusion(activity.content) }}</p>
            </div>
          </div>
          <div
            class="mt-12 p-6 bg-indigo-50 rounded-xl text-center border border-indigo-100 dark:bg-indigo-950 dark:border-indigo-900">
            <h3 class="text-xl font-bold text-indigo-900 mb-3 dark:text-indigo-200">Support Our Mission</h3>
            <p class="text-gray-600 mb-5 dark:text-gray-400">Help us continue empowering communities through education,
              health, and sustainable development in Cambodia.</p>
            <button
              class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Get Involved Today
            </button>
          </div>
        </div>
      </div>
    </article>

    <div v-if="related.length" class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Related Activities</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="relatedItem in related"
          :key="relatedItem.title"
          @click="$emit('view-detail', relatedItem)"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition-all duration-200"
        >
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
              <h4 class="font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">{{ relatedItem.title }}</h4>
              <p class="text-sm text-gray-500">{{ relatedItem.author }} • {{ formatDate(relatedItem.date) }}</p>
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
    validator: (a) => 'title' in a && 'content' in a && 'author' in a && 'date' in a && 'category' in a
  },
  related: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(i => 'title' in i && 'author' in i && 'date' in i)
  },
  formatDate: Function,
  getCategoryBadgeClass: Function,
  getCategoryLabel: Function,
  calculateReadTime: Function,
  showHeading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['back', 'view-detail']);

const getLeadershipMessage = (content) => {
  const match = content.match(/'With affiliates[^']+'/);
  return match ? match[0] : '';
};

const getStudentReflections = (content) => {
  const match = content.match(/'Lotus Outreach Cambodia has become[^']+'/);
  return match ? match[0] : '';
};

const getPersonalStory = (content) => {
  const match = content.match(/'After our parents passed away[^']+'/);
  return match ? match[0] : '';
};

const getConclusion = (content) => {
  const match = content.match(/' Ms. Va VannakSerey Raksmey[^']+'/);
  return match ? match[0] : content.split("Ms. Va VannakSerey Raksmey")[1] || '';
};
</script>
