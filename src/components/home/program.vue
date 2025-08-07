<template>
  <div class="min-h-screen bg-white">
    <section id="programs" class="mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <div
            class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Programs
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Four Pillars of
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >Empowerment</span
            >
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to transform lives and build
            stronger communities in Cambodia
          </p>
        </div>
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="mb-20 sm:mb-24 md:mb-32 px-4 sm:px-6 lg:px-8"
        >
          <!-- Image-based Section -->
          <div
            v-if="program.image && (index === 0 || index === 2)"
            class="bg-white rounded-3xl shadow-md overflow-hidden"
            data-aos="fade-up"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div :class="{ 'order-2': index === 2 }" class="relative">
                <div class="relative h-60 sm:h-80 md:h-96 lg:h-full">
                  <img
                    :src="program.image"
                    :alt="`Image for ${program.section}`"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    class="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full animate-pulse"
                  ></div>
                  <div
                    class="absolute bottom-6 left-6 w-8 h-8 bg-white/10 rounded-full animate-bounce"
                  ></div>
                </div>
              </div>
              <div
                :class="{ 'order-1': index === 2 }"
                class="p-6 md:p-10 lg:p-16"
              >
                <div class="flex items-center mb-6">
                  <div
                    class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                  >
                    <span class="text-blue-600 font-bold text-lg md:text-xl">{{
                      String(index + 1).padStart(2, "0")
                    }}</span>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800">
                      {{ program.section }}
                    </h3>
                    <div
                      class="text-blue-600 font-semibold text-sm md:text-base"
                    >
                      {{ program.program }}
                    </div>
                  </div>
                </div>
                <p
                  class="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8"
                >
                  {{ program.description }}
                </p>
                <router-link
                  :to="program.link"
                  class="w-full sm:w-fit group bg-blue-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  :aria-label="`Learn more about the ${program.program}`"
                >
                  {{ program.linkText }}
                  <svg
                    class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
          <!-- Training Section -->
          <div
            v-else-if="program.section === 'Training'"
            class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            data-aos="fade-up"
          >
            <div class="order-2 lg:order-1 p-4 md:p-6">
              <div class="flex items-center mb-6">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-blue-600 font-bold text-lg md:text-xl">{{
                    String(index + 1).padStart(2, "0")
                  }}</span>
                </div>
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-gray-800">
                    {{ program.section }}
                  </h3>
                  <div class="text-blue-600 font-semibold text-sm md:text-base">
                    {{ program.program }}
                  </div>
                </div>
              </div>
              <p
                class="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8"
              >
                {{ program.description }}
              </p>
              <div class="space-y-4 mb-8">
                <div
                  v-for="(skill, skillIndex) in program.skills"
                  :key="skillIndex"
                  class="flex items-center"
                >
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-gray-700 font-medium text-sm md:text-base"
                    >{{ skill }}</span
                  >
                </div>
              </div>
              <router-link
                :to="program.link"
                class="w-full sm:w-fit group bg-blue-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                :aria-label="`Learn more about the ${program.program}`"
              >
                {{ program.linkText }}
                <svg
                  class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </router-link>
            </div>
            <div class="order-1 lg:order-2">
              <div
                class="bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl p-6 sm:p-8 shadow-md"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div
                    v-for="(subSection, subIndex) in program.subSections"
                    :key="subIndex"
                    class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div
                      class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg
                        class="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          :d="subSectionIcons[subIndex]"
                        />
                      </svg>
                    </div>
                    <h5 class="font-bold text-gray-800 mb-2">
                      {{ subSection.title }}
                    </h5>
                    <p class="text-gray-600 text-sm">
                      {{ subSection.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Giving Back Section -->
          <div
            v-else
            class="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-6 md:p-10 lg:p-16"
            data-aos="fade-up"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="relative">
                <img
                  :src="program.image"
                  :alt="`Image for ${program.section}`"
                  class="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div>
                <div class="flex items-center mb-6">
                  <div
                    class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                  >
                    <span class="text-blue-600 font-bold text-lg md:text-xl">{{
                      String(index + 1).padStart(2, "0")
                    }}</span>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800">
                      {{ program.section }}
                    </h3>
                    <div
                      class="text-blue-600 font-semibold text-sm md:text-base"
                    >
                      {{ program.program }}
                    </div>
                  </div>
                </div>
                <p
                  class="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8"
                >
                  {{ program.description }}
                </p>
                <div class="space-y-6">
                  <div
                    v-for="(activity, actIndex) in program.activities"
                    :key="actIndex"
                    class="flex items-start"
                  >
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-bold text-gray-800 mb-1">
                        {{ activity.title }}
                      </h5>
                      <p class="text-gray-600 text-sm">
                        {{ activity.description }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link
                    :to="program.link"
                    class="w-full sm:w-fit group bg-blue-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    :aria-label="`Learn more about the ${program.program}`"
                  >
                    {{ program.linkText }}
                    <svg
                      class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </router-link>
                </div>
              </div>
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
