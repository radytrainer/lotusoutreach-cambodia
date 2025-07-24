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
import { ref, nextTick } from 'vue';
import SlideshowBase from '@/components/SlideshowBase.vue';
import programEdu from '@/components/Program/ProgramEdu.vue';
import programCare from '@/components/Program/ProgramCare.vue';
import programTraining from '@/components/Program/ProgramTraining.vue';
import programGiving from '@/components/Program/ProgramGiving.vue';
import programDetail from '@/components/Program/ProgramDetail.vue';

// Define slides data
const slides = ref([
  {
    src: 'https://lotusoutreach.org/wp-content/uploads/2023/02/IMG_7191.jpg',
    alt: 'Girls riding bicycles in rural Cambodia',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Education</span> Power',
    description: 'Empowering girls through education and care programs',
  },
  {
    src: 'https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9377-1024x768.jpg',
    alt: 'Young women in an education program',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Learning</span> Pathways',
    description: 'Building pathways to education for young women',
  },
  {
    src: 'https://lotusoutreach.org/wp-content/uploads/2023/02/Leader.jpg',
    alt: 'Leadership training session in Cambodia',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Leadership</span> Growth',
    description: 'Leadership training and mentorship for young women',
  },
  {
    src: 'https://lotusoutreach.org/wp-content/uploads/2023/02/Future.jpg',
    alt: 'Future female leaders in Cambodia',
    title: '<h1 class="text-4xl md:text-7xl font-poppins font-extrabold text-pink-500">Lotus Outreach</h1><span class="text-pink-500">Future</span> Leaders',
    description: 'Inspiring the next generation of female leaders',
  },
]);

// Define education programs data
const educationPrograms = ref([
  {
    title: 'Lotus Pedals',
    image: 'https://lotusoutreach.org/wp-content/uploads/2023/02/IMG_7191.jpg',
    icon: 'fas fa-bicycle',
    description:
      'Providing durable bicycles to girls in rural Cambodia, enabling them to travel the long distance to school.',
    alt: 'Girls riding bicycles in rural Cambodia for the Lotus Pedals program',
    fullDescription:
      'The Lotus Pedals program addresses one of the most significant barriers to education for girls in rural Cambodia: transportation. Many girls live several kilometers away from their schools, making the daily journey on foot both time-consuming and potentially dangerous. By providing sturdy, reliable bicycles, we enable these young women to attend school regularly, arrive safely, and have more time for their studies and family responsibilities.',
    features: [
      'High-quality, durable bicycles designed for rural terrain',
      'Safety training and helmet provision',
      'Maintenance workshops for recipients',
      'Community engagement to ensure program sustainability',
      'Follow-up support to track educational outcomes',
    ],
    stats: [
      { number: '2,500+', label: 'Bicycles Distributed' },
      { number: '85%', label: 'School Attendance Increase' },
      { number: '150+', label: 'Villages Reached' },
      { number: '95%', label: 'Program Satisfaction' },
    ],
    gallery: [
      'https://lotusoutreach.org/wp-content/uploads/2023/02/IMG_7191.jpg',
      'https://lotusoutreach.org/wp-content/uploads/2020/02/IMG_9377-1024x768.jpg',
    ],
  },
  {
    title: 'GATE',
    image: 'https://lotusoutreach.org/wp-content/uploads/2020/02/Alumni-Gathering-Group-Photo-2.jpg',
    icon: 'fas fa-book-open',
    description:
      'Providing education scholarships and rice support for at-risk girls and their families living in dire poverty.',
    alt: 'Group of girls in the GATE scholarship program in Cambodia',
    fullDescription:
      'The GATE (Girls Access to Education) program provides comprehensive support to at-risk girls from families living in extreme poverty. Understanding that hunger and financial hardship are major barriers to education, GATE combines educational scholarships with essential rice support for families. This holistic approach ensures that girls can focus on their studies while their families have basic food security.',
    features: [
      'Full educational scholarships covering tuition and supplies',
      'Monthly rice distributions to families',
      'Academic mentoring and tutoring support',
      'Life skills training and counseling',
      'Career guidance and job placement assistance',
    ],
    stats: [
      { number: '1,200+', label: 'Girls Supported' },
      { number: '92%', label: 'Graduation Rate' },
      { number: '78%', label: 'Continue to Higher Education' },
      { number: '300+', label: 'Families Supported' },
    ],
  },
  {
    title: 'CATALYST',
    image: 'https://lotusoutreach.org/wp-content/uploads/2023/07/Lotus-CATALYST.jpg', // Updated to Lotus Outreach domain
    icon: 'fas fa-user-graduate',
    description:
      'Providing university scholarships, mentoring, and leadership training for at-risk female youth in Cambodia.',
    alt: 'Young women participating in the CATALYST leadership program',
    fullDescription:
      'CATALYST is our flagship leadership development program that transforms promising young women into confident leaders and change-makers in their communities. Through comprehensive university scholarships, intensive mentoring, and specialized leadership training, CATALYST participants develop the skills, knowledge, and networks needed to break cycles of poverty and become advocates for positive change in Cambodia.',
    features: [
      'Full university scholarships including living expenses',
      'One-on-one mentoring with successful professionals',
      'Leadership workshops and public speaking training',
      'Internship opportunities with partner organizations',
      'Alumni network and ongoing career support',
    ],
    stats: [
      { number: '450+', label: 'University Graduates' },
      { number: '88%', label: 'Employment Rate' },
      { number: '65%', label: 'Leadership Positions' },
      { number: '25+', label: 'Partner Universities' },
    ],
  },
  {
    title: 'PNC/V',
    image: 'https://lotusoutreach.org/wp-content/uploads/2024/06/PNCV-banner.jpg', // Updated to Lotus Outreach domain
    icon: 'fas fa-laptop-code',
    description:
      'Providing high-quality IT education in a holistic residential environment for at-risk female youth in Cambodia and Vietnam.',
    alt: 'Students learning IT skills in the PNC/V program',
    fullDescription:
      'The Passerelles Numériques Cambodia/Vietnam program offers intensive, industry-relevant IT education to disadvantaged young women in a supportive residential setting. This comprehensive program combines technical training with personal development, preparing graduates for successful careers in the rapidly growing technology sector while fostering personal growth and leadership skills.',
    features: [
      'Comprehensive IT curriculum covering programming, web development, and digital marketing',
      'Residential program providing safe, supportive living environment',
      'Industry partnerships for internships and job placement',
      'English language training and soft skills development',
      'Ongoing alumni support and career advancement opportunities',
    ],
    stats: [
      { number: '800+', label: 'IT Graduates' },
      { number: '94%', label: 'Job Placement Rate' },
      { number: '$450', label: 'Average Starting Salary' },
      { number: '50+', label: 'Partner Companies' },
    ],
  },
]);

