<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- Slide Images -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[ 'absolute inset-0 transition-opacity duration-700 ease-in-out', current === index ? 'opacity-100' : 'opacity-0' ]"
      >
        <img
          :src="slide.src"
          :alt="slide.alt || `Slide ${index + 1}`"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
    </div>

    <!-- Content (Shared or Slide-Specific) -->
    <div class="relative z-10 h-full flex items-center">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1
            v-if="content?.title || slides[current]?.title"
            v-html="content?.title || slides[current].title"
            class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          />
          <p
            v-if="content?.description || slides[current]?.description"
            class="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed"
          >
            {{ content?.description || slides[current].description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              v-for="(button, idx) in content?.buttons || slides[current]?.buttons"
              :key="idx"
              :href="button.link"
              class="px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg"
              :class="button.primary
                ? 'bg-pink-600 hover:bg-pink-700 text-white transform hover:scale-105'
                : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'"
            >
              {{ button.text }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide Indicators -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="current = index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="current === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  content: {
    type: Object,
    default: null
  }
})

const current = ref(0)

const nextSlide = () => {
  current.value = (current.value + 1) % props.slides.length
}

let interval = null
onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})
onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>
