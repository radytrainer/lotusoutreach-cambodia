<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Activity Management</h1>
        <p class="text-lg text-gray-600">Create, edit, and manage your activities</p>
      </div>

      <!-- Form for Creating/Updating Activities -->
      <div class="mb-12 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h2 class="text-2xl font-bold text-white flex items-center">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
              </path>
            </svg>
            {{ editingId ? 'Edit Activity' : 'Add New Activity' }}
          </h2>
        </div>

        <form @submit.prevent="saveActivity" class="p-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
              <!-- Title -->
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                    </path>
                  </svg>
                  Title
                </label>
                <input v-model="newActivity.title" type="text" required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300"
                  placeholder="Enter activity title..." />
              </div>

              <!-- Date -->
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Date
                </label>
                <input v-model="newActivity.date" type="date" required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300" />
              </div>

              <!-- Author -->
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Author
                </label>
                <input v-model="newActivity.author" type="text" required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300"
                  placeholder="Enter author name..." />
              </div>

              <!-- Category -->
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                    </path>
                  </svg>
                  Category
                </label>
                <select v-model="newActivity.category" required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300 bg-white">
                  <option value="education">📚 Education</option>
                  <option value="livelihoods">💼 Livelihoods</option>
                  <option value="health">🏥 Health</option>
                </select>
              </div>

              <!-- Location -->
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Location
                </label>
                <input v-model="newActivity.location" type="text" required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300"
                  placeholder="Enter location..." />
              </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-6">
              <!-- Content -->
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                    </path>
                  </svg>
                  Content
                </label>
                <textarea v-model="newActivity.content" required rows="4"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300 resize-none"
                  placeholder="Describe the activity..."></textarea>
              </div>

              <!-- Main Image -->
              <div class="space-y-4">
                <div class="group">
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                    Upload Main Image
                  </label>
                  <div class="relative">
                    <input type="file" accept="image/*" @change="handleMainImageUpload"
                      class="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  </div>
                  <div v-if="mainImagePreview" class="mt-4 flex justify-center">
                    <div class="relative group">
                      <img :src="mainImagePreview" alt="Main image preview"
                        class="h-32 w-32 object-cover rounded-xl shadow-lg border-4 border-white" />
                      <div
                        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-xl">
                      </div>
                    </div>
                  </div>
                  <p v-if="uploadError.mainImage" class="text-red-600 text-sm mt-2 flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg>
                    {{ uploadError.mainImage }}
                  </p>
                </div>
                <div class="group">
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                    Upload Additional Images
                  </label>
                  <input type="file" accept="image/*" multiple @change="handleAdditionalImagesUpload"
                    class="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                  <div v-if="additionalImagesPreview.length" class="mt-4 grid grid-cols-4 gap-3">
                    <div v-for="(preview, index) in additionalImagesPreview" :key="index" class="relative group">
                      <img :src="preview" alt="Additional image preview"
                        class="h-20 w-20 object-cover rounded-lg shadow-md border-2 border-white" />
                      <div
                        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg">
                      </div>
                    </div>
                  </div>
                  <p v-if="uploadError.additionalImages" class="text-red-600 text-sm mt-2 flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg>
                    {{ uploadError.additionalImages }}
                  </p>
                </div>
                <div class="group">
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                      </path>
                    </svg>
                    Main Image URL
                  </label>
                  <input v-model="newActivity.image" type="text"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300"
                    placeholder="https://example.com/image.jpg" />
                </div>
              </div>

              <!-- Additional Images -->
              <div class="space-y-4">
                <div class="group">
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                      </path>
                    </svg>
                    Additional Images (comma-separated URLs)
                  </label>
                  <input v-model="image1Input" type="text"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300"
                    placeholder="/image1.jpg, /image2.jpg" />
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
            <button type="submit" :disabled="isUploading"
              class="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center">
              <svg v-if="!isUploading" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <svg v-else class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              {{ editingId ? 'Update Activity' : 'Create Activity' }} {{ isUploading ? '(Uploading...)' : '' }}
            </button>

            <button v-if="editingId" @click="cancelEdit" type="button"
              class="flex-1 sm:flex-none px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              Cancel
            </button>
          </div>
        </form>
      </div>

      <!-- Activities Grid -->
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg class="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
            </path>
          </svg>
          All Activities ({{ activities.length }})
        </h3>

        <div v-if="activities.length === 0"
          class="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
          <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
            </path>
          </svg>
          <h4 class="text-xl font-semibold text-gray-600 mb-2">No Activities Yet</h4>
          <p class="text-gray-500">Create your first activity using the form above.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="activity in activities" :key="activity._id" class="group">
            <div
              class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <card-activity :activity="activity" :get-category-badge-class="getCategoryBadgeClass"
                :get-category-label="getCategoryLabel" :format-date="formatDate" @view-detail="handleViewDetail"
                class="h-full" />

              <!-- Action Buttons -->
              <div class="p-6 bg-gray-50 border-t border-gray-100">
                <div class="flex gap-3">
                  <button @click="editActivity(activity)"
                    class="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                      </path>
                    </svg>
                    Edit
                  </button>
                  <button @click="deleteActivity(activity._id)"
                    class="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                      </path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardActivity from '@/components/News/CardActivity.vue';