const communityPrograms = ref([
  {
    title: 'Getting Well',
    image: 'https://lotusoutreach.org/wp-content/uploads/2023/02/IMG_2945-1024x768.jpg',
    icon: 'fas fa-water',
    description:
      'Constructing water wells to serve entire villages in drought-prone regions of rural Cambodia.',
    fullDescription:
      'The Getting Well program addresses the critical water shortage crisis in rural Cambodia by constructing deep-water wells that provide clean, reliable water access to entire villages. These wells are strategically placed to serve the maximum number of families while considering factors such as water table depth, community needs, and long-term sustainability. Each well project includes community training on maintenance and water management.',
    features: [
      'Deep-water well construction using modern drilling techniques',
      'Solar-powered pumping systems for sustainable operation',
      'Community water management training',
      'Regular maintenance and quality testing programs',
      'Emergency repair services and spare parts provision',
    ],
    stats: [
      { number: '180+', label: 'Wells Constructed' },
      { number: '45,000+', label: 'People Served' },
      { number: '120+', label: 'Villages Reached' },
      { number: '98%', label: 'Wells Still Operational' },
    ],
  },
  {
    title: 'Water In Schools (WINS)',
    image: 'https://lotusoutreach.org/wp-content/uploads/2018/12/people_at_public_water_pump.jpg',
    icon: 'fas fa-tint',
    description:
      'Installing water filtration systems in schools to provide clean drinking water and improve wellbeing for children in rural Cambodia.',
    fullDescription:
      'The Water In Schools (WINS) program ensures that students have access to clean, safe drinking water throughout their school day. By installing advanced water filtration systems in rural schools, we eliminate waterborne diseases, improve student health and attendance, and create better learning environments. The program also includes hygiene education to maximize health benefits.',
    features: [
      'Advanced multi-stage water filtration systems',
      'Regular filter replacement and system maintenance',
      'Hygiene education programs for students and teachers',
      'Water quality testing and monitoring',
      'Community involvement in system oversight',
    ],
    stats: [
      { number: '85+', label: 'Schools Equipped' },
      { number: '12,000+', label: 'Students Served' },
      { number: '40%', label: 'Reduction in Sick Days' },
      { number: '15%', label: 'Attendance Increase' },
    ],
  },
  {
    title: 'Rice 4 Education (R4E)',
    image: 'https://lotusoutreach.org/wp-content/uploads/2019/02/16596368001_a6e8e5f163_o-1024x685.jpg',
    icon: 'fas fa-utensils',
    description:
      'Providing rice support to villagers to help them support their daughters’ education in rural Cambodia.',
    fullDescription:
      'Rice 4 Education recognizes that food security is fundamental to educational access. Many families in rural Cambodia face the difficult choice between sending their children to work or to school. By providing monthly rice distributions to families who commit to keeping their daughters in school, R4E removes this barrier and ensures that education remains a priority even during times of economic hardship.',
    features: [
      'Monthly rice distributions to participating families',
      'School attendance monitoring and reporting',
      'Family education on nutrition and child development',
      'Community engagement and awareness programs',
      'Graduation ceremonies and recognition events',
    ],
    stats: [
      { number: '2,800+', label: 'Families Supported' },
      { number: '3,500+', label: 'Girls Kept in School' },
      { number: '420', label: 'Tons of Rice Distributed' },
      { number: '89%', label: 'School Completion Rate' },
    ],
  },
  {
    title: 'CTC',
    image: 'https://lotusoutreach.org/wp-content/uploads/2018/12/loi-new.png',
    icon: 'fas fa-hands-helping',
    description:
      'Providing trauma therapy and assistance to survivors of trafficking and sexual and domestic violence in a women’s shelter in rural Cambodia.',
    fullDescription:
      'The Counseling and Training Center (CTC) provides comprehensive support services to women and girls who have survived trafficking, sexual violence, and domestic abuse. Located in a safe, residential facility, CTC offers trauma-informed therapy, life skills training, and reintegration support to help survivors heal and rebuild their lives with dignity and independence.',
    features: [
      'Professional trauma counseling and therapy services',
      'Safe residential accommodation and 24/7 support',
      'Vocational training and job placement assistance',
      'Legal advocacy and court accompaniment',
      'Family mediation and community reintegration support',
    ],
    stats: [  
      { number: '450+', label: 'Women Supported' },
      { number: '78%', label: 'Successful Reintegration' },
      { number: '24/7', label: 'Crisis Support Available' },
      { number: '12', label: 'Months Average Stay' },
    ],
  },
]);

