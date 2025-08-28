<template>
  <div class="min-h-screen bg-white">
    <section id="programs" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Four Pillars of
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Empowerment</span>
          </h2>
          <p class="text-lg md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Lotus Outreach Cambodia, we empower girls and young women from disadvantaged backgrounds to reach their
            full potential through four integrated programs: Education, Training, Care, and Giving Back.
          </p>
        </div>

        <!-- Education Section -->
        <div id="education-section" class="mt-24">
          <div v-if="programs.filter(p => p.section === 'Education').length">
            <div v-for="(program, index) in programs.filter(p => p.section === 'Education')"
              :key="`education-${index}`">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <!-- Content -->
                <div class="p-8 md:p-10 lg:p-16">
                  <div class="flex items-center mb-6">
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <span class="text-blue-600 font-bold text-lg md:text-xl">01</span>
                    </div>
                    <div>
                      <h3 class="text-2xl md:text-3xl font-bold text-gray-800">{{ program.section }}</h3>
                      <div class="text-blue-600 font-semibold text-sm md:text-base">{{ program.program }}</div>
                    </div>
                  </div>
                  <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-4 w-[500px]">{{ program.description }}</p>
                  <div class="space-y-4 mb-5">
                    <div v-for="(skill, skillIndex) in program.skills" :key="skillIndex" class="flex items-center">
                      <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span class="text-gray-700 font-medium text-sm md:text-[15px]">{{ skill.title }}</span>
                        <div class="text-gray-500 text-xs md:text-sm">{{ skill.description }}</div>
                      </div>
                    </div>
                  </div>
                  <router-link :to="{ name: 'education' }"
                    class="relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                    aria-label="Learn more about Education">
                    <span class="relative z-10 flex items-center">
                      Learn More About Education
                      <svg
                        class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </router-link>
                </div>
                <!-- Image -->
                <div>
                  <img src="/image/Program/train1.jpg" alt="A person training with a mentor"
                    class="w-full h-auto object-cover rounded-2xl" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-gray-600 py-8">
            No Education programs available at this time.
          </div>
        </div>

        <!-- Care Section -->
        <div id="care-section" class="mt-24">
          <div v-if="programs.filter(p => p.section === 'Care Program').length">
            <div v-for="(program, index) in programs.filter(p => p.section === 'Care Program')" :key="`care-${index}`">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <img :src="program.image" :alt="`Image for ${program.program}`"
                    class="w-full h-auto object-cover rounded-2xl" loading="lazy" />
                </div>
                <div>
                  <div class="flex items-center mb-6">
                    <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-blue-600 font-bold text-lg md:text-xl">02</span>
                    </div>
                    <div>
                      <h3 class="text-2xl md:text-3xl font-bold text-gray-800">{{ program.section }}</h3>
                      <div class="text-blue-600 font-semibold text-sm md:text-base">{{ program.program }}</div>
                    </div>
                  </div>
                  <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-6">{{ program.description }}</p>
                  <div class="space-y-6">
                    <div v-for="(activity, actIndex) in program.activities" :key="actIndex" class="flex items-start">
                      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h5 class="font-bold text-gray-800 mb-1">{{ activity.title }}</h5>
                        <p class="text-gray-600 text-sm">{{ activity.description }}</p>
                      </div>
                    </div>
                  </div>
                  <router-link :to="{ name: 'care' }"
                    class="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 hover:scale-105 transition-all duration-300 mt-6"
                    :aria-label="`Learn more about ${program.program}`">
                    {{ program.linkText }}
                    <svg class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-gray-600 py-8">
            No Care programs available at this time.
          </div>
        </div>

        <!-- Training Section -->
        <div id="training-section" class="mt-24">
          <div v-if="programs.filter(p => p.section === 'Training').length">
            <div v-for="(program, index) in programs.filter(p => p.section === 'Training')" :key="`training-${index}`"
              class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-24">
              <div class="order-2 lg:order-1 p-4 md:p-6">
                <div class="flex items-center mb-6">
                  <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-blue-600 font-bold text-lg md:text-xl">03</span>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800">{{ program.section }}</h3>
                    <div class="text-blue-600 font-semibold text-sm md:text-base">{{ program.program }}</div>
                  </div>
                </div>
                <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">{{ program.description }}</p>
                <div class="space-y-4 mb-8">
                  <div v-for="(skill, skillIndex) in program.skills" :key="skillIndex" class="flex items-center">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium text-sm md:text-base">{{ skill }}</span>
                  </div>
                </div>
                <router-link :to="{ name: 'training' }"
                  class="inline-flex items-center px-4 py-3 md:px-6 md:py-4 bg-blue-600 text-white rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  :aria-label="`Learn more about the ${program.program}`">
                  {{ program.linkText }}
                  <svg class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </router-link>
              </div>
              <div class="order-1 lg:order-2">
                <div class="bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl p-6 sm:p-8 shadow-md">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div v-for="(subSection, subIndex) in program.subSections" :key="subIndex"
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="subSectionIcons[subIndex]" />
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">{{ subSection.title }}</h5>
                      <p class="text-gray-600 text-sm">{{ subSection.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-gray-600 py-8">
            No Training programs available at this time.
          </div>
        </div>

        <!-- Giving Back Section -->
        <div id="giving-section" class="mt-24">
          <div v-if="programs.filter(p => p.section === 'Giving Back').length">
            <div v-for="(program, index) in programs.filter(p => p.section === 'Giving Back')" :key="`giving-${index}`"
              class="mt-24">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <img :src="program.image" :alt="`Image for ${program.program}`"
                    class="w-full h-auto object-cover rounded-2xl" loading="lazy" />
                </div>
                <div>
                  <div class="flex items-center mb-6">
                    <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span class="text-blue-600 font-bold text-lg md:text-xl">04</span>
                    </div>
                    <div>
                      <h3 class="text-2xl md:text-3xl font-bold text-gray-800">{{ program.section }}</h3>
                      <div class="text-blue-600 font-semibold text-sm md:text-base">{{ program.program }}</div>
                    </div>
                  </div>
                  <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-6">{{ program.description }}</p>
                  <div class="space-y-6">
                    <div v-for="(activity, actIndex) in program.activities" :key="actIndex" class="flex items-start">
                      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h5 class="font-bold text-gray-800 mb-1">{{ activity.title }}</h5>
                        <p class="text-gray-600 text-sm">{{ activity.description }}</p>
                      </div>
                    </div>
                  </div>
                  <router-link :to="{ name: 'givingBack' }"
                    class="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full font-semibold text-sm md:text-base hover:bg-blue-700 hover:scale-105 transition-all duration-300 mt-6"
                    :aria-label="`Learn more about ${program.program}`">
                    {{ program.linkText }}
                    <svg class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-gray-600 py-8">
            No Giving Back programs available at this time.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  programs: { type: Array, required: true },
  subSectionIcons: { type: Array, required: true },
});
</script>