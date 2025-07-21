<template>
  <div class="min-h-screen bg-white">
    <!-- Slideshow -->
    <SlideshowBase :slides="slides" :content="sharedContent" align="center" />

    <!-- History Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div class="relative mr-0 md:mr-8 mb-12 md:mb-0">
          <div class="w-[450px] aspect-square rounded-full border-[12px] border-blue-500 overflow-hidden mx-auto">
            <img src="/image/About/History.jpg" alt="Lotus Outreach profile image"
              class="w-full h-full object-cover object-center" />
          </div>
          <div class="absolute -top-4 -left-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center">
            <p class="text-2xl font-bold">{{ yearsOfExperience }}</p>
            <p class="text-sm">Years of</p>
            <p class="text-sm">Experience</p>
          </div>
          <div class="absolute -bottom-12 -left-4 bg-blue-700 text-white p-4 rounded-lg shadow-lg w-64 text-sm">
            <p>
              We continue to provide education scholarships, skills training,
              counseling, and safe environments for vulnerable women and
              children in Cambodian communities.
            </p>
          </div>
        </div>
        <div class="flex-1 text-left">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">History</h1>
          <h2 class="text-2xl font-semibold text-gray-600 mb-6">
            | Donate For Girls Around The World!
          </h2>
          <p v-for="(paragraph, index) in historyContent" :key="index" class="text-gray-700 mb-4" v-html="paragraph">
          </p>
        </div>
      </div>
    </section>

    <!-- Mission, Vision & Values Section -->
    <section class="py-20 bg-white" id="mission-vision-values">
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
          <img src="/public/image/About/value.jpg" alt="Girls with bicycles supported by Lotus Outreach"
            class="rounded-2xl shadow-2xl w-[105%] h-auto max-h-[550px] object-cover mx-auto" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SlideshowBase from '@/components/SlideshowBase.vue'

const slides = [
  { src: 'image/About/About_heading03.jpg', alt: 'About page' },
  { src: 'image/About/About_heading02.jpg', alt: 'About page' },
  { src: 'image/About/About_heading.jpg', alt: 'About page' }
]

const sharedContent = {
  title: "See Our <span class='text-pink-400'>About</span>",
  description:
    'Learn about our solutions in education, training, and care that empower vulnerable communities.',
  buttons: [
    { text: 'Learn more', link: '/program', primary: true }
  ]
}

const historyContent = [
  'Lotus Outreach Cambodia was established as part of the global Lotus Outreach mission to serve vulnerable communities. Since the early 2000s, it has worked in Cambodia to provide access to education, protect girls from trafficking, and offer scholarships, skills training, and community support programs.',
  'Through core programs like GATE and CATALYST, Lotus Outreach Cambodia has empowered hundreds of girls from rural and low-income families to complete high school and pursue higher education or vocational training.',
  '<strong class="text-blue-600">Best Addition:</strong> Today, Lotus Outreach Cambodia empowers women and girls through education, skills training, and community programs—breaking the cycle of poverty and creating lasting change.'
]

const principles = [
  {
    icon: 'fas fa-bullseye',
    title: 'Our Mission',
    text: 'To empower vulnerable women and children in Cambodia through education, training, and care helping them break the cycle of poverty and live with dignity, opportunity, and hope.'
  },
  {
    icon: 'fas fa-eye',
    title: 'Our Vision',
    text: 'A world where every girl and child, no matter their background, has access to quality education, protection, and the tools to shape their own future.'
  },
  {
    icon: 'fas fa-gem',
    title: 'Our Values',
    text: 'We believe in dignity, equity, and opportunity for all. With compassion, integrity, and resilience, we uplift the vulnerable and build brighter futures one life at a time.'
  }
]


const startYear = 2008
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear
</script>
