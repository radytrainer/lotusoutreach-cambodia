<template>
  <section class="py-16 bg-white font-poppins">
    <div class="text-center mb-24">
      <h1 class="text-3xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Success <span class="text-blue-600">Stories </span>
      </h1>
      <p class="text-gray-700 text-lg md:text-ms max-w-1xl mx-auto leading-relaxed">
        Hear from the women whose lives have been
        <span class="font-semibold text-blue-700">transformed</span>
      </p>
    </div>
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div class="relative w-full lg:w-1/2 flex justify-center items-center p-4">
          <div
            class="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-orange-200 flex items-center justify-center overflow-hidden shadow-lg">
            <img :src="currentStory.avatar" :alt="currentStory.name" class="w-full h-full object-cover object-center" />
          </div>
          <div class="absolute bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%+60px)] z-10">
            <div class="relative flex flex-col items-center">
              <!-- Top bar: NAME -->
              <div
                class="bg-blue-400 text-white px-8 py-4 transform -skew-y-6 -rotate-6 shadow-lg text-center w-full max-w-[300px] md:max-w-[400px] z-200">
                <h3 class="font-bold text-4xl uppercase tracking-wide">
                  {{ currentStory.name }}
                </h3>
              </div>

              <!-- Bottom bar: PROGRAM -->
              <div
                class="absolute top-12 left-52 bg-blue-500 text-white px-4 py-2 transform -skew-y-6 -rotate-6 shadow-lg text-center w-full max-w-[250px] md:max-w-[350px] z-100">
                <p class="text-sm font-medium">{{ currentStory.program }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12">
          <div class="mb-6 mt-8">
            <span class="text-blue-400 text-6xl font-extrabold leading-none block mb-4">“</span>
            <p class="text-gray-700 text-lg md:text-xl leading-relaxed">
              {{ currentStory.quote.paragraph1 }}
              <span class="text-blue-600 font-semibold">{{
                currentStory.quote.highlight1
              }}</span>.
            </p>
            <router-link :to="{ name: 'StoryDetail', params: { id: currentStoryIndex } }"
              class="mt-4 inline-block text-blue-600 hover:underline">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentStoryIndex = ref(0);
const stories = ref([
  {
    name: 'Sat Marany',
    program: 'PHYSICS GRADUATE, ROYAL UNIVERSITY OF PHNOM PENH',
    avatar: '/image/News/02.jpg',
    quote: {
      paragraph1:
        'Sat Marany, a 22-year-old from Banteay Meanchey Province, overcame significant challenges, including her parents working abroad since Grade 7. A recipient of the CATALYST Scholarship, she graduated with distinction from the Royal University of Phnom Penh in 2024, earning a Physics degree with a ',
      highlight1: 'perfect GPA of 4.00 in her final year',
      paragraph2:
        'Currently, Marany works part-time at ISF International School and offers private tutoring, earning approximately $600 per month. She also volunteers at her university\'s Optoelectronics & Advanced Materials Laboratory and participated in the Asian Network School and Workshop on Complex Condensed Matter Systems 2024 in Thailand, broadening her scientific knowledge and network.',
      paragraph3:
        'Deeply committed to education and community service, Marany mentors younger students, supports her younger brother\'s education, and contributes to her family\'s living expenses. Her long-term goal is to reunite her family in Cambodia and pursue a master’s degree in physics abroad.',
      paragraph4:
        'She extends heartfelt gratitude to the donors for enabling underprivileged Cambodian girls to access higher education and transform their lives, and special thanks to Lotus Outreach Cambodia staff, especially Ms. Raksmey and Ms. Pisey, for their unwavering support and guidance, empowering her and many others to ',
      highlight2: 'persevere and thrive',
    },
  },
]);

const currentStory = computed(() => stories.value[currentStoryIndex.value]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>