<template>
  <div class="bg-white">
    <HeroBanner v-if="currentView === 'listing'" />

    <ActivityDetail v-if="currentView === 'detail' && selectedActivity" :activity="selectedActivity"
      :related="relatedActivities" :formatDate="formatDate" :getCategoryBadgeClass="getCategoryBadgeClass"
      :getCategoryLabel="getCategoryLabel" :calculateReadTime="calculateReadTime" :showHeading="false"
      @back="backToListing" @view-detail="viewActivityDetail" />

    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ActivityFilter :searchQuery="searchQuery" :categories="categories" :activeCategories="activeCategories"
        :getCategoryButtonClass="getCategoryButtonClass" @update:searchQuery="val => searchQuery = val"
        @toggle-category="toggleCategory" @search="handleSearch" />

      <div v-if="filteredActivities.length === 0" class="text-center py-12">
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardActivity v-for="(activity, index) in filteredActivities.slice(0, visibleItems)" :key="activity.title"
          :activity="activity" :getCategoryBadgeClass="getCategoryBadgeClass" :getCategoryLabel="getCategoryLabel"
          :formatDate="formatDate" @view-detail="viewActivityDetail" />
      </div>

      <div v-if="filteredActivities.length > visibleItems" class="mt-12 text-center">
        <button @click="loadMore" class="px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-700">
          Load More Activities
        </button>
      </div>
    </div>

    <SuccessStory v-if="currentView === 'listing' && stories.length" :stories="stories" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import HeroBanner from '@/components/News/HeroBanner.vue';
import CardActivity from '@/components/News/CardActivity.vue';
import ActivityDetail from '@/components/News/ActivityDetail.vue';
import ActivityFilter from '@/components/News/ActivityFilter.vue';
import SuccessStory from '@/components/News/SuccessStory.vue';

const currentView = ref("listing");
const selectedActivity = ref(null);
const visibleItems = ref(6);
const searchQuery = ref("");
const activeCategories = ref([]);
const activities = ref([]);
const categories = ref([]);
const stories = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('/backend/newsStory.json');
    activities.value = response.data.activities;
    categories.value = response.data.categories;
    stories.value = response.data.stories;
  } catch (error) {
    console.error("Failed to load data from newsStory.json", error);
  }
};

onMounted(fetchData);

const filteredActivities = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  const hasSearchQuery = query !== "";
  const hasActiveCategories = activeCategories.value.length > 0;

  return activities.value
    .filter((activity) => {
      const matchesCategory =
        !hasActiveCategories || activeCategories.value.includes(activity.category);
      let matchesSearch = false;

      if (hasSearchQuery) {
        const matchedCategory = categories.value.find((cat) =>
          cat.label.toLowerCase().includes(query)
        );
        if (matchedCategory) {
          matchesSearch = activity.category === matchedCategory.value;
        } else {
          matchesSearch =
            activity.title.toLowerCase().includes(query) ||
            activity.content.toLowerCase().includes(query) ||
            activity.author.toLowerCase().includes(query) ||
            (activity.location && activity.location.toLowerCase().includes(query));
        }
      } else {
        matchesSearch = true;
      }

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const relatedActivities = computed(() => {
  if (!selectedActivity.value) return [];
  return activities.value
    .filter(
      (activity) =>
        activity.title !== selectedActivity.value.title &&
        (activity.category === selectedActivity.value.category || Math.random() > 0.5)
    )
    .slice(0, 2);
});

const viewActivityDetail = (activity) => {
  selectedActivity.value = activity;
  currentView.value = "detail";
  window.scrollTo(0, 0); 
  console.log("Selected Activity:", activity.title, "Current View:", currentView.value);
};


const backToListing = () => {
  currentView.value = "listing";
  selectedActivity.value = null;
};


const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};


const getCategoryButtonClass = (category) => {
  const isActive = activeCategories.value.includes(category);
  return {
    "bg-blue-100 text-blue-800": category === "education" && isActive,
    "bg-green-100 text-green-800": category === "health" && isActive,
    "bg-purple-100 text-purple-800": category === "protection" && isActive,
    "bg-orange-100 text-orange-800": category === "livelihoods" && isActive,
    "bg-gray-100 text-gray-800": !isActive,
  };
};


const getCategoryBadgeClass = (category) => {
  return {
    "bg-blue-100 text-blue-800": category === "education",
    "bg-green-100 text-green-800": category === "health",
    "bg-purple-100 text-purple-800": category === "protection",
    "bg-orange-100 text-orange-800": category === "livelihoods",
  };
};

const loadMore = () => {
  visibleItems.value += 3;
};

const handleSearch = () => {
  visibleItems.value = 6;
};

const toggleCategory = (category) => {
  const index = activeCategories.value.indexOf(category);
  if (index === -1) {
    activeCategories.value.push(category);
  } else {
    activeCategories.value.splice(index, 1);
  }
  visibleItems.value = 6;
};

const resetFilters = () => {
  searchQuery.value = "";
  activeCategories.value = [];
  visibleItems.value = 6;
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const getCategoryLabel = (category) => {
  const labels = {
    education: "Girls' Education",
    health: "Health & Nutrition",
    protection: "Anti-Trafficking & Child Protection",
    livelihoods: "Sustainable Livelihoods",
  };
  return labels[category] || "Activity";
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose {
  line-height: 1.75;
}

.prose p {
  margin-bottom: 1.25em;
}

.h-48 {
  height: 12rem;
}

.h-64 {
  height: 16rem;
}

.object-cover {
  object-fit: cover;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>