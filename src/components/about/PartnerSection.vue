<template>
  <section class="bg-white py-16" id="partners"  data-aos="fade-up">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <h2 class="text-3xl sm:text-4xl font-bold text-blue-700 mb-10">Our Networks</h2>
      <div class="relative overflow-hidden">
        <div class="flex whitespace-nowrap animate-marquee"
          :style="{ '--marquee-width': marqueeWidth, '--marquee-duration': marqueeDuration + 's' }"
          @mouseenter="pause" @mouseleave="resume">
          <div v-for="(partner, index) in logos" :key="index"
            class="inline-flex flex-col items-center justify-center bg-gray-50 rounded-xl shadow hover:shadow-md transition duration-300 cursor-pointer mr-6 flex-shrink-0"
            style="min-width: 160px; height: 128px">
            <a :href="partner.url" target="_blank" rel="noopener noreferrer"
              class="flex items-center justify-center w-full h-full" :title="partner.info">
              <img :src="partner.img" :alt="partner.info" class="max-h-20 object-contain px-4" />
            </a>
            <p class="mt-2 text-center text-sm text-gray-600">{{ partner.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  logos: Array,
  marqueeWidth: String,
  marqueeDuration: Number
})

const pause = (event) => {
  if (event.currentTarget instanceof HTMLElement) {
    event.currentTarget.style.animationPlayState = 'paused'
  }
}

const resume = (event) => {
  if (event.currentTarget instanceof HTMLElement) {
    event.currentTarget.style.animationPlayState = 'running'
  }
}
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  animation: marquee linear infinite;
  animation-duration: var(--marquee-duration);
  width: var(--marquee-width);
  display: flex;
}
</style>
