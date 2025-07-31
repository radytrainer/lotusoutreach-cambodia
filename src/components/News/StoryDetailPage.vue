<template>
  <section class="py-8 md:py-16 bg-white font-poppins">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Hero Section -->
      <div class="relative mb-8 md:mb-12 rounded-lg overflow-hidden shadow-lg">
        <img :src="currentStory.avatar" alt="Sat Marany graduating"
          class="w-full h-64 md:h-96 object-cover object-button" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
          <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-2">{{ currentStory.name }}</h1>
          <p class="text-lg md:text-xl text-blue-200">{{ currentStory.program }}</p>
        </div>
      </div>
      <!-- Full Story Section -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Her Journey</h2>
        <div class="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p v-for="(paragraph, index) in currentStory.fullStory" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <!-- Image Gallery Section -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Moments from Her Life</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(image, index) in currentStory.images" :key="index" class="rounded-lg overflow-hidden shadow-md">
            <img :src="image" :alt="`Image of Sat Marany ${index + 1}`"
              class="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <!-- Updated Back Button to navigate to NewsStory -->
      <router-link :to="{ name: 'News' }"
        class="inline-flex items-center text-blue-600 hover:underline font-medium text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
        Back to News & Stories
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

// Define props for selecting a story by ID
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

// Array of stories, including Sat Marany and Sall Kannika
const stories = [
  // Story 1: Sat Marany
  {
    name: 'SAT MARANY',
    program: 'PHYSICS GRADUATE, ROYAL UNIVERSITY OF PHNOM PENH',
    avatar: '/image/News/01.jpg',
    images: [
      '/image/News/07.jpg',
      '/image/News/03.jpg',
      '/image/News/04.jpg',
      '/image/News/05.jpg',
      '/image/News/06.jpg ',
      '/image/News/08.jpg',
    ],
    quote: {
      paragraph1: 'Sat Marany, a 22-year-old from Banteay Meanchey Province, overcame significant challenges, including her parents working abroad since Grade 7. A recipient of the CATALYST Scholarship, she graduated with distinction from the Royal University of Phnom Penh in 2024, earning a Physics degree with a ',
      highlight1: 'perfect GPA of 4.00 in her final year',
      paragraph2: 'Currently, Marany works part-time at ISF International School and offers private tutoring, earning approximately $600 per month. She also volunteers at her university\'s Optoelectronics & Advanced Materials Laboratory and participated in the Asian Network School and Workshop on Complex Condensed Matter Systems 2024 in Thailand, broadening her scientific knowledge and network.',
      paragraph3: 'Deeply committed to education and community service, Marany mentors younger students, supports her younger brother\'s education, and contributes to her family\'s living expenses. Her long-term goal is to reunite her family in Cambodia and pursue a master’s degree in physics abroad.',
      paragraph4: 'She extends heartfelt gratitude to the donors for enabling underprivileged Cambodian girls to access higher education and transform their lives, and special thanks to Lotus Outreach Cambodia staff, especially Ms. Raksmey and Ms. Pisey, for their unwavering support and guidance, empowering her and many others to ',
      highlight2: 'persevere and thrive',
    },
    fullStory: [
      'Sat Marany, a 22-year-old from Banteay Meanchey Province, has shown remarkable resilience and determination throughout her academic journey. Since Grade 7, her parents have worked in Thailand, leaving her and her brother in the care of their grandparents.',
      'Marany became a recipient of the CATALYST Scholarship from Lotus Outreach Cambodia during her first year at university and remained in the program until graduation. In 2024, she graduated with distinction from the Royal University of Phnom Penh, earning a degree in Physics with a perfect GPA of 4.00 in her final year.',
      'Today, Marany works part-time at ISF International School and also offers private tutoring, earning approximately $600 per month. Despite her full schedule, she continues to volunteer at the Optoelectronics & Advanced Materials Laboratory at her university, demonstrating her passion for lifelong learning.',
      'Her academic interests led her to participate in the Asian Network School and Workshop on Complex Condensed Matter Systems 2024, held in Thailand from November 10–16, where she broadened her scientific knowledge and professional network.',
      'Marany is deeply committed to education and community service. She regularly volunteers in activities that link science with social impact and serves as a mentor to younger students, sharing her life experiences to inspire and guide them. She is also deeply involved in her younger brother’s education, providing both financial and academic support. In addition, she contributes to her parents’ and grandparents’ living expenses.',
      'Marany’s long-term goal is to reunite her family in Cambodia. Motivated by this dream, she continues to focus on her personal development and is actively seeking scholarship opportunities to pursue a master’s degree in physics or a related science field abroad.',
      'She extends her heartfelt gratitude to the donors who have made it possible for underprivileged Cambodian girls to access higher education and transform their lives. She also gives special thanks to the dedicated staff of Lotus Outreach Cambodia, especially Ms. Raksmey and Ms. Pisey, for their unwavering support and guidance—both academically and personally. Their encouragement and belief in the students\' potential have empowered Marany and many others to persevere and thrive, despite life\'s many challenges.',
    ],
  },
  // Story 2: Sall Kannika
  {
    name: 'SALL KANNIKA',
    program: 'COMPUTER SCIENCE STUDENT, ASIA EURO UNIVERSITY',
    avatar: '/image/News/09.jpg', 
    images: [ 
      '/image/News/10.jpg',
      '/image/News/11.jpg',
      '/image/News/12.jpg',
    ],
    quote: {
      paragraph1: 'Sall Kannika, a first-year Computer Science student at Asia Euro University, was one of 20 finalists in the Design Thinking Hackathon funded by Hub Phnom Penh. The program equipped her with ',
      highlight1: 'essential life skills and leadership abilities',
      paragraph2: 'Over five days, she engaged in hands-on training, from self-discovery to community problem-solving, culminating in her A+ Forum project winning ',
      highlight2: '$500 in seed funding',
      paragraph3: 'Kannika built networks with 40 youths and mentors, strengthened her teamwork and problem-solving skills, and is now implementing her project to drive community change.',
    },
    fullStory: [
      'My name is Sall Kannika, and I am a first-year Computer Science student at Asia Euro University. I recently had the incredible opportunity to participate in the Design Thinking Hackathon, a youth program funded by Hub Phnom Penh. Out of many applicants, I was proud to be selected as one of 20 finalists from Phnom Penh and Battambang.',
      'The program lasted five days, including three days of intensive training and two days of travel between Phnom Penh and Battambang. Everything—from transportation and meals to accommodation—was fully sponsored for participants traveling from Phnom Penh. The Hackathon aimed to equip young people with essential life skills, leadership abilities, and real-world problem-solving experience.',
      'On Day 1, we focused on self-discovery, using tools like mind mapping to explore the differences between a growth mindset and a fixed mindset. We also engaged in deep self-reflection, learning to identify our personal values, strengths, and weaknesses.',
      'Day 2 centered on community problem-solving. We explored local issues, formed teams, identified root causes, and applied Design Thinking techniques to craft innovative solutions. This hands-on approach helped us better understand our communities and how to drive positive change.',
      'On Day 3, we dedicated our time to building and presenting our solutions. Each team pitched their ideas, and the top four teams, including mine, received seed funding and mentoring support to bring their projects to life. My team’s project, A+ Forum, was well-received, winning $500 in seed funding and a certificate of achievement.',
      'The winning four teams, each with four members, are currently implementing their projects over a two-month period with mentor support, gaining real-life experience in project planning, teamwork, and social impact. Even teams that did not win were encouraged to pursue their ideas, reinforcing that every effort counts toward community change.',
      'Participating in this program was a life-changing experience. I built meaningful friendships and networks with 40 inspiring youths and mentors from Battambang and Phnom Penh, applied Design Thinking to tackle real community problems, and strengthened my leadership, teamwork, and problem-solving skills.',
      'I also developed greater self-awareness by exploring my values, strengths, weaknesses, and aspirations, and gained a deeper understanding of local challenges through community-based learning. This journey has reaffirmed my passion for learning, community development, and innovation.',
      'I am now in the process of turning my A+ Forum project into reality with the support of our mentors and the $500 implementation grant. I’m excited to apply what I’ve learned to continue making a positive difference in my community.',
    ],
  },
];


const currentStory = computed(() => stories[props.id]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>