<template>
  <div v-if="program" class="min-h-screen">
    <!-- Hero Section -->
    <div
      class="relative h-[60vh] sm:h-[80vh] md:h-screen bg-cover md:object-contain bg-no-repeat text-white"
      :style="{ backgroundImage: `url(${program.image})` }"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      <!-- Header Content -->
      <div
        class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10 h-full flex flex-col justify-end pb-4 sm:pb-6 md:pb-16 lg:pb-20"
      >
        <!-- Back Button -->
        <button
          @click="goBack"
          class="group flex items-center gap-2 bg-white/20 px-3 py-1.5 sm:px-5 sm:py-3 rounded-full text-white border border-white/30 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 shadow-lg backdrop-blur-sm mb-4 sm:mb-6 md:mb-8 w-fit"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          <span class="font-semibold tracking-wide text-xs sm:text-sm md:text-base">
            Back to MyGirl
          </span>
        </button>

        <!-- Program Title & Summary -->
        <div class="flex items-center">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-blue-200/20 flex items-center justify-center mr-3 sm:mr-4 md:mr-6"
          >
            <i class="fas fa-seedling text-lg sm:text-xl md:text-2xl text-green-500"></i>
          </div>
          <div>
            <h1
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-semibold mb-1 sm:mb-2"
            >
              {{ program.title }}
            </h1>
            <p
              class="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl"
            >
              {{ program.summary }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div
      v-for="(section, index) in program.contents"
      :key="index"
      class="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-7xl mx-auto"
    >
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {{ section.title }}
          </h2>

          <!-- First Content Block -->
          <div class="flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
            <div class="w-full md:w-1/2">
              <img
                :src="program.childImg1"
                :alt="section.title"
                class="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div class="w-full md:w-1/2 h-full flex items-center">
              <p class="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {{ firstParagraph(section.content) }}
              </p>
            </div>
          </div>

          <!-- Second Content Block (Reversed) -->
          <div class="flex flex-col md:flex-row-reverse gap-4 sm:gap-6 items-center">
            <div class="w-full md:w-1/2">
              <img
                :src="program.childImg2"
                :alt="section.title"
                class="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div class="w-full md:w-1/2 h-full flex items-center">
              <p
                class="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line"
              >
                {{ remainingParagraph(section.content) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

// Router setup
const route = useRoute();
const router = useRouter();

// Navigation
const goBack = () => router.push("/");

// Helper functions
const splitParagraphs = (content) =>
  content.split("\n").filter((p) => p.trim() !== "");

const firstParagraph = (content) => {
  const paragraphs = splitParagraphs(content);
  return paragraphs.slice(0, Math.ceil(paragraphs.length / 2)).join("\n");
};

const remainingParagraph = (content) => {
  const paragraphs = splitParagraphs(content);
  return paragraphs.slice(Math.ceil(paragraphs.length / 2)).join("\n");
};

// Program data
const programs = [
  {
    id: 1,
    title: "Educations",
    childImg1: "/public/image/Home/childE01.png",
    childImg2: "/public/image/Home/childE02.png",
    image: "/public/image/Home/Program_card01.png",
    summary: `Lotus Outreach Cambodia supports girls in rural areas by providing scholarships, school supplies, uniforms, and nutritious meals. These efforts help remove financial barriers so girls can continue their education and build brighter futures.`,
    contents: [
      {
        title: "Education in Cambodia",
        content: `Lotus Outreach Cambodia is committed to empowering girls in rural and underserved communities by removing the key financial and social obstacles that prevent them from accessing quality education. Through its comprehensive support programs, the organization provides full scholarships, including tuition coverage, school supplies, uniforms, transportation support, and nutritious daily meals.
    Beyond basic educational access, Lotus Outreach ensures that families who might otherwise rely on their daughters for household income or labor receive monthly rice stipends, reducing economic pressure and encouraging long-term school attendance. The organization also offers bicycles to girls living far from school, ensuring safe and consistent access to education.
    By addressing both economic hardship and gender-based barriers, Lotus Outreach Cambodia helps girls not only stay in school, but also thrive academically, develop leadership skills, and build a foundation for a brighter, more independent future. These integrated efforts have transformed the lives of hundreds of young Cambodian women, empowering them to break the cycle of poverty for themselves and their communities.`,
      },
    ],
  },
  {
    id: 2,
    title: "Cares",
    childImg1: "/public/image/Home/care01.png",
    childImg2: "/public/image/Home/care02.png",
    image: "/public/image/Home/Program_card02.png",
    summary: `We bring essential healthcare services to remote communities, including mobile clinics and health education. Clean water projects improve health and reduce waterborne diseases, helping families live healthier lives.`,
    contents: [
      {
        title: "Healthcare Access",
        content: `Lotus Outreach Cambodia is deeply committed to improving the health and well-being of underserved populations in rural and remote communities. Recognizing that limited access to healthcare services significantly affects quality of life, we implement a multi-pronged approach to ensure that vulnerable families receive the care and support they need.
    Our mobile health clinics regularly travel to isolated villages, providing free medical check-ups, vaccinations, maternal care, and treatment for common illnesses. These clinics serve as a lifeline for families who would otherwise have to travel long distances and incur high costs to receive even basic care.
    We also prioritize health education, empowering communities with essential knowledge on hygiene, nutrition, reproductive health, disease prevention, and proper sanitation practices. These community workshops are especially impactful for women and children, equipping them to make informed decisions that lead to healthier lifestyles.`,
      },
    ],
  },
  {
    id: 3,
    title: "Training",
    childImg1: "/public/image/Home/training01.png",
    childImg2: "/public/image/Home/training02.png",
    image: "/public/image/Home/Program_card03.png",
    summary: `Our anti-trafficking programs focus on community education, economic empowerment, and support for survivors. We work with local partners to provide skills training and safe opportunities that reduce vulnerability to trafficking.`,
    contents: [
      {
        title: "Training",
        content: `Lotus Outreach Cambodia is dedicated to protecting vulnerable populations—especially women and children—from the dangers of human trafficking. Our Anti-Trafficking Protection programs take a comprehensive, community-centered approach that addresses both the causes and consequences of exploitation.
    We begin by focusing on community education and awareness, working directly with at-risk communities to raise understanding of trafficking risks, common tactics used by traffickers, and the importance of safe migration. Through workshops, school outreach, and informational campaigns, we help families make informed decisions and recognize early warning signs.
    To combat the economic pressures that often lead to exploitation, we provide economic empowerment programs such as vocational training, job placement assistance, and income-generating opportunities. These programs enable women and girls—who are especially vulnerable—to become financially independent, reducing their susceptibility to false promises of work or migration.
    For survivors of trafficking, we offer comprehensive reintegration support, including trauma counseling, legal assistance, safe shelter, and continued education or vocational training. By working with trusted local partners, we ensure that survivors receive the care they need to rebuild their lives with dignity and stability.
    Ultimately, our Anti-Trafficking Protection efforts aim not only to rescue and rehabilitate victims, but also to prevent trafficking before it occurs. Through empowerment, education, and sustainable development, we help create safer communities where every individual has the right and opportunity to live free from exploitation.`,
      },
    ],
  },
  {
    id: 4,
    title: "Givin Back",
    childImg1: "/public/image/Home/giving01.png",
    childImg2: "/public/image/Home/giving02.png",
    image: "/public/image/Home/Program_card04.png",
    summary: `We partner with communities to build vital infrastructure like clean water wells and support sustainable agriculture. Our programs create jobs and improve livelihoods, helping families thrive in rural Cambodia.`,
    contents: [
      {
        title: "Givin Back",
        content: `One of our primary efforts is ensuring access to clean and safe water. We help communities construct clean water wells, install water filtration systems, and build sanitation facilities. These projects not only reduce the incidence of waterborne diseases but also free up time—especially for women and girls—who would otherwise spend hours collecting water from distant or unsafe sources.
    We also invest in sustainable agriculture training, providing families with tools, seeds, and techniques that increase crop yields while preserving the environment. By promoting organic farming, composting, and water-efficient irrigation, we empower farmers to secure reliable food sources and improve household income.
    In addition to agriculture, we facilitate livelihood development opportunities through vocational training, small business support, and access to microfinance. These programs help rural families diversify their incomes, reduce poverty, and build financial resilience.
    By working directly with community leaders, we ensure our development initiatives are locally driven, culturally respectful, and sustainable. Our goal is to create thriving rural communities where families have the resources and skills to flourish—now and for generations to come.`,
      },
    ],
  },
];

// Get current program
const programId = parseInt(route.params.id);
const program = ref(programs.find((p) => p.id === programId));
</script>
