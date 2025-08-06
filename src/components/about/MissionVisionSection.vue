<template>
  <section class="pb-16 bg-white" id="mission-vision-values">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <!-- Left Column: Mission/Vision Text -->
      <div class="lg:text-left">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-6 text-center">
          Our Mission, Vision & Values
        </h2>
        <div ref="principlesContainer">
          <div
            v-for="(item, index) in principles"
            :key="index"
            class="mb-6 flex items-start gap-4 justify-center lg:justify-start"
          >
            <div class="w-10 h-10 flex items-center justify-center rounded-full">
              <i :class="`${item.icon} text-blue-600 text-xl`"></i>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-semibold text-blue-800 mb-1">
                {{ item.title }}
              </h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Carousel -->
      <div
        class="relative w-full h-72 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] rounded-xl overflow-hidden"
      >
        <div
          ref="carouselContainer"
          class="flex transition-transform duration-700 ease-in-out h-full"
          :style="{ transform: `translateX(-${(currentIndex + images.length) * 100}%)` }"
        >
          <!-- Clone Last -->
          <img
            v-for="(image, index) in images"
            :key="'start-' + index"
            :src="image.src"
            :alt="image.alt"
            class="carousel-img"
          />
          <!-- Original -->
          <img
            v-for="(image, index) in images"
            :key="'original-' + index"
            :src="image.src"
            :alt="image.alt"
            class="carousel-img"
          />
          <!-- Clone First -->
          <img
            v-for="(image, index) in images"
            :key="'end-' + index"
            :src="image.src"
            :alt="image.alt"
            class="carousel-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({ principles: Array })

const principlesContainer = ref(null)
const carouselContainer = ref(null)
const currentIndex = ref(0)

const images = ref([
  { src: '/image/About/value.jpg', alt: 'Girls with bicycles supported by Lotus Outreach' },
  { src: '/image/Home/05.jpg', alt: 'Community support by Lotus Outreach' },
  { src: '/image/Home/07.jpg', alt: 'Empowerment programs by Lotus Outreach' },
  { src: '/image/Home/08.jpg', alt: 'Empowerment programs by Lotus Outreach' },
  { src: '/image/Home/care02.png', alt: 'Care program by Lotus Outreach' }
])

const nextImage = () => {
  currentIndex.value++
  if (currentIndex.value >= images.value.length) {
    setTimeout(() => {
      carouselContainer.value.style.transition = 'none'
      currentIndex.value = 0
      setTimeout(() => {
        carouselContainer.value.style.transition = 'transform 0.7s ease-in-out'
      }, 50)
    }, 700)
  }
}

let autoScrollInterval = null
const startAutoScroll = () => { autoScrollInterval = setInterval(nextImage, 3000) }
const stopAutoScroll = () => { if (autoScrollInterval) clearInterval(autoScrollInterval) }

onMounted(() => { startAutoScroll() })
onUnmounted(() => { stopAutoScroll() })
</script>

<style scoped>
.carousel-img {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>