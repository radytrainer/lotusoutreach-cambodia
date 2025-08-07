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
        <h1 class="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-4 text-white">
          Our Gallery of <span class="text-pink-500">Activities</span>
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-3xl mx-auto mt-4 font-medium">
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
        <h2 class="text-4xl font-bold text-gray-800 mb-10 border-b-4 border-gray-200 pb-4">
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
          title: "Abstract & Conceptual",
          images: [
            { src: "/image/Gallery/G1.jpg", alt: "Hands with Yellow Object", description: "A close-up shot emphasizing texture and color.", pathTitle: "FLOWER IN DOOR" },
            { src: "/image/Gallery/G2.jpg", alt: "Man with Tattoos", description: "An intense portrait capturing unique details and expression." },
            { src: "/image/Gallery/G3.jpg", alt: "Red Sports Car Detail", description: "Sleek lines and vibrant color of a modern vehicle." },
            { src: "/image/Gallery/G4.jpg", alt: "Pointing Hands", description: "A simple gesture, conveying direction or focus." },
          ]
        },
        {
          title: "Lifestyle & Portraits",
          images: [
            { src: "/image/Gallery/G5.jpg", alt: "Holding Beverage Can", description: "A casual moment, highlighting product interaction." },
            { src: "/image/Gallery/G6.jpg", alt: "Man in Yellow Shirt", description: "A relaxed portrait with vibrant colors and clear skies.", pathTitle: "FLOWER IN DOOR" },
            { src: "/image/Gallery/G7.jpg", alt: "Relaxing by Pool", description: "Luxury and leisure by a stunning infinity pool." },
            { src: "/image/Gallery/G8.jpg", alt: "EV Charging Port", description: "The future of mobility, captured in detail." },
          ]
        },
        {
          title: "Architecture & Design",
          images: [
            { src: "/image/Gallery/G9.jpg", alt: "Modern Architecture", description: "Innovative design blending with natural landscapes.", pathTitle: "FLOWER IN DOOR" },
            { src: "/image/Gallery/G10.jpg", alt: "Glowing Teal Lamp", description: "An artistic light fixture creating a unique ambiance.", pathTitle: "FLOWER IN DOOR" },
            { src: "/image/Gallery/G11.jpg", alt: "Gourmet Dining", description: "A close-up of a beautifully plated meal." },
            { src: "/image/Gallery/G12.jpg", alt: "Woman on Railing", description: "A captivating portrait with a thoughtful gaze." },
          ]
        },
        {
          title: "Diverse Perspectives",
          images: [
            { src: "/image/Gallery/G13.jpg", alt: "Camera Lens Detail", description: "The intricate mechanics of photography." },
            { src: "/image/Gallery/G14.jpg", alt: "Delicate Hands", description: "A soft focus on human connection." },
            { src: "/image/Gallery/G16.jpg", alt: "Curious French Bulldog", description: "An adorable pet with an inquisitive expression." },
            { src: "/image/Gallery/G17.jpg", alt: "Blue Texture", description: "Abstract patterns and tactile surfaces." },
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
