<template>
  <section class="py-16 bg-white font-poppins">
    <div class="text-center mb-24">
      <h1 class="text-3xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Success <span class="text-blue-600">Stories </span>
      </h1>
      <p class="text-gray-700 text-lg md:text-ms max-w-1xl mx-auto leading-relaxed">
        Hear from the women whose lives have been
        <span class="font-semibold text-blue-700">transformed</span>
      </p>
    </div>
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div class="relative w-full lg:w-1/2 flex justify-center items-center p-4">
          <Transition name="slide" mode="out-in">
            <div :key="currentStoryIndex"
              class="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-orange-200 flex items-center justify-center overflow-hidden shadow-lg">
              <img :src="currentStory.avatar" :alt="currentStory.name"
                class="w-full h-full object-cover object-center" />
            </div>
          </Transition>
          <Transition name="fade" mode="out-in">
            <div :key="currentStoryIndex" class="absolute bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%+60px)] z-10">
              <div class="relative flex flex-col items-center">
                <!-- Top bar: NAME -->
                <div
                  class="bg-blue-400 text-white px-8 py-4 transform -skew-y-6 -rotate-6 shadow-lg text-center w-full max-w-[300px] md:max-w-[400px] z-200">
                  <h3 class="font-bold text-4xl uppercase tracking-wide">
                    {{ currentStory.name }}
                  </h3>
                </div>
                <!-- Bottom bar: PROGRAM -->
                <div
                  class="absolute top-12 left-52 bg-blue-500 text-white px-4 py-2 transform -skew-y-6 -rotate-6 shadow-lg text-center w-full max-w-[250px] md:max-w-[350px] z-100">
                  <p class="text-sm font-medium">{{ currentStory.program }}</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12">
          <Transition name="fade" mode="out-in">
            <div :key="currentStoryIndex" class="mb-6 mt-8">
              <span class="text-blue-400 text-6xl font-extrabold leading-none block mb-4">“</span>
              <p class="text-gray-700 text-lg md:text-xl leading-relaxed">
                {{ currentStory.quote.paragraph1 }}
                <span class="text-blue-600 font-semibold">{{ currentStory.quote.highlight1 }}</span>.
              </p>
              <router-link :to="{ name: 'StoryDetail', params: { id: currentStoryIndex } }"
                class="mt-4 inline-block text-blue-600 hover:underline">Learn More</router-link>
            </div>
          </Transition>
          <div class="flex justify-center mt-8 space-x-4">
            <button @click="scrollLeft"
              class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button @click="scrollRight"
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'

const props = defineProps({
  stories: {
    type: Array,
    required: true
  }
})

const currentStoryIndex = ref(0)


watchEffect(() => {
  if (currentStoryIndex.value >= props.stories.length) {
    currentStoryIndex.value = 0
  }
})


const currentStory = computed(() => props.stories[currentStoryIndex.value] || {})


const scrollLeft = () => {
  const len = props.stories.length
  currentStoryIndex.value = (currentStoryIndex.value - 1 + len) % len
}

const scrollRight = () => {
  const len = props.stories.length
  currentStoryIndex.value = (currentStoryIndex.value + 1) % len
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
