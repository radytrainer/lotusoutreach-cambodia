<template>
  <!-- Activity Card -->
  <article
    class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
  >
    <!-- Image Section -->
    <div class="h-48 overflow-hidden">
      <img
        :src="activity.image || '/placeholder.svg'"
        :alt="activity.title || 'Activity image'"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Content Section -->
    <div class="p-6 md:p-8 flex flex-col flex-grow">
      <!-- Top Row: Category + Date -->
      <div class="flex items-center justify-between mb-4">
        <span
          class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
          :class="getCategoryBadgeClass(activity.category)"
        >
          {{ getCategoryLabel(activity.category) }}
        </span>
        <span class="text-sm text-gray-500">
          {{ formatDate(activity.date) }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {{ activity.title }}
      </h3>

      <!-- Location (if any) -->
      <p v-if="activity.location" class="text-sm text-gray-500 mb-2">
        📍 {{ activity.location }}
      </p>

      <!-- Summary -->
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ activity.content }}
      </p>

      <!-- Author -->
      <div class="mt-auto">
        <span class="text-sm font-medium text-gray-500">
          By {{ activity.author || 'Unknown' }}
        </span>
      </div>
    </div>

    <!-- Learn More Button -->
    <div class="px-6 pb-6 md:px-8">
      <button
        class="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors flex items-center justify-center"
        @click="$emit('view-detail', activity)"
        aria-label="View details of activity"
      >
        Learn more
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps([
  'activity',
  'getCategoryBadgeClass',
  'getCategoryLabel',
  'formatDate'
]);

defineEmits(['view-detail']);
</script>