const trainingPrograms = ref([
  {
    title: 'Leadership Training',
    image: 'https://lotusoutreach.org/wp-content/uploads/2023/02/Leader.jpg',
    icon: 'fas fa-person-chalkboard',
    description:
      'Providing leadership and professional skills training for young women in rural Cambodia.',
    fullDescription:
      'The Leadership Training program equips young women with essential skills to become leaders in their communities. Through workshops, mentorship, and hands-on projects, participants develop confidence, public speaking, and organizational skills to advocate for change and pursue professional opportunities.',
    features: [
      'Workshops on leadership and communication skills',
      'Mentorship from experienced professionals',
      'Community project development and execution',
      'Networking opportunities with local leaders',
      'Ongoing support for career advancement',
    ],
    stats: [
      { number: '500+', label: 'Women Trained' },
      { number: '70%', label: 'Engaged in Community Projects' },
      { number: '60+', label: 'Workshops Conducted' },
      { number: '85%', label: 'Participant Satisfaction' },
    ],
  },
]);

const givingPrograms = ref([
  {
    title: 'Community Sponsorship',
    image: 'https://lotusoutreach.org/wp-content/uploads/2023/02/Future.jpg',
    icon: 'fas fa-hand-holding-heart',
    description:
      'Encouraging community-driven support for education and development initiatives in rural Cambodia.',
    fullDescription:
      'The Community Sponsorship program fosters local involvement in supporting education and development projects. By mobilizing community donations and volunteer efforts, this program ensures sustainable support for initiatives like scholarships, school supplies, and community infrastructure.',
    features: [
      'Community fundraising campaigns',
      'Volunteer training and coordination',
      'Transparent allocation of funds to projects',
      'Recognition events for donors and volunteers',
      'Regular impact reports to sponsors',
    ],
    stats: [
      { number: '1,000+', label: 'Community Donors' },
      { number: '200+', label: 'Volunteers Engaged' },
      { number: '$50,000+', label: 'Funds Raised' },
      { number: '90%', label: 'Funds Allocated to Projects' },
    ],
  },
]);

const selectedProgram = ref(null);

// Handle showing program details with scroll to top
const handleShowDetail = (program) => {
  selectedProgram.value = program;
  nextTick(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
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