<template>
  <section class="py-16 font-poppins">
    <!-- Title Section -->
    <div class="text-center mb-16 px-4">
      <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Success <span class="text-blue-600">Stories</span>
      </h1>
      <p class="text-gray-700 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        Hear from the women whose lives have been
        <span class="font-semibold text-blue-700">transformed</span>
      </p>
    </div>

    <!-- Main Container -->
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Image & Name Section -->
        <div class="relative w-full lg:w-1/2 flex justify-center items-center">
          <Transition name="slide" mode="out-in">
            <div :key="currentStoryIndex" class="w-full flex justify-center">
              <div
                class="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-orange-200 flex items-center justify-center overflow-hidden shadow-lg">
                <img :src="currentStory.avatar" :alt="currentStory.name"
                  class="w-full h-full object-cover object-center" />
              </div>
            </div>
          </Transition>

          <!-- Name + Program -->
          <Transition name="fade" mode="out-in">
            <div :key="'name-' + currentStoryIndex"
              class="absolute bottom-16 left-1/2 -translate-x-1/2 w-full px-4 z-10">
              <div class="relative flex flex-col items-center">
                <!-- Name -->
                <div
                  class="bg-blue-400 text-white md:px-8 px-6 md:py-4 py-2 transform -skew-y-6 -rotate-6 shadow-lg text-center w-full max-w-[250px] md:max-w-[350px] z-200">
                  <h3 class="font-bold text-lg sm:text-2xl md:text-3xl uppercase tracking-wide">
                    {{ currentStory.name }}
                  </h3>
                </div>
                <!-- Program -->
                <div
                  class="absolute top-7 sm:top-9 md:top-9 right-1 sm:right-12 md:right-12 bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 transform -skew-y-6 -rotate-6 shadow-lg max-w-[240px] sm:max-w-[300px]">
                  <p class="text-xs sm:text-sm font-medium text-center">
                    {{ currentStory.program }}
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Quote & Navigation -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <Transition name="fade" mode="out-in">
            <div :key="'quote-' + currentStoryIndex" class="mb-6 mt-4 sm:mt-8 px-2">
              <span class="text-blue-400 text-5xl sm:text-6xl font-extrabold leading-none block mb-4">“</span>
              <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
                {{ currentStory.quote.paragraph1 }}
                <span class="text-blue-600 font-semibold">{{ currentStory.quote.highlight1 }}</span>.
              </p>
              <router-link :to="{ name: 'StoryDetail', params: { id: currentStoryIndex } }"
                class="mt-4 inline-block text-blue-600 hover:underline">Learn More</router-link>
            </div>
          </Transition>

          <!-- Navigation Buttons -->
          <div class="flex justify-center lg:justify-start mt-6 sm:mt-8 space-x-4">
            <button @click="scrollLeft"
              class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
              aria-label="Previous story">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button @click="scrollRight"
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 text-white"
              aria-label="Next story">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';

const props = defineProps({
  stories: {
    type: Array,
    required: true,
  },
});

const currentStoryIndex = ref(0);

watchEffect(() => {
  if (currentStoryIndex.value >= props.stories.length) {
    currentStoryIndex.value = 0;
  }
});

const currentStory = computed(() => props.stories[currentStoryIndex.value] || {});

const scrollLeft = () => {
  const len = props.stories.length;
  currentStoryIndex.value = (currentStoryIndex.value - 1 + len) % len;
};

const scrollRight = () => {
  const len = props.stories.length;
  currentStoryIndex.value = (currentStoryIndex.value + 1) % len;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); /* smoother easing */
}
.slide-enter-from {
  transform: translateX(80%); /* slightly less distance for smoother feel */
}
.slide-leave-to {
  transform: translateX(-80%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out; /* slower fade */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
