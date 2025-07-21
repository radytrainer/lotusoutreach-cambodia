<template>
  <div class="min-h-screen bg-white">
    <section class="relative w-full h-[42rem] bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-700">
      <!-- Slideshow images -->
      <div class="absolute inset-0 z-0">
        <div v-for="(image, index) in images" :key="index" :class="[
          'absolute inset-0 transition-opacity duration-700 ease-in-out',
          current === index ? 'opacity-100' : 'opacity-0',
        ]">
          <img :src="image" :alt="`Slide ${index + 1}`" class="w-full h-full object-cover object-center" />
          <div class="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      <!-- Centered hero card (dynamic content via props and slot) -->
      <div class="absolute inset-0 flex items-center justify-center px-4 z-20">
        <div class="p-10 max-w-2xl text-center">
          <h1 v-if="title" v-html="title" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6"></h1>
          <p v-if="description" class="text-xl text-gray-100 mb-8 leading-relaxed">
            {{ description }}
          </p>
          <div v-if="buttons && buttons.length">
            <a v-for="(button, index) in buttons" :key="index" :href="button.link"
              class="mx-2 inline-block px-8 py-3 text-lg rounded-lg transition-colors duration-200"
              :class="button.style">
              {{ button.text }}
            </a>
          </div>
          <slot></slot>
        </div>
      </div>

      <!-- Dots pagination -->
      <div class="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button v-for="(image, index) in images" :key="index" @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`" :class="[
            'rounded-full transition-all',
            current === index ? 'bg-white' : 'bg-gray-400',
          ]" class="w-2 h-2"></button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  images: Array,
  title: String,
  description: String,
  buttons: Array,
});

const current = ref(0);

const nextSlide = () => {
  current.value = (current.value + 1) % (props.images?.length || 1);
};

const prevSlide = () => {
  current.value = (current.value - 1 + (props.images?.length || 1)) % (props.images?.length || 1);
};

const goToSlide = (index) => {
  current.value = index;
};

let interval = null;
onMounted(() => {
  console.log('Component mounted, starting interval');
  if (props.images && props.images.length > 0) {
    interval = setInterval(nextSlide, 5000);
  } else {
    console.log('No images provided, interval not started');
  }
});

onBeforeUnmount(() => {
  console.log('Component unmounted, clearing interval');
  if (interval) clearInterval(interval);
});


watch(() => props.images, (newImages) => {
  if (newImages && newImages.length > 0 && current.value >= newImages.length) {
    current.value = 0;
    console.log('Images changed, resetting current to:', current.value);
  }
  if (newImages && newImages.length > 0 && !interval) {
    interval = setInterval(nextSlide, 5000);
    console.log('Started interval due to new images');
  } else if (!newImages || newImages.length === 0) {
    if (interval) clearInterval(interval);
    console.log('Cleared interval due to no images');
  }
});
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--marquee-width)));
  }
}

.animate-marquee {
  animation: marquee var(--marquee-duration, 60s) linear infinite;
}
</style>