<template>
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
            <div class="relative mr-0 md:mr-8 mb-16 md:mb-0">
                <div
                    class="w-100 sm:w-80 md:w-[450px] aspect-square rounded-full border-[6px] sm:border-[10px] md:border-[12px] border-blue-500 overflow-hidden mx-auto">
                    <img src="/image/About/History.jpg" alt="History"
                        class="w-full h-full object-cover object-center" />
                </div>
                <div class="absolute -top-4 -left-3 bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center">
                    <p class="text-2xl font-bold">{{ yearsOfExperience }}</p>
                    <p class="text-sm">Years of</p>
                    <p class="text-sm">Experience</p>
                </div>
                <div class="absolute -bottom-10 -left-2 bg-blue-700 text-white p-4 rounded-lg shadow-lg w-64 text-sm">
                    <p>
                        We continue to provide education scholarships, skills training,
                        counseling, and safe environments for vulnerable women and
                        children in Cambodian communities.
                    </p>
                </div>
            </div>
            <div class="flex-1 text-left">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">History</h1>
                <h2 class="text-2xl font-semibold text-gray-600 mb-6">| Donate For Girls Around The World!</h2>
                <p v-for="(paragraph, index) in content" :key="index" class="text-gray-700 mb-4" v-html="paragraph" />
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    yearsOfExperience: Number,
    content: Array
})
</script>
