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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SlideshowBase from '@/components/SlideshowBase.vue';
import programEdu from '@/components/Program/ProgramEdu.vue';
import programCare from '@/components/Program/ProgramCare.vue';
import programTraining from '@/components/Program/ProgramTraining.vue';
import programGiving from '@/components/Program/ProgramGiving.vue';
import programDetail from '@/components/Program/ProgramDetail.vue';

const educationPrograms = ref([]);
const communityPrograms = ref([]);
const trainingPrograms = ref([]);
const givingPrograms = ref([]);
const slides = ref([]);
const selectedProgram = ref(null);


onMounted(async () => {
  try {
    const response = await axios.get('/backend/program.json');
    educationPrograms.value = response.data.educationPrograms;
    communityPrograms.value = response.data.communityPrograms;
    trainingPrograms.value = response.data.trainingPrograms;
    givingPrograms.value = response.data.givingPrograms;
    slides.value = response.data.slides;
  } catch (error) {
    console.error('Error loading programs:', error);
  }
});


const handleShowDetail = (program) => {
  selectedProgram.value = program;
  window.scrollTo(0, 0);
};

const handleGoBack = () => {
  selectedProgram.value = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