import convex from '@/convex';
import Swal from 'sweetalert2';

const activities = ref([]);
const newActivity = ref({
  title: '',
  content: '',
  date: '',
  author: '',
  category: 'education',
  image: '',
  image1: [],
  location: '',
});
const image1Input = ref('');
const editingId = ref(null);
const mainImageFile = ref(null);
const additionalImageFiles = ref([]);
const mainImagePreview = ref(null);
const additionalImagesPreview = ref([]);
const isUploading = ref(false);
const uploadError = ref({ mainImage: '', additionalImages: '' });

const getCategoryBadgeClass = (category) => {
  const classes = {
    education: 'bg-blue-100 text-blue-800',
    livelihoods: 'bg-green-100 text-green-800',
    health: 'bg-red-100 text-red-800',
  };
  return classes[category] || 'bg-gray-100 text-gray-800';
};

const getCategoryLabel = (category) => {
  const labels = {
    education: 'Education',
    livelihoods: 'Livelihoods',
    health: 'Health',
  };
  return labels[category] || 'General';
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const handleViewDetail = (activity) => {
  console.log('View details for:', activity);
};

const editActivity = (activity) => {
  editingId.value = activity._id;
  newActivity.value = {
    title: activity.title || '',
    content: activity.content || '',
    date: activity.date ? new Date(activity.date).toISOString().split('T')[0] : '',
    author: activity.author || '',
    category: activity.category || 'education',
    image: activity.image || '',
    image1: Array.isArray(activity.image1) ? activity.image1 : [],
    location: activity.location || '',
  };
  image1Input.value = Array.isArray(activity.image1) ? activity.image1.join(', ') : '';
  mainImageFile.value = null;
  additionalImageFiles.value = [];
  mainImagePreview.value = activity.image || null;
  additionalImagesPreview.value = Array.isArray(activity.image1) ? activity.image1 : [];
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const cancelEdit = () => {
  editingId.value = null;
  resetForm();
  alert('Editing canceled');
};

const validateImageFile = (file) => {
  const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (!validTypes.includes(file.type)) {
    return 'Only JPEG, PNG, or GIF images are allowed.';
  }
  if (file.size > maxSize) {
    return 'Image size must be less than 5MB.';
  }
  return null;
};

const handleMainImageUpload = (event) => {
  const file = event.target.files[0];
  mainImageFile.value = file;
  uploadError.value.mainImage = '';
  mainImagePreview.value = null;

  if (file) {
    const error = validateImageFile(file);
    if (error) {
      uploadError.value.mainImage = error;
      mainImageFile.value = null;
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      mainImagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleAdditionalImagesUpload = (event) => {
  const files = Array.from(event.target.files);
  uploadError.value.additionalImages = '';
  additionalImageFiles.value = [];
  additionalImagesPreview.value = [];

  for (const file of files) {
    const error = validateImageFile(file);
    if (error) {
      uploadError.value.additionalImages = error;
      return;
    }
  }
  additionalImageFiles.value = files;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      additionalImagesPreview.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });
};

const uploadFile = async (file) => {
  try {
    const postUrl = await convex.mutation("storage:generateUploadUrl");
    const result = await fetch(postUrl, {
      method: "POST",
      body: file,
    });
    if (!result.ok) {
      throw new Error("Upload failed");
    }
    const { storageId } = await result.json();
    const fileUrl = await convex.query("storage:getFileUrl", { storageId });
    return fileUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

const saveActivity = async () => {
  try {
    isUploading.value = true;
    uploadError.value = { mainImage: '', additionalImages: '' };

    // Validate required fields
    const requiredFields = ['title', 'content', 'date', 'author', 'category', 'location'];
    for (const field of requiredFields) {
      if (!newActivity.value[field] || newActivity.value[field].trim() === '') {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    // Handle main image
    if (mainImageFile.value) {
      const error = validateImageFile(mainImageFile.value);
      if (error) {
        uploadError.value.mainImage = error;
        return;
      }
      newActivity.value.image = await uploadFile(mainImageFile.value);
    } else if (!newActivity.value.image || newActivity.value.image.trim() === '') {
      newActivity.value.image = '';
    } else {
      try {
        new URL(newActivity.value.image);
      } catch {
        uploadError.value.mainImage = 'Invalid main image URL.';
        return;
      }
    }

    // Handle additional images
    let image1Urls = [];
    if (additionalImageFiles.value.length > 0) {
      image1Urls = await Promise.all(
        additionalImageFiles.value.map(async (file) => {
          const error = validateImageFile(file);
          if (error) {
            throw new Error(error);
          }
          return await uploadFile(file);
        })
      );
    } else if (image1Input.value) {
      image1Urls = image1Input.value.split(',').map(url => url.trim()).filter(url => {
        if (url === '') return false;
        try {
          new URL(url);
          return true;
        } catch {
          return false;
        }
      });
      if (image1Urls.length === 0 && image1Input.value.trim() !== '') {
        uploadError.value.additionalImages = 'Invalid additional image URLs.';
        return;
      }
    }
    newActivity.value.image1 = image1Urls;

    if (editingId.value) {
      console.log('Updating activity:', { id: editingId.value, ...newActivity.value });
      await convex.mutation("mutations:updateActivity", {
        id: editingId.value,
        ...newActivity.value,
      });
      $.notify("Activity updated successfully", "success");
    } else {
      console.log('Creating activity:', newActivity.value);
      await convex.mutation("mutations:createActivity", newActivity.value);
      $.notify("Activity created successfully", "success");
    }
    await fetchActivities();
    resetForm();
  } catch (error) {
    console.error('Error saving activity:', error);
    alert(`Failed to save activity: ${error.message || 'Unknown error'}`);
  } finally {
    isUploading.value = false;
  }
};
const resetForm = () => {
  newActivity.value = {
    title: '',
    content: '',
    date: '',
    author: '',
    category: 'education',
    image: '',
    image1: [],
    location: '',
  };
  image1Input.value = '';
  mainImageFile.value = null;
  additionalImageFiles.value = [];
  mainImagePreview.value = null;
  additionalImagesPreview.value = [];
  uploadError.value = { mainImage: '', additionalImages: '' };
  editingId.value = null;
};

const fetchActivities = async () => {
  try {
    const result = await convex.query("getActivities");
    activities.value = result;
  } catch (error) {
    console.error('Error fetching activities:', error);
    alert(`Failed to fetch activities: ${error.message || 'Unknown error'}`);
  }
};

onMounted(fetchActivities);

const deleteActivity = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    customClass: {
      confirmButton: 'swal2-confirm',
      cancelButton: 'swal2-cancel bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await convex.mutation("mutations:deleteActivity", { id });
        await fetchActivities();

        Swal.fire("Deleted!", "The activity has been removed.", "success");
      } catch (error) {
        Swal.fire("Error!", "Failed to delete activity.", "error");
      }
    }
  });
};
</script>
