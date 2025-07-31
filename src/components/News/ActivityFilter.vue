<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
      Our Activities
    </h2>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
      Explore our ongoing initiatives and programs making a difference in
      communities in Cambodia.
    </p>

    <!-- Search and Filter Section -->
    <div class="max-w-md mx-auto">
      <!-- Search Input -->
      <div class="relative">
        <input
          v-model="localSearch"
          type="text"
          placeholder="Search activities..."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
          @input="updateSearch"
          aria-label="Search activities"
        />
        <svg
          class="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <!-- Category Buttons -->
      <div class="flex flex-wrap justify-center gap-2 mt-4">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="toggleCategory(category.value)"
          :class="getCategoryButtonClass(category.value)"
          class="px-3 py-1 text-sm rounded-full transition-colors"
        >
          {{ category.label }}
        </button>

        <!-- Optional: Clear Filters Button -->
        <button
          @click="clearFilters"
          class="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  searchQuery: String,
  categories: Array,
  activeCategories: Array,
  getCategoryButtonClass: Function,
});

const emits = defineEmits(['update:searchQuery', 'toggle-category', 'search']);

const localSearch = ref(props.searchQuery || '');

// Sync local input with prop
watch(
  () => props.searchQuery,
  (newValue) => {
    localSearch.value = newValue;
  }
);

// Emit updated search input
const updateSearch = () => {
  emits('update:searchQuery', localSearch.value);
  emits('search');
};

// Toggle selected category
const toggleCategory = (category) => {
  emits('toggle-category', category);
};

// Clear search and all filters
const clearFilters = () => {
  emits('update:searchQuery', '');
  emits('search');
  props.categories.forEach((c) => emits('toggle-category', c.value));
};
</script>
