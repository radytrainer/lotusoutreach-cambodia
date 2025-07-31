<template>
    <section class="pb-20 bg-white" id="mission-vision-values">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <!-- Text Content -->
            <div>
                <h2 class="text-4xl font-extrabold text-blue-700 mb-10">
                    Our Mission, Vision & Values
                </h2>
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
            <!-- Image -->
            <div>
                <img src="/image/About/value.jpg" alt="Girls with bicycles supported by Lotus Outreach"
                    class="rounded-2xl shadow-2xl w-[105%] h-auto max-h-[550px] object-cover mx-auto" />
            </div>
        </div>
    </section>
</template>
<script setup>
defineProps({ principles: Array })
</script>