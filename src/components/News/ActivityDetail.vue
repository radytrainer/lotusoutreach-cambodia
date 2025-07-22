<template>
    <!-- Activity Detail -->
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <button @click="$emit('back')" class="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span>Back to Activities</span>
    </button>

    <article class="bg-white rounded-xl shadow-sm overflow-hidden">
      <div class="aspect-video overflow-hidden">
        <img :src="activity.image || '/placeholder.svg'" :alt="activity.title" class="w-full h-full object-cover" />
      </div>
      <div class="p-8">
        <div class="mb-6">
          <div class="flex items-center justify-between mb-4">
            <span
              class="px-3 py-1 text-sm font-medium rounded-full"
              :class="getCategoryBadgeClass(activity.category)"
            >
              {{ getCategoryLabel(activity.category) }}
            </span>
            <span class="text-sm text-gray-500">{{ formatDate(activity.date) }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ activity.title }}
          </h1>
          <div class="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <span>By {{ activity.author }}</span>
            <span>•</span>
            <span>{{ calculateReadTime(activity.content) }} min read</span>
            <span v-if="activity.location">•</span>
            <span v-if="activity.location">📍 {{ activity.location }}</span>
          </div>
        </div>

        <div class="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
          {{ activity.content }}
        </div>

        <div class="mt-8 p-6 bg-pink-50 rounded-lg text-center">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Support Our Mission</h3>
          <p class="text-gray-600 mb-4">
            Help us continue empowering communities through education, health, and sustainable development in Cambodia.
          </p>
          <button class="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700">
            Get Involved Today
          </button>
        </div>
      </div>
    </article>

    <div v-if="related.length > 0" class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Related Activities</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="relatedItem in related"
          :key="relatedItem.title"
          @click="$emit('view-detail', relatedItem)"
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md cursor-pointer"
        >
          <div class="flex">
            <div class="w-24 h-24 flex-shrink-0">
              <img :src="relatedItem.image" :alt="relatedItem.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-4 flex-1">
              <h4 class="font-semibold text-gray-900 mb-1 line-clamp-2">
                {{ relatedItem.title }}
              </h4>
              <p class="text-sm text-gray-500">
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
defineProps(['activity', 'related', 'formatDate', 'getCategoryBadgeClass', 'getCategoryLabel', 'calculateReadTime']);
defineEmits(['back', 'view-detail']);
</script>
