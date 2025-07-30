<template>
  <div class="min-h-screen bg-gray-50 flex justify-center items-center p-4">
    <div
      v-if="selectedMember"
      class="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row relative"
    >
      <!-- Back Button - Now on the top right of the card -->
      <button
        @click="goBack"
        class="absolute top-6 right-6 bg-pink-600 text-white hover:text-gray-900 flex items-center space-x-2 z-10 p-2 rounded-md transition-colors"
      >
        <ChevronLeftIcon class="w-5 h-5" />
        <span>Back to Team</span>
      </button>

      <!-- Image Section (Left on MD+, First on Mobile) -->
      <div class="relative w-full md:w-2/5 h-80 md:h-auto flex-shrink-0">
        <img
          :src="selectedMember.image || '/placeholder.svg?height=600&width=400&text=Team Member'"
          :alt="selectedMember.name"
          class="object-cover object-center w-full h-full"
        />
        <!-- Optional: Subtle gradient overlay for image depth -->
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
      </div>

      <!-- Info Section (Right on MD+, Last on Mobile) -->
      <!-- Adjusted padding-top to account for the back button on mobile if it overlaps -->
      <div class="p-8 md:p-12 pt-20 md:pt-12 flex flex-col w-full md:w-3/5">
        <!-- Name and Position Header -->
        <div class="mb-8 pb-4 border-b border-gray-100">
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">{{ selectedMember.name }}</h1>
          <p class="text-xl md:text-2xl text-blue-600 font-medium mt-2">{{ selectedMember.position }}</p>
        </div>

        <!-- Details Section -->
        <div class="w-full text-left mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">About</h2>
          <p class="text-gray-700 text-base leading-relaxed whitespace-pre-line">
            {{ selectedMember.details }}
          </p>
        </div>

        <!-- Skills & Expertise Section -->
        <div v-if="selectedMember.tags && selectedMember.tags.length > 0" class="w-full text-left mt-auto pt-6 border-t border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="(tag, index) in selectedMember.tags"
              :key="index"
              class="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 shadow-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Found Fallback -->
    <div v-else class="text-center text-gray-500">
      <div class="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center text-gray-700">
        <p class="text-lg mb-4">Team member not found.</p>
        <button
          @click="goBack"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Team
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ChevronLeftIcon } from "lucide-vue-next";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const teamMembers = ref([]);
const defaultImage = "/images/default-user.jpg"; // fallback image

const fetchTeamData = async () => {
  try {
    const response = await axios.get("/backend/about.json");
    const data = response.data;
    teamMembers.value = data?.teamMembers ?? [];
    console.log("Team data fetched successfully:", teamMembers.value);
  } catch (err) {
    console.error("Axios error:", err.message);
  }
};

onMounted(fetchTeamData);

// Watch route param changes
watch(
  () => route.params.id,
  () => {
    console.log("Route param changed. Recomputing selectedMember...");
  }
);

// Computed selected member
const selectedMember = computed(() => {
  const id = String(route.params.id);
  const member = teamMembers.value.find((p) => String(p.id) === id);
  // console.log("Selected member:", member, "Route param ID:", id);
  return member;
});

const goBack = () => router.back({name: "TeamSection"});
</script>
