<template>
  <div class="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
    <div
      v-if="selectedAbout"
      class="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row relative"
    >
      <!-- Back Button -->
      <button
        class="absolute top-4 left-4 text-gray-600 hover:text-gray-900 flex items-center space-x-1 z-10"
        @click="goBack"
      >
        <ChevronLeftIcon class="w-5 h-5" />
        <span>Back</span>
      </button>

      <!-- Image Section -->
      <div class="relative w-full md:w-1/3 h-64 md:h-auto flex-shrink-0">
        <img
          :src="selectedAbout.img || selectedAbout.image"
          :alt="selectedAbout.info || selectedAbout.name"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <!-- Information Section -->
      <div class="flex-grow p-8 flex flex-col justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ selectedAbout.name }}</h1>
          <p class="text-xl text-gray-600 mb-6">{{ selectedAbout.role || selectedAbout.position }}</p>
          <p class="text-gray-700 text-base leading-relaxed mb-4" style="white-space: pre-line;">
            {{ selectedAbout.bio || selectedAbout.details }}
          </p>
        </div>

        <div class="mt-8 pt-4 border-t border-gray-200 flex flex-wrap gap-3" v-if="selectedAbout.tags && selectedAbout.tags.length">
          <span
            v-for="(tag, i) in selectedAbout.tags"
            :key="i"
            class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">
      <p>Team member not found.</p>
      <button
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        @click="goBack"
      >
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ChevronLeftIcon } from "lucide-vue-next";
// import aboutData from "@/backend/about.json";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const selectedAbout = computed(() =>
  aboutData.find((p) => String(p.id) === String(route.params.id))
);

const goBack = () => {
  router.back();
};
</script>
