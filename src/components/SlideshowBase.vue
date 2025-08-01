<template>
  <section class="relative w-full h-[60vh] sm:h-[80vh] lg:h-screen overflow-hidden">
    <!-- Slide Images -->
    <div class="absolute inset-0 z-0">
      <div v-for="(slide, index) in slides" :key="index" :class="[
        'absolute inset-0 transition-opacity duration-700 ease-in-out',
        current === index ? 'opacity-100' : 'opacity-0'
      ]">
        <img :src="slide.src" :alt="slide.alt || `Slide ${index + 1}`"
          class="w-full h-full max-h-[60vh] sm:max-h-[80vh] lg:max-h-screen object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
    </div>

    <!-- Content (Shared or Slide-Specific) -->
    <div class="relative z-10 h-full flex items-center">
      <div class="container mx-auto px-4 sm:px-6 lg:px-24">
        <div :class="[
          'max-w-xl',
          align === 'center' ? 'text-center mx-auto' : '',
          align === 'right' ? 'text-right ml-auto' : '',
          align === 'left' ? 'text-left' : ''
        ]">
          <!-- Title -->
          <h1 v-if="content?.title || slides[current]?.title" v-html="content?.title || slides[current].title"
            :class="['text-4xl sm:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-6 leading-snug sm:leading-tight', content?.titleClass || '']" />

          <!-- Description -->
          <p v-if="content?.description || slides[current]?.description "
            :class="['text-sm sm:text-lg lg:text-2xl text-gray-200 mb-4 sm:mb-6 leading-relaxed', content?.descriptionClass || '']">
            {{ content?.description || slides[current].description }}
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4" :class="{
            'justify-center items-center': sectionType === 'about' || align === 'center',
            'justify-start items-start': sectionType !== 'about' && align === 'left',
            'justify-end items-end': sectionType !== 'about' && align === 'right'
          }">
            <router-link v-for="(button, idx) in content?.buttons || slides[current]?.buttons" :key="idx"
              :to="button.link"
              class="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 shadow-md w-fit sm:w-auto"
              :class="button.primary
                ? 'bg-pink-600 hover:bg-pink-700 text-white transform hover:scale-105'
                : 'border border-white text-white hover:bg-white hover:text-gray-900'">
              {{ button.text }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide Indicators -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
      <button v-for="(_, index) in slides" :key="index" @click="current = index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="current === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'"></button>
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
    default: null,
  },
  align: {
    type: String,
    default: 'left',
    validator: (val) => ['left', 'center', 'right'].includes(val),
  },
  sectionType: {
    type: String,
    default: null,
    validator: (val) => [null, 'about'].includes(val),
  },
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

<style scoped>

.about-description-font {
  font-size: 2rem; 
}
/* Tablet screens (up to 768px) */
@media (max-width: 768px) {
  .about-description-font {
    font-size: 1.5rem; /* Smaller font size for tablets */
  }
}

/* Mobile screens (up to 480px) */
@media (max-width: 480px) {
  .about-description-font {
    font-size: 1.25rem; /* Even smaller font size for mobile phones */
  }
}
</style>