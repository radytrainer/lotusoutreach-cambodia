<template>
  <div class="min-h-screen bg-white">
    <section id="programs" class="mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2
            class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            News

          </h2>
          <p class="md:text-xl text:lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to transform lives and build
            stronger communities in Cambodia
          </p>
        </div>
        <div v-for="(program, index) in programs" :key="index" class="mb-6 px-4 sm:px-6 lg:px-8">
          <div v-if="program.image"
            class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition w-full max-w-sm">

            <!-- Image -->
            <div class="relative">
              <img :src="program.image" :alt="`Image for ${program.section}`" class="w-full h-80 sm:h-72 md:h-80 object-cover"
                loading="lazy" />
              <!-- Badge -->
              <span class="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                News
              </span>
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3 class="text-lg font-bold text-gray-900 mb-2 truncate">
                {{ program.name }}
              </h3>
              <p class="text-sm text-gray-500 mb-4 line-clamp-3">
                {{ program.description }}
              </p>
              <button class="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded transition">
                Read More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  programs: {
    type: Array,
    required: true,
  },
  subSectionIcons: {
    type: Array,
    required: true,
  },
});
</script>
