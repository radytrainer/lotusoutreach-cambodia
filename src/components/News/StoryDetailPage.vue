<template>
  <section class="py-8 md:py-16 bg-white font-poppins">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Back Button -->
      <router-link
        :to="{ name: 'News' }"
        class="inline-flex items-center text-blue-600 hover:underline font-medium text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        Back to News & Stories
      </router-link>

      <!-- Hero Section -->
      <div class="relative mb-8 md:mb-12 rounded-lg overflow-hidden shadow-lg">
        <img
          :src="currentStory.avatar"
          :alt="currentStory.name + ' graduating'"
          class="w-full h-64 md:h-96 object-cover object-center"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end"
        >
          <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-2">
            {{ currentStory.name }}
          </h1>
          <p class="text-lg md:text-xl text-blue-200">{{ currentStory.program }}</p>
        </div>
      </div>

      <!-- Full Story Section -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Her Journey</h2>
        <div class="space-y-8">
          <div
            v-for="(item, index) in currentStory.fullStory"
            :key="index"
            class="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 v-if="item.title" class="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 text-base md:text-lg leading-relaxed">{{ item.content }}</p>
          </div>
        </div>
      </div>

      <!-- Image Gallery Section -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Moments from Her Life</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(image, index) in currentStory.images"
            :key="index"
            class="rounded-lg overflow-hidden shadow-md"
          >
            <img
              :src="image"
              :alt="`Image of ${currentStory.name} ${index + 1}`"
              class="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const stories = [
  {
    name: 'SAT MARANY',
    program: 'PHYSICS GRADUATE, ROYAL UNIVERSITY OF PHNOM PENH',
    avatar: '/image/News/01.jpg',
    images: [
      '/image/News/07.jpg',
      '/image/News/03.jpg',
      '/image/News/04.jpg',
      '/image/News/05.jpg',
      '/image/News/06.jpg',
      '/image/News/08.jpg',
    ],
    fullStory: [
      {
        title: 'Early Life and Challenges',
        content:
          'Sat Marany, a 22-year-old from Banteay Meanchey Province, has shown remarkable resilience and determination throughout her academic journey. Since Grade 7, her parents have worked in Thailand, leaving her and her brother in the care of their grandparents.',
      },
      {
        title: 'Academic Achievements and Scholarship',
        content:
          'Marany became a recipient of the CATALYST Scholarship from Lotus Outreach Cambodia during her first year at university and remained in the program until graduation. In 2024, she graduated with distinction from the Royal University of Phnom Penh, earning a degree in Physics with a perfect GPA of 4.00 in her final year.',
      },
      {
        title: 'Current Employment and Volunteering',
        content:
          'Today, Marany works part-time at ISF International School and also offers private tutoring, earning approximately $600 per month. Despite her full schedule, she continues to volunteer at the Optoelectronics & Advanced Materials Laboratory at her university, demonstrating her passion for lifelong learning.',
      },
      {
        title: 'International Workshop Participation',
        content:
          'Her academic interests led her to participate in the Asian Network School and Workshop on Complex Condensed Matter Systems 2024, held in Thailand from November 10–16, where she broadened her scientific knowledge and professional network.',
      },
      {
        title: 'Commitment to Education and Community',
        content:
          'Marany is deeply committed to education and community service. She regularly volunteers in activities that link science with social impact and serves as a mentor to younger students, sharing her life experiences to inspire and guide them. She is also deeply involved in her younger brother’s education, providing both financial and academic support. In addition, she contributes to her parents’ and grandparents’ living expenses.',
      },
      {
        title: 'Future Aspirations',
        content:
          'Marany’s long-term goal is to reunite her family in Cambodia. Motivated by this dream, she continues to focus on her personal development and is actively seeking scholarship opportunities to pursue a master’s degree in physics or a related science field abroad.',
      },
      {
        title: 'Gratitude and Acknowledgments',
        content:
          'She extends her heartfelt gratitude to the donors who have made it possible for underprivileged Cambodian girls to access higher education and transform their lives. She also gives special thanks to the dedicated staff of Lotus Outreach Cambodia, especially Ms. Raksmey and Ms. Pisey, for their unwavering support and guidance—both academically and personally. Their encouragement and belief in the students\' potential have empowered Marany and many others to persevere and thrive, despite life\'s many challenges.',
      },
    ],
  },
  {
    name: 'SALL KANNIKA',
    program: 'COMPUTER SCIENCE STUDENT, ASIA EURO UNIVERSITY',
    avatar: '/image/News/11.jpg',
    images: ['/image/News/kanitha03.jpg', '/image/News/11.jpg', '/image/News/12.jpg'],
    fullStory: [
      {
        title: 'Introduction to the Hackathon',
        content:
          'My name is Sall Kannika, and I am a first-year Computer Science student at Asia Euro University. I recently had the incredible opportunity to participate in the Design Thinking Hackathon, a youth program funded by Hub Phnom Penh. Out of many applicants, I was proud to be selected as one of 20 finalists from Phnom Penh and Battambang.',
      },
      {
        title: 'Program Overview and Goals',
        content:
          'The program lasted five days, including three days of intensive training and two days of travel between Phnom Penh and Battambang. Everything—from transportation and meals to accommodation—was fully sponsored for participants traveling from Phnom Penh. The Design Thinking Hackathon aimed to equip young people with essential life skills, leadership abilities, and real-world problem-solving experience.',
      },
      {
        title: 'Day 1: Self-Discovery',
        content:
          'Day 1 focused on self-discovery. We used tools like mind mapping to explore the differences between a growth mindset and a fixed mindset. We also engaged in deep self-reflection, learning to identify our personal values, strengths, and weaknesses.',
      },
      {
        title: 'Day 2: Community Problem-Solving',
        content:
          'Day 2 centered on community problem-solving. We explored local issues, formed teams, identified root causes, and applied Design Thinking techniques to craft innovative solutions.',
      },
      {
        title: 'Day 3: Building and Presenting Solutions',
        content:
          'Day 3 was dedicated to building and presenting our solutions. Each team pitched their ideas, and the top four teams, including mine, received seed funding and mentoring support to bring their projects to life. My team’s project, A+ Forum, was well-received, winning $500 in seed funding and a certificate of achievement.',
      },
      {
        title: 'Project Implementation',
        content:
          'The winning four teams, each with four members, are currently implementing their projects over a two-month period with mentor support, gaining real-life experience in project planning, teamwork, and social impact. Even teams that did not win were encouraged to pursue their ideas, reinforcing that every effort counts toward community change.',
      },
      {
        title: 'Life-Changing Experience and Skill Development',
        content:
          'Participating in this program was a life-changing experience. I built meaningful friendships and networks with 40 inspiring youths and mentors from Battambang and Phnom Penh, applied Design Thinking to tackle real community problems, and strengthened my leadership, teamwork, and problem-solving skills.',
      },
      {
        title: 'Personal Growth and Reaffirmation',
        content:
          'I developed greater self-awareness by exploring my values, strengths, weaknesses, and aspirations, and gained a deeper understanding of local challenges through community-based learning. This journey has reaffirmed my passion for learning, community development, and innovation.',
      },
      {
        title: 'My Project: A+ Forum',
        content:
          'I presented my project, A+ Forum, during the final pitch competition. The idea was well-received, and our team was selected as one of the winners. We are now in the process of turning this vision into reality with the support of our mentors and the $500 implementation grant.',
      },
    ],
  },
  {
    name: 'KIMHENG',
    program: 'AGRONOMY, ROYAL UNIVERSITY OF AGRICULTURE',
    avatar: '/image/News/kimheng07.jpg',
    images: [
      '/image/News/kimheng02.jpg',
      '/image/News/kimheng03.jpg',
      '/image/News/kimheng04.jpg',
      '/image/News/kimheng05.jpg',
      '/image/News/kimheng06.jpg',
      '/image/News/kimheng08.jpg',
    ],
    fullStory: [
      {
        title: 'Introduction',
        content:
          '“Problems are afraid of me now—not the other way around.” At 29, Kimheng stands as a powerful example of what access to education can make possible, especially for young women from poor, rural communities. Born in Takeo Province, Cambodia, Kimheng grew up as the youngest of eight children in a struggling household. After her father passed away seven years ago, Kimheng became the primary caregiver for her ailing mother—an unexpected but deeply gendered responsibility in a family where six of her siblings, all men, moved into their wives’ homes after marriage. She stayed behind, quietly holding her family together.',
      },
      {
        title: 'Joining the CATALYST Program',
        content:
          'Kimheng’s path began to change in 2016 when she was selected as part of the first Lotus Outreach Cambodia\'s CATALYST Program, supported by Buddhist Global Relief (BGR). With this opportunity, she pursued a Bachelor’s degree in Agronomy at the Royal University of Agriculture, eventually specializing in Laboratory Management. She graduated in 2020—an achievement that marked a personal triumph and one that would ripple through her family and community.',
      },
      {
        title: 'Breaking Gender Barriers in Science',
        content:
          'In a field traditionally dominated by men, Kimheng now manages a laboratory of 30 staff, overseeing operations, documentation, research, and translation—at a monthly salary of $650, a significant income in rural Cambodia. Her position as a lab manager is groundbreaking, as such roles are typically held by men. Kimheng rose to the challenge thanks to her education, multilingual abilities (including fluency in Chinese), and mentoring support. Her entry into management was sparked by a relationship with a Chinese project director during her university years, who recognized her talent and dedication and encouraged her to take on the leadership role after COVID lockdowns. Initially, her authority was questioned due to her age and gender, but Kimheng stood firm, implemented policy-based leadership, and earned the respect of her team. “I just followed the policy and had to be a little authoritarian at first,” she says. “Now I can manage people, inspire them, and give clear direction. I feel incredibly confident.”',
      },
      {
        title: 'Education as a Tool for Family Upliftment',
        content:
          'Kimheng’s accomplishments have had a transformational effect on her entire family. After graduating, she used her income to: pay $10,000 for her mother’s urgent eye surgery, build a $15,000 house for her mother—her lifelong dream, support her brother’s education in public administration, and cover medical treatment costs for another sibling in Thailand. These achievements represent generational shifts for her family.',
      },
      {
        title: 'A Catalyst for Leadership',
        content:
          'Kimheng’s leadership roots trace back to her time with the CATALYST Program, where she was trained in team leadership and communication. This foundation helped her believe in herself when offered the manager role, enabling her to lead with confidence and inspire her team.',
      },
      {
        title: 'Future Aspirations',
        content:
          'Kimheng’s long-term dream is to pursue a Master’s in seed breeding and tissue culture, possibly in China or Taiwan, where she has already attended a program and discovered a passion for academic translation and agricultural exchange. However, financing this dream remains a challenge. “Support for a Master’s is just $1,500 a year—it’s not enough,” she says. Yet, Kimheng remains undeterred, driven by her hunger to learn and deepen her technical skills in agricultural biotechnology, specifically tissue culture and propagation, within a university setting. She aims to be a bridge between Cambodia and the wider world, translating research and facilitating international collaboration in agriculture.',
      },
      {
        title: 'Overcoming Gender Realities',
        content:
          'Kimheng’s journey is shaped by deep gendered dynamics: being left behind to care for her mother, facing resistance as a young female leader, and entering a scientific field where women are underrepresented. Her story is one of resistance and triumph. “I’ve learned that education gives you choices. I’m no longer dependent. I don’t fear problems—because now, they fear me.”',
      },
      {
        title: 'A Message of Gratitude',
        content:
          'Kimheng expresses deep gratitude to Lotus Outreach and Buddhist Global Relief: “Thank you, Lotus Outreach and BGR. Your support gave me confidence and freedom. You didn’t just educate me—you empowered me to transform my life and support my whole family.” Her story reminds us that when girls are educated, families rise, communities transform, and stereotypes are shattered.',
      },
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
