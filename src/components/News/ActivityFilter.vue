<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
      Our Activities
    </h2>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
      Explore our ongoing initiatives and programs making a difference in
      communities across Cambodia.
    </p>

    <!-- Search Bar -->
    <div class="max-w-md mx-auto relative">
      <div class="relative">
        <input
          v-model="localSearch"
          type="text"
          placeholder="Search activities..."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 pr-10"
          @input="updateSearch"
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

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-2 mt-4">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="toggle(category.value)"
          class="px-3 py-1 text-sm rounded-full transition-colors"
          :class="getCategoryButtonClass(category.value)"
        >
          {{ category.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  searchQuery: String,
  categories: Array,
  activeCategories: Array,
  getCategoryButtonClass: Function,
});

const emits = defineEmits(['update:searchQuery', 'toggle-category', 'search']);

const localSearch = ref(props.searchQuery || '');

watch(() => props.searchQuery, (newVal) => {
  localSearch.value = newVal;
});

const updateSearch = () => {
  emits('update:searchQuery', localSearch.value);
  emits('search');
};

const toggle = (category) => {
  emits('toggle-category', category);
};
</script>
