<template>
    <section class="pb-20 bg-white" id="mission-vision-values">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <!-- Text Content -->
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
            <!-- Image -->
            <div class="flex items-end justify-center mt-20">
                <img
                    src="/image/About/value.jpg"
                    alt="Girls with bicycles supported by Lotus Outreach"
                    class="rounded-2xl shadow-2xl w-full h-full object-cover"
                    :style="{ height: principlesHeight ? `${principlesHeight}px` : 'auto' }"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'

defineProps({ principles: Array })

const principlesContainer = ref(null)
const principlesHeight = ref(0)

const updatePrinciplesHeight = () => {
    if (principlesContainer.value) {
        principlesHeight.value = principlesContainer.value.offsetHeight
    }
}

onMounted(updatePrinciplesHeight)
onUpdated(updatePrinciplesHeight)
</script>

<style scoped>
/* Ensure the image scales properly within the container */
img {
    object-fit: cover;
    width: 100%;
}
</style>