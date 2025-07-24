<template>
  <div>
    <div v-if="!selectedProgram">
      <SlideshowBase :slides="slides" align="center" />
      <programEdu :education-programs="educationPrograms" @show-detail="handleShowDetail" />
      <programCare :community-programs="communityPrograms" @show-detail="handleShowDetail" />
      <programTraining :training-programs="trainingPrograms" @show-detail="handleShowDetail" />
      <programGiving :giving-programs="givingPrograms" @show-detail="handleShowDetail" />
    </div>
    <programDetail v-if="selectedProgram" :selected-program="selectedProgram" @go-back="handleGoBack" />
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import axios from 'axios';
import SlideshowBase from '@/components/SlideshowBase.vue';
import programEdu from '@/components/Program/ProgramEdu.vue';
import programCare from '@/components/Program/ProgramCare.vue';
import programTraining from '@/components/Program/ProgramTraining.vue';
import programGiving from '@/components/Program/ProgramGiving.vue';
import programDetail from '@/components/Program/ProgramDetail.vue';

// Define slides data
const slides = ref([
  {
    src: '/image/Program/Education.png',
    alt: 'Girls riding bicycles in rural Cambodia',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Education</span> Power',
    description: 'Empowering girls through education and care programs',
  },
  {
    src: '/image/Program/Three-girl.jpg',
    alt: 'Young women in an education program',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Learning</span> Pathways',
    description: 'Building pathways to education for young women',
  },
  {
    src: '/image/Program/Leader.jpg',
    alt: 'Leadership training session in Cambodia',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Leadership</span> Growth',
    description: 'Leadership training and mentorship for young women',
  },
  {
    src: '/image/Program/Future.jpg',
    alt: 'Future female leaders in Cambodia',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Future</span> Leaders',
    description: 'Inspiring the next generation of female leaders',
  },
]);

// Fetch education programs data
const educationPrograms = ref([]);
const communityPrograms = ref([]);
const trainingPrograms = ref([]); 
const givingPrograms = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/data.json');
    educationPrograms.value = response.data.educationPrograms;
    communityPrograms.value = response.data.communityPrograms;
    trainingPrograms.value = response.data.trainingPrograms;
    givingPrograms.value = response.data.givingPrograms;
  } catch (error) {
    console.error('Error loading programs:', error);
  }
});

const selectedProgram = ref(null);

// Handle showing program details with scroll to top
const handleShowDetail = (program) => {
  selectedProgram.value = program;
  window.scrollTo(0, 0);
};


// Handle going back to program list
const handleGoBack = () => {
  selectedProgram.value = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>