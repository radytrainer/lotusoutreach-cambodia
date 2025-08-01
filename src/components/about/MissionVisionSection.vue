<template>
    <section class="pb-20 bg-white" id="mission-vision-values">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 class="text-4xl font-extrabold text-blue-700 mb-10">
                    Our Mission, Vision & Values
                </h2>
                <div ref="principlesContainer">
                    <div v-for="(item, index) in principles" :key="index" class="mb-8 flex items-start gap-4">
                        <div class="w-10 h-10 flex items-center justify-center rounded-full">
                            <i :class="`${item.icon} text-blue-600 text-xl`"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-blue-800 mb-1">{{ item.title }}</h3>
                            <p class="text-gray-700 leading-relaxed">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-end justify-center mt-20 relative overflow-hidden">
                <div class="relative w-full h-full">
                    <div
                        ref="carouselContainer"
                        class="flex transition-transform duration-700 ease-in-out"
                        :style="{ transform: `translateX(-${(currentIndex + images.length) * 100}%)` }"
                    >
                        <!-- Cloned last images at the start for infinite effect -->
                        <img
                            v-for="(image, index) in images"
                            :key="'clone-start-' + index"
                            :src="image.src"
                            :alt="image.alt"
                            class="rounded-2xl shadow-2xl w-full h-full object-cover flex-shrink-0"
                            :style="{ height: principlesHeight ? `${principlesHeight}px` : 'auto' }"
                        />
                        <!-- Original images -->
                        <img
                            v-for="(image, index) in images"
                            :key="'original-' + index"
                            :src="image.src"
                            :alt="image.alt"
                            class="rounded-2xl shadow-2xl w-full h-full object-cover flex-shrink-0"
                            :style="{ height: principlesHeight ? `${principlesHeight}px` : 'auto' }"
                        />
                        <!-- Cloned first images at the end for infinite effect -->
                        <img
                            v-for="(image, index) in images"
                            :key="'clone-end-' + index"
                            :src="image.src"
                            :alt="image.alt"
                            class="rounded-2xl shadow-2xl w-full h-full object-cover flex-shrink-0"
                            :style="{ height: principlesHeight ? `${principlesHeight}px` : 'auto' }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

defineProps({ principles: Array })

const principlesContainer = ref(null)
const principlesHeight = ref(0)
const currentIndex = ref(0)
const images = ref([
    { src: '/image/About/value.jpg', alt: 'Girls with bicycles supported by Lotus Outreach' },
    { src: '/image/Home/05.jpg', alt: 'Community support by Lotus Outreach' },
    { src: '/image/Home/07.jpg', alt: 'Empowerment programs by Lotus Outreach' },
    { src: '/image/Home/08.jpg', alt: 'Empowerment programs by Lotus Outreach' },
    { src: '/image/Home/care02.png', alt: 'Empowerment programs by Lotus Outreach' }
])

const carouselContainer = ref(null)

const updatePrinciplesHeight = () => {
    if (principlesContainer.value) {
        principlesHeight.value = principlesContainer.value.offsetHeight
    }
}

const scrollToSection = () => {
    const section = document.getElementById('mission-vision-values')
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

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

const startAutoScroll = () => {
    autoScrollInterval = setInterval(nextImage, 3000)
}

const stopAutoScroll = () => {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval)
    }
}

onMounted(() => {
    updatePrinciplesHeight()
    scrollToSection()
    startAutoScroll()
})

onUpdated(updatePrinciplesHeight)

onUnmounted(stopAutoScroll)
</script>

<style scoped>
img {
    object-fit: cover;
    width: 100%;
}
html {
    scroll-behavior: smooth;
}
</style>