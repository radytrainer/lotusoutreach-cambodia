<template>
  <div class="min-h-screen bg-gray-50">
    <section id="programs" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            News
          </h2>
          <p class="md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive programs designed to transform lives and build
            stronger communities in Cambodia.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(program, index) in programs"
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition w-full max-w-sm mx-auto hover:-translate-y-2 w-full mx-auto flex flex-col"
          >
            <!-- Image -->
            <div class="relative">
              <img
                :src="program.image"
                :alt="`Image for ${program.section}`"
                class="w-full h-80 sm:h-72 md:h-80 object-cover"
                loading="lazy"
              />
              <span
                class="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
              >
                News
              </span>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                {{ program.name }}
              </h3>
              <p class="text-sm text-gray-600 mb-6 line-clamp-3 flex-1">
                {{ program.description }}
              </p>
              <button
                class="self-start bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
              >
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
