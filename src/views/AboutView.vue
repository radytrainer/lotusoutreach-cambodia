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
          <p v-for="(paragraph, index) in historyContent" :key="index" class="text-gray-700 mb-4" v-html="paragraph" />
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
          <img src="/image/About/value.jpg" alt="Girls with bicycles supported by Lotus Outreach"
            class="rounded-2xl shadow-2xl w-[105%] h-auto max-h-[550px] object-cover mx-auto" />
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="bg-gray-50 py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl text-blue-700 md:text-6xl font-extrabold text-center mb-20">
          Our Inspired Team
        </h2>
        <div class="flex flex-wrap justify-center gap-12 max-w-8xl mx-auto">
          <div v-for="(member, index) in teamMembers" :key="index" @click="toggleFlip(index)"
            class="relative group cursor-pointer transition-all duration-500 hover:-translate-y-2 perspective">
            <div class="w-72 h-80 relative">
              <div class="w-full h-full transition-transform duration-700 transform-style preserve-3d"
                :class="{ 'rotate-y-180': flippedStates[index] }">
                <!-- Front Side -->
                <div
                  class="absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start backface-hidden">
                  <div class="relative w-52 h-52 mb-4">
                    <div class="absolute inset-0 rounded-full bg-beige-100"></div>
                    <img :src="member.image" :alt="member.name"
                      class="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-md" />
                  </div>
                  <div class="absolute bottom-20 left-0 right-0 z-20">
                    <div class="relative">
                      <div
                        class="bg-blue-400 text-white px-1 py-1 transform -skew-y-12 shadow-lg text-center w-60 mx-auto">
                        <h3 class="font-bold text-lg uppercase">{{ member.name }}</h3>
                      </div>
                      <div
                        class="bg-blue-500 text-white px-0 py-1 transform -skew-y-12 shadow-lg text-center w-60 ml-auto -mt-3">
                        <p class="text-sm font-medium">{{ member.position }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Back Side -->
                <div
                  class="absolute inset-0 bg-white text-blue-800 rounded-xl shadow-lg p-6 backface-hidden rotate-y-180 flex flex-col justify-center items-center text-center">
                  <h3 class="text-xl font-bold mb-2">{{ member.name }}</h3>
                  <p class="text-sm font-semibold mb-2">{{ member.position }}</p>
                  <p class="text-sm px-2">
                    {{ member.details || 'More info about this team member goes here.' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Logos Section -->
    <section class="bg-white py-16" id="partners">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 class="text-3xl sm:text-4xl font-bold text-blue-700 mb-10 flex items-center">
          Our Value Partners
        </h2>

        <div class="relative overflow-hidden">
          <div class="flex whitespace-nowrap animate-marquee"
            :style="{ '--marquee-width': marqueeWidth, '--marquee-duration': marqueeDuration + 's' }"
            @mouseenter="pauseMarquee" @mouseleave="resumeMarquee">
            <div v-for="(partner, index) in partnerLogos" :key="index"
              class="inline-flex flex-col items-center justify-center bg-gray-50 rounded-xl shadow hover:shadow-md transition duration-300 cursor-pointer mr-6 flex-shrink-0"
              style="min-width: 160px; height: 128px">
              <a :href="partner.url" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-center w-full h-full" :title="partner.info">
                <img :src="partner.img" :alt="`Logo of ${partner.info}`" :aria-label="partner.info"
                  class="max-h-20 object-contain px-4" />
              </a>
              <p class="mt-2 text-center text-sm text-gray-600">
                {{ partner.info }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SlideshowBase from '@/components/SlideshowBase.vue'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import AOS from "aos"
import "aos/dist/aos.css"

const slides = [
  { src: 'image/About/About_heading03.jpg', alt: 'About page' },
  { src: 'image/About/About_heading02.jpg', alt: 'About page' },
  { src: 'image/About/About_heading.jpg', alt: 'About page' }
]

const sharedContent = {
  title: "See Our <span class='text-pink-400'>About</span>",
  description: 'Learn about our solutions in education, training, and care that empower vulnerable communities.',
  buttons: [{ text: 'Learn more', link: '/program', primary: true }]
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

const teamMembers = [
  {
    name: "Glenn Fawcett",
    position: "Executive Director",
    image: "https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9668-1024x768.jpg",
  },
  {
    name: "Raksmey Var",
    position: "Country Representative, Cambodia",
    image: "https://lotusoutreachaustralia.org.au/wp-content/uploads/2015/07/Raksmey-for-web-site-.jpg",
  },
  {
    name: "Pisey Chea",
    position: "LOCAM Project Officer",
    image: "https://lotusoutreachaustralia.org.au/wp-content/uploads/2018/06/Untitled-design-2.jpg",
  },
  {
    name: "Borika",
    position: "Accountant, Cambodia",
    image: "https://lotusoutreach.org/wp-content/uploads/2022/08/borika.jpeg",
  },
]


const originalPartnerLogos = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_2n4ixhk90E0WEDNpghs_skGLtJZuMNCGfqyiBtnwoKRjd8DRZxCgLlmGYCwm9fuGAg&usqp=CAU",
    url: "https://www.passerellesnumeriques.org/what-we-do/cambodia/",
    info: "Passerelles Numériques",
  },
  {
    img: "http://cwcc.org.kh/wp-content/uploads/2024/07/cropped-logo-4.png",
    url: "http://cwcc.org.kh/",
    info: "CWCC",
  },
  {
    img: "https://bettercarenetwork.org/sites/default/files/styles/max_325x325/public/2022-07/cocd_cambodia_logo.jpeg?itok=M_TusQPl",
    url: "https://cocd-cambodia.org/",
    info: "COCD Cambodia",
  },
  {
    img: "https://kapekh.org/files/Logos/004_Small.png",
    url: "https://www.kapekh.org/",
    info: "KAPE Cambodia",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-PHDrMqX-Qnh5xX45XjwvCk6Z_96G_Y2bw&s",
    url: "https://www.khemaracambodia.org/",
    info: "Khemara Cambodia",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkp_i6a7QoF16LhEl4pyBL1-TVeMvnXSjHpA&s",
    url: "https://www.ccc-cambodia.org/en/ngodb/ngo-information/914",
    info: "Santi Sena Organization",
  }
];

const partnerLogos = ref([...originalPartnerLogos, ...originalPartnerLogos, ...originalPartnerLogos, ...originalPartnerLogos])

const marqueeWidth = ref("0px")
const marqueeDuration = ref(30)

const calculateMarqueeWidth = () => {
  const singleLogoItemWidth = 160 + 24
  marqueeWidth.value = `${partnerLogos.value.length * singleLogoItemWidth}px`
}

const pauseMarquee = (event) => {
  if (event.currentTarget instanceof HTMLElement) {
    event.currentTarget.style.animationPlayState = "paused"
  }
}

const resumeMarquee = (event) => {
  if (event.currentTarget instanceof HTMLElement) {
    event.currentTarget.style.animationPlayState = "running"
  }
}

const flippedStates = ref([])

const toggleFlip = (index) => {
  flippedStates.value[index] = !flippedStates.value[index]
}

const startYear = 2008
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear

onMounted(() => {
  nextTick(() => {
    calculateMarqueeWidth()
  })
  flippedStates.value = teamMembers.map(() => false)
  AOS.init({ duration: 1000, once: true })
})

onBeforeUnmount(() => {
  // no interval used
})
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.transform-style {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.bg-beige-100 {
  background-color: #f5e8c7;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee linear infinite;
  animation-duration: var(--marquee-duration);
  width: var(--marquee-width);
  display: flex;
}

@media (max-width: 768px) {
  .flex-wrap {
    justify-content: center;
  }

  .w-72 {
    width: 280px;
  }
}

@media (max-width: 640px) {
  .w-72 {
    width: 260px;
  }

  .h-96 {
    height: 340px;
  }

  .w-52 {
    width: 200px;
  }

  .h-52 {
    height: 200px;
  }
}
</style>
