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
      educationPrograms: [
        {
          title: "Lotus Pedals",
          image:
            "https://lotusoutreach.org/wp-content/uploads/2023/02/IMG_7191.jpg",
          icon: "fas fa-bicycle",
          description:
            "Providing durable bicycles to girls in rural Cambodia, enabling them to travel the long distance to school.",
          fullDescription:
            "The Lotus Pedals program addresses one of the most significant barriers to education for girls in rural Cambodia: transportation. Many girls live several kilometers away from their schools, making the daily journey on foot both time-consuming and potentially dangerous. By providing sturdy, reliable bicycles, we enable these young women to attend school regularly, arrive safely, and have more time for their studies and family responsibilities.",
          features: [
            "High-quality, durable bicycles designed for rural terrain",
            "Safety training and helmet provision",
            "Maintenance workshops for recipients",
            "Community engagement to ensure program sustainability",
            "Follow-up support to track educational outcomes",
          ],
          stats: [
            { number: "2,500+", label: "Bicycles Distributed" },
            { number: "85%", label: "School Attendance Increase" },
            { number: "150+", label: "Villages Reached" },
            { number: "95%", label: "Program Satisfaction" },
          ],
          gallery: [
            "https://lotusoutreach.org/wp-content/uploads/2023/02/IMG_7191.jpg",
            "https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9377-1024x768.jpg",
          ],
        },
        {
          title: "GATE",
          image:
            "https://lotusoutreach.org/wp-content/uploads/2020/02/Alumni-Gathering-Group-Photo-2.jpg",
          icon: "fas fa-book-open",
          description:
            "Providing education scholarships and rice support for at-risk girls and their families living in dire poverty.",
          fullDescription:
            "The GATE (Girls Access to Education) program provides comprehensive support to at-risk girls from families living in extreme poverty. Understanding that hunger and financial hardship are major barriers to education, GATE combines educational scholarships with essential rice support for families. This holistic approach ensures that girls can focus on their studies while their families have basic food security.",
          features: [
            "Full educational scholarships covering tuition and supplies",
            "Monthly rice distributions to families",
            "Academic mentoring and tutoring support",
            "Life skills training and counseling",
            "Career guidance and job placement assistance",
          ],
          stats: [
            { number: "1,200+", label: "Girls Supported" },
            { number: "92%", label: "Graduation Rate" },
            { number: "78%", label: "Continue to Higher Education" },
            { number: "300+", label: "Families Supported" },
          ],
        },
        {
          title: "CATALYST",
          image:
            "https://buddhistglobalrelief.org/wp-content/uploads/2023/07/Lotus-CATALYST.jpg",
          icon: "fas fa-user-graduate",
          description:
            "Providing university scholarships, mentoring, and leadership training for at-risk female youth in Cambodia.",
          fullDescription:
            "CATALYST is our flagship leadership development program that transforms promising young women into confident leaders and change-makers in their communities. Through comprehensive university scholarships, intensive mentoring, and specialized leadership training, CATALYST participants develop the skills, knowledge, and networks needed to break cycles of poverty and become advocates for positive change in Cambodia.",
          features: [
            "Full university scholarships including living expenses",
            "One-on-one mentoring with successful professionals",
            "Leadership workshops and public speaking training",
            "Internship opportunities with partner organizations",
            "Alumni network and ongoing career support",
          ],
          stats: [
            { number: "450+", label: "University Graduates" },
            { number: "88%", label: "Employment Rate" },
            { number: "65%", label: "Leadership Positions" },
            { number: "25+", label: "Partner Universities" },
          ],
        },
        {
          title: "PNC/V",
          image:
            "https://www.passerellesnumeriques.org/wp-content/uploads/2024/06/Country-banner1.png",
          icon: "fas fa-laptop-code",
          description:
            "Providing high-quality IT education in a holistic residential environment for at-risk female youth in Cambodia and Vietnam.",
          fullDescription:
            "The Passerelles Numériques Cambodia/Vietnam program offers intensive, industry-relevant IT education to disadvantaged young women in a supportive residential setting. This comprehensive program combines technical training with personal development, preparing graduates for successful careers in the rapidly growing technology sector while fostering personal growth and leadership skills.",
          features: [
            "Comprehensive IT curriculum covering programming, web development, and digital marketing",
            "Residential program providing safe, supportive living environment",
            "Industry partnerships for internships and job placement",
            "English language training and soft skills development",
            "Ongoing alumni support and career advancement opportunities",
          ],
          stats: [
            { number: "800+", label: "IT Graduates" },
            { number: "94%", label: "Job Placement Rate" },
            { number: "$450", label: "Average Starting Salary" },
            { number: "50+", label: "Partner Companies" },
          ],
        },
      ],
      communityPrograms: [
        {
          title: "Getting Well",
          image:
            "https://lotusoutreach.org/wp-content/uploads/2023/02/IMG_2945-1024x768.jpg",
          icon: "fas fa-water",
          description:
            "Constructing water wells to serve entire villages in drought-prone regions of rural Cambodia.",
          fullDescription:
            "The Getting Well program addresses the critical water shortage crisis in rural Cambodia by constructing deep-water wells that provide clean, reliable water access to entire villages. These wells are strategically placed to serve the maximum number of families while considering factors such as water table depth, community needs, and long-term sustainability. Each well project includes community training on maintenance and water management.",
          features: [
            "Deep-water well construction using modern drilling techniques",
            "Solar-powered pumping systems for sustainable operation",
            "Community water management training",
            "Regular maintenance and quality testing programs",
            "Emergency repair services and spare parts provision",
          ],
          stats: [
            { number: "180+", label: "Wells Constructed" },
            { number: "45,000+", label: "People Served" },
            { number: "120+", label: "Villages Reached" },
            { number: "98%", label: "Wells Still Operational" },
          ],
        },
        {
          title: "Water In Schools (WINS)",
          image:
            "https://lotusoutreach.org/wp-content/uploads/2018/12/people_at_public_water_pump.jpg",
          icon: "fas fa-tint",
          description:
            "Installing water filtration systems in schools to provide clean drinking water and improve wellbeing for children in rural Cambodia.",
          fullDescription:
            "The Water In Schools (WINS) program ensures that students have access to clean, safe drinking water throughout their school day. By installing advanced water filtration systems in rural schools, we eliminate waterborne diseases, improve student health and attendance, and create better learning environments. The program also includes hygiene education to maximize health benefits.",
          features: [
            "Advanced multi-stage water filtration systems",
            "Regular filter replacement and system maintenance",
            "Hygiene education programs for students and teachers",
            "Water quality testing and monitoring",
            "Community involvement in system oversight",
          ],
          stats: [
            { number: "85+", label: "Schools Equipped" },
            { number: "12,000+", label: "Students Served" },
            { number: "40%", label: "Reduction in Sick Days" },
            { number: "15%", label: "Attendance Increase" },
          ],
        },
        {
          title: "Rice 4 Education (R4E)",
          image:
            "https://lotusoutreach.org/wp-content/uploads/2019/02/16596368001_a6e8e5f163_o-1024x685.jpg",
          icon: "fas fa-utensils",
          description:
            "Providing rice support to villagers to help them support their daughters' education in rural Cambodia.",
          fullDescription:
            "Rice 4 Education recognizes that food security is fundamental to educational access. Many families in rural Cambodia face the difficult choice between sending their children to work or to school. By providing monthly rice distributions to families who commit to keeping their daughters in school, R4E removes this barrier and ensures that education remains a priority even during times of economic hardship.",
          features: [
            "Monthly rice distributions to participating families",
            "School attendance monitoring and reporting",
            "Family education on nutrition and child development",
            "Community engagement and awareness programs",
            "Graduation ceremonies and recognition events",
          ],
          stats: [
            { number: "2,800+", label: "Families Supported" },
            { number: "3,500+", label: "Girls Kept in School" },
            { number: "420", label: "Tons of Rice Distributed" },
            { number: "89%", label: "School Completion Rate" },
          ],
        },
        {
          title: "CTC",
          image:
            "https://lotusoutreach.org/wp-content/uploads/2018/12/loi-new.png",
          icon: "fas fa-hands-helping",
          description:
            "Providing trauma therapy and assistance to survivors of trafficking and sexual and domestic violence in a women's shelter in rural Cambodia.",
          fullDescription:
            "The Counseling and Training Center (CTC) provides comprehensive support services to women and girls who have survived trafficking, sexual violence, and domestic abuse. Located in a safe, residential facility, CTC offers trauma-informed therapy, life skills training, and reintegration support to help survivors heal and rebuild their lives with dignity and independence.",
          features: [
            "Professional trauma counseling and therapy services",
            "Safe residential accommodation and 24/7 support",
            "Vocational training and job placement assistance",
            "Legal advocacy and court accompaniment",
            "Family mediation and community reintegration support",
          ],
          stats: [
            { number: "450+", label: "Women Supported" },
            { number: "78%", label: "Successful Reintegration" },
            { number: "24/7", label: "Crisis Support Available" },
            { number: "12", label: "Months Average Stay" },
          ],
        },
      ],
      trainingPrograms: [
        {
          title: "Lotus Pedals",
          image: "/image/Program/train1.jpg",
          icon: "fas fa-person-chalkboard",
          description:
            "Providing durable bicycles to girls in ruralbr Cambodia, enabling them to travel the long distance to school.",
          fullDescription:
            "The Lotus Pedals program addresses one of the most significant barriers to education for girls in rural Cambodia: transportation. Many girls live several kilometers away from their schools, making the daily journey on foot both time-consuming and potentially dangerous. By providing sturdy, reliable bicycles, we enable these young women to attend school regularly, arrive safely, and have more time for their studies and family responsibilities.",
          features: [
            "Deep-water well construction using modern drilling techniques",
            "Solar-powered pumping systems for sustainable operation",
            "Community water management training",
            "Regular maintenance and quality testing programs",
            "Emergency repair services and spare parts provision",
          ],
          stats: [
            { number: "180+", label: "Wells Constructed" },
            { number: "45,000+", label: "People Served" },
            { number: "120+", label: "Villages Reached" },
            { number: "98%", label: "Wells Still Operational" },
          ],
        },
      ],
      givingPrograms: [
        {
          title: "Lotus Pedals",
          image: "/image/Program/giving1.jpg",
          icon: "fas fa-hand-holding-heart",
          description:
            "Providing durable bicycles to girls in ruralbr Cambodia, enabling them to travel the long distance to school.",
          fullDescription:
            "The Lotus Pedals program addresses one of the most significant barriers to education for girls in rural Cambodia: transportation. Many girls live several kilometers away from their schools, making the daily journey on foot both time-consuming and potentially dangerous. By providing sturdy, reliable bicycles, we enable these young women to attend school regularly, arrive safely, and have more time for their studies and family responsibilities.",
          features: [
            "Deep-water well construction using modern drilling techniques",
            "Solar-powered pumping systems for sustainable operation",
            "Community water management training",
            "Regular maintenance and quality testing programs",
            "Emergency repair services and spare parts provision",
          ],
          stats: [
            { number: "180+", label: "Wells Constructed" },
            { number: "45,000+", label: "People Served" },
            { number: "120+", label: "Villages Reached" },
            { number: "98%", label: "Wells Still Operational" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.startSlideShow();
  },
  beforeUnmount() {
    this.stopSlideShow();
  },
  methods: {
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
