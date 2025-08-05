<template>
  <div class="text-center mb-16 px-4">
    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Our Activities
    </h2>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
      Explore our ongoing initiatives and programs making a difference in
      communities in Cambodia.
    </p>

    <!-- Search and Filter Section -->
    <div class="max-w-xl mx-auto space-y-6">
      <!-- Search Input -->
      <div class="relative shadow-sm">
        <input
          v-model="localSearch"
          type="text"
          placeholder="Search activities..."
          class="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-1 outline-none pr-12 text-gray-800"
          @input="updateSearch"
          aria-label="Search activities"
        />
        <svg
          class="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
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
      <div class="flex flex-wrap justify-center gap-3">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="toggleCategory(category.value)"
          :class="getCategoryButtonClass(category.value)"
          class="px-4 py-2 text-sm rounded-full transition-all duration-200 font-medium shadow-sm"
        >
          {{ category.label }}
        </button>

        <!-- Clear Filters -->
        <button
          @click="clearFilters"
          class="px-4 py-2 text-sm rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all font-medium shadow-sm"
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
