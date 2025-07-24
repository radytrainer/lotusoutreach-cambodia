<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
    <div v-if="currentView === 'home'">
      <ProgramEdu
        :education-programs="educationPrograms"
        @show-detail="showProgramDetail"
      />
      <ProgramCare
        :community-programs="communityPrograms"
        @show-detail="showProgramDetail"
      />
      <ProgramTraining
        :training-programs="trainingPrograms"
        @show-detail="showProgramDetail"
      />
        <ProgramGiving
            :giving-programs="givingPrograms"
            @show-detail="showProgramDetail"/>
    </div>
    <ProgramDetail
      v-else-if="currentView === 'detail'"
      :selected-program="selectedProgram"
      @go-back="goBack"
    />
  </div>
</template>

<script>
import axios from "axios";
import ProgramDetail from "./ProgramDetail.vue";
import ProgramEdu from "./ProgramEdu.vue";
import ProgramCare from "./ProgramCare.vue";
import ProgramTraining from "./ProgramTraining.vue";
import ProgramGiving from "./ProgramGiving.vue";

export default {
  name: "MainPage",
  components: {
    ProgramEdu,
    ProgramCare,
    ProgramDetail,
    ProgramTraining,
    ProgramGiving,
  },
  data() {
    return {
      currentView: "home",
      selectedProgram: null,
      educationPrograms: [],
      communityPrograms: [],
      trainingPrograms: [],
      givingPrograms: [],
      currentSlide: 0,
      slideInterval: null,
      slides: [
        {
          image:
            "https://lotusoutreachaustralia.org.au/wp-content/uploads/2015/07/Row-of-girls-watching-grad-ceremony-768x417.png",
          alt: "Cambodia program 1",
          titlePart1: "Education",
          titlePart2: "Power",
          description: "Empowering girls through education and care programs",
        },
        {
          image:
            "https://lotusoutreachaustralia.org.au/wp-content/uploads/2025/02/three-girls-banner-.jpg",
          alt: "Cambodia program 2",
          titlePart1: "Learning",
          titlePart2: "Pathways",
          description: "Building pathways to education for young women",
        },
        {
          image:
            "https://lotusoutreach.org/wp-content/uploads/2023/02/2LO-3-1.jpg",
          alt: "Cambodia program 3",
          titlePart1: "Leadership",
          titlePart2: "Growth",
          description: "Leadership training and mentorship for young women",
        },
        {
          image:
            "https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9377-1024x768.jpg",
          alt: "Cambodia program 4",
          titlePart1: "Future",
          titlePart2: "Leaders",
          description: "Inspiring the next generation of female leaders",
        },
      ],
      impactStats: [
        { number: "15,000+", label: "Lives Impacted", icon: "fas fa-heart" },
        {
          number: "250+",
          label: "Villages Reached",
          icon: "fas fa-map-marker-alt",
        },
        { number: "95%", label: "Success Rate", icon: "fas fa-chart-line" },
        {
          number: "12",
          label: "Years of Service",
          icon: "fas fa-calendar-alt",
        },
      ],
    };
  },
  mounted() {
    this.fetchProgramData();
    this.startSlideShow();
  },
  beforeUnmount() {
    this.stopSlideShow();
  },
  methods: {
    fetchProgramData() {
      axios
        .get("/data.json")
        .then((response) => {
          this.educationPrograms = response.data.educationPrograms || [];
          this.communityPrograms = response.data.communityPrograms || [];
          this.trainingPrograms = response.data.trainingPrograms || [];
          this.givingPrograms = response.data.givingPrograms || [];
        })
        .catch((error) => {
          console.error("Failed to load program data:", error);
        });
    },
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 6000);
    },
    stopSlideShow() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.stopSlideShow();
      this.startSlideShow();
    },
    showProgramDetail(program, type) {
      this.selectedProgram = program;
      this.currentView = "detail";
      this.stopSlideShow();
      window.scrollTo(0, 0);
    },
    goBack() {
      this.currentView = "home";
      this.selectedProgram = null;
      this.startSlideShow();
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

html {
  scroll-behavior: smooth;
}

.font-sans {
  font-family: "Poppins", sans-serif;
}

.min-h-screen {
  background: linear-gradient(to bottom, #f3f4f6, #ffffff);
}
</style>