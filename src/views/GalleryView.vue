<template>
  <!-- Hero Banner -->
  <section class="relative h-[70vh] md:h-[100vh] bg-gray-100 overflow-hidden">
    <!-- Background Image with Gradient -->
    <div class="absolute inset-0">
      <img src="/public/image/Galleries/heading.jpg" alt="Lotus Outreach activities"
        class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/40"></div>
    </div>

    <!-- Text Content -->
    <div class="relative z-10 flex items-center justify-center h-full px-4 md:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto text-center">
       <h1 class="text-4xl sm:text-2xl md:text-2xl lg:text-6xl font-bold leading-tight mb-2 text-white">
          Our Gallery of <span class="text-pink-500">Activities</span>
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-3xl mx-auto mt-2 font-beginner">
          In rural Cambodia, education changes lives. Each photo captures the spirit of Lotus Outreach Cambodia’s
          mission empowering girls and strengthening communities through knowledge, opportunity, and hope.
        </p>

      </div>

    </div>
  </section>
  <div class="min-h-screen bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Gallery Sections -->
      <div v-for="(section, sectionIndex) in galleryData" :key="sectionIndex" class="mb-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 border-b-4 border-gray-200 pb-4">
          {{ section.title }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(image, imageIndex) in section.images" :key="imageIndex"
            class="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer border border-gray-200"
            @click="openLightbox(sectionIndex, imageIndex)">
            <img :src="image.src" :alt="image.alt"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p class="text-lg font-semibold truncate">{{ image.pathTitle || image.alt }}</p>
              <p v-if="image.description" class="text-sm text-gray-300 mt-1 line-clamp-2">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="showLightbox" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      @click.self="closeLightbox">
      <button class="absolute top-4 right-4 text-white text-4xl font-light z-50 hover:text-gray-300 transition-colors"
        @click="closeLightbox" aria-label="Close Lightbox">
        &times;
      </button>

      <button class="absolute left-4 text-white text-5xl z-50 hover:text-gray-300 transition-colors" @click="prevImage"
        aria-label="Previous Image">
        &lsaquo;
      </button>

      <img :src="currentImage.src" :alt="currentImage.alt"
        class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />

      <button class="absolute right-4 text-white text-5xl z-50 hover:text-gray-300 transition-colors" @click="nextImage"
        aria-label="Next Image">
        &rsaquo;
      </button>

      <div
        class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-md max-w-md">
        <p class="text-lg font-semibold">{{ currentImage.pathTitle || currentImage.alt }}</p>
        <p v-if="currentImage.description" class="text-sm text-gray-300">{{ currentImage.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryPage',
  data() {
    return {
      galleryData: [
        {
          title: "Monitor Family Status",
          images: [
            { 
              src: "/image/Gallery/G1.jpg", 
              alt: "Staff Visiting a Family Home", 
              description: "A team member observes household conditions during a regular family status check.",
               
            },
            { 
              src: "/image/Gallery/G2.jpg", 
              alt: "Mother Sharing Family Situation", 
              description: "A local mother discusses challenges and living conditions with outreach staff." 
            },
            { 
              src: "/image/Gallery/G3.jpg", 
              alt: "Staff Discussing Support Plans", 
              description: "Outreach workers planning follow-up support for families in need after a visit."  
            },
            { 
              src: "/image/Gallery/G4.jpg", 
              alt: "Fimily sharing stories", 
              description: "Family sharing a story about how she doesn't have the money to support her children's education." 
            },
          ]

        },
        {
          title: "Lifestyle & Portraits",
          images: [
            { 
              src: "/image/Gallery/G5.jpg", 
              alt: "Girl Smiling During Staff Visit", 
              description: "A girl supported by Lotus Outreach Cambodia enjoys a quiet moment during staff visit her house."
            },
            { 
              src: "/image/Gallery/G6.jpg", 
              alt: "Portrait of a Girl After Passing Schoolship", 
              description: "A confident young girl symbolizing hope through education."
            },
            { 
              src: "/image/Gallery/G7.jpg", 
              alt: "Girl Stan, up is hopeful", 
              description: "A calm afternoon spent with staff, showing balance and well-being in her everyday life."
            },
            { 
              src: "/image/Gallery/G8.jpg", 
              alt: "Girl Exploring Her Environment", 
              description: "A curious girl observes her surroundings, reflecting her connection to both tradition and the future."
            },
          ]

        },
        {
          title: "Home Visit By Staff",
          images: [
            { 
              src: "/image/Gallery/G9.jpg", 
              alt: "Staff Arriving at a Family's Home", 
              description: "A view of the home environment where staff members conduct outreach and support visits."
            },
            { 
              src: "/image/Gallery/G10.jpg", 
              alt: "Inside a Beneficiary's Home", 
              description: "A look at the interior space where conversations and monitoring take place during a home visit."
            },
            { 
              src: "/image/Gallery/G11.jpg", 
              alt: "Girl Speaking with Staff at Home", 
              description: "A young beneficiary shares her story with Lotus Outreach Cambodia staff during a home assessment."
            },
            { 
              src: "/image/Gallery/G12.jpg", 
              alt: "Sharing a Meal with the Family", 
              description: "A meaningful moment as staff members are welcomed with traditional hospitality during a home visit."
            },
          ]

        },
        {
          title: "Visit Real Life",
          images: [
            { 
              src: "/image/Gallery/G13.jpg", 
              alt: "Volunteer visiting a girl's home in a rural village", 
              description: "A Lotus Outreach Cambodia team member listens to a young girl's story during a home visit, highlighting daily struggles and hopes." 
            },
            { 
              src: "/image/Gallery/G14.jpg", 
              alt: "Simple home environment of a supported family", 
              description: "A humble wooden house where a student supported by Lotus Outreach lives, reflecting the resilience of families in poverty." 
            },
            { 
              src: "/image/Gallery/G16.jpg", 
              alt: "Mother and daughter sharing a moment outside their home", 
              description: "A touching scene of love and support between a mother and her daughter, who receives educational aid from the program." 
            },
            { 
              src: "/image/Gallery/G17.jpg", 
              alt: "Children smiling during a home visit", 
              description: "Despite their challenges, children welcome visitors with joy — a testament to the impact of consistent support and encouragement." 
            },
          ]

        },
        {
          title: "Province Visit Activity",
            images: [
              {
                src: "/image/Gallery/G18.jpg",
                alt: "Children in Rural Cambodia",
                description: "Curious and smiling children gathering during a community education activity."
              },
              {
                src: "/image/Gallery/G19.jpg",
                alt: "Traditional House in the Province",
                description: "A glimpse of rural Cambodian life during the team’s outreach in the countryside."
              },
              {
                src: "/image/Gallery/G20.jpg",
                alt: "Supportive Interaction",
                description: "A warm and respectful gesture exchanged between a team member and a local participant."
              },
              {
                src: "/image/Gallery/G21.jpg",
                alt: "Community Outreach Moment",
                description: "Lotus Outreach Cambodia staff engaging with local villagers during a province visit."
              },
            ]
        },
        {
          title: "Workshop Activity",
          images: [
            { 
              src: "/image/Gallery/G22.jpg", 
              alt: "Participants Engaged in Workshop", 
              description: "Community members attentively participating in a skills-building or educational session."
            },
            { 
              src: "/image/Gallery/G23.jpg", 
              alt: "Hands-on Learning Moment", 
              description: "A facilitator guiding participants through a practical exercise during the workshop."
            },
            { 
              src: "/image/Gallery/G24.jpg", 
              alt: "Youth Interaction During Workshop", 
              description: "Young participants collaborating and sharing ideas in a supportive learning environment."
            },
            { 
              src: "/image/Gallery/G25.jpg", 
              alt: "Workshop Materials and Setup", 
              description: "A table filled with supplies and documents used during the Lotus Outreach Cambodia workshop."
            },
          ]

        },
        {
          title: "Trips Activity",
          images: [
            { 
              src: "/image/Gallery/G26.jpg", 
              alt: "Students Visiting a Historical Site", 
              description: "Participants explore a culturally significant location as part of an educational trip experience."
            },
            { 
              src: "/image/Gallery/G27.jpg", 
              alt: "Group Walk Through Local Village", 
              description: "The team walks together through a rural community, observing and learning from local life."
            },
            { 
              src: "/image/Gallery/G28.jpg", 
              alt: "Enjoying a Break During the Trip", 
              description: "A joyful moment of rest and conversation captured during the outreach journey."
            },
            { 
              src: "/image/Gallery/G29.jpg", 
              alt: "Reflective Moment by the Landscape", 
              description: "A peaceful scene showing a participant observing the natural beauty during the trip."
            },
          ]

        },
        {
          title: "Traditional Dance Activity",
          images: [
            { 
              src: "/image/Gallery/G30.jpg", 
              alt: "Khmer Dancers Performing on Stage", 
              description: "Young performers dressed in traditional Khmer costumes gracefully showcasing classical dance movements."
            },
            { 
              src: "/image/Gallery/G31.jpg", 
              alt: "Hand Gestures in Khmer Dance", 
              description: "A close-up of elegant hand movements, symbolizing stories and emotions in classical Cambodian dance."
            },
            { 
              src: "/image/Gallery/G32.jpg", 
              alt: "Students Preparing for Dance Performance", 
              description: "Participants in traditional attire preparing backstage for their cultural performance during the event."
            },
            // Uncomment this if you use the 4th image:
            // { 
            //   src: "/image/Gallery/G34.jpg", 
            //   alt: "Traditional Dance Costume Details", 
            //   description: "A detailed look at the intricate patterns and accessories of a Khmer classical dance outfit."
            // },
          ]

        },
      ],
      showLightbox: false,
      currentImageIndex: 0,
      currentSectionIndex: 0,
    };
  },
  computed: {
    allImages() {
      // Flatten all images into a single array for easy lightbox navigation
      return this.galleryData.flatMap(section => section.images);
    },
    currentImage() {
      return this.allImages[this.currentImageIndex] || {};
    },
  },
  methods: {
    openLightbox(sectionIdx, imageIdx) {
      // Calculate the flat index of the clicked image
      let flatIndex = 0;
      for (let i = 0; i < sectionIdx; i++) {
        flatIndex += this.galleryData[i].images.length;
      }
      flatIndex += imageIdx;

      this.currentImageIndex = flatIndex;
      this.showLightbox = true;
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    },
    closeLightbox() {
      this.showLightbox = false;
      document.body.style.overflow = ''; // Restore scrolling
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.allImages.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.allImages.length) % this.allImages.length;
    },
    handleKeyDown(event) {
      if (!this.showLightbox) return;
      if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      } else if (event.key === 'Escape') {
        this.closeLightbox();
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
};
</script>

<style scoped>
/* No specific scoped styles needed as Tailwind CSS is used for styling */
</style>
