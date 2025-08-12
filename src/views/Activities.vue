
<template>
  <div class="p-6">
    <!-- Form for Creating/Updating Activities -->
    <div class="mb-8 bg-white p-6 rounded-xl shadow-md">
      <h2 class="text-2xl font-bold mb-4">{{ editingId ? 'Edit Activity' : 'Add New Activity' }}</h2>
      <form @submit.prevent="saveActivity" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Title</label>
          <input v-model="newActivity.title" type="text" required class="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Content</label>
          <textarea v-model="newActivity.content" required class="w-full p-2 border rounded-md" rows="4"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Date</label>
          <input v-model="newActivity.date" type="date" required class="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Author</label>
          <input v-model="newActivity.author" type="text" required class="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Category</label>
          <select v-model="newActivity.category" required class="w-full p-2 border rounded-md">
            <option value="education">Education</option>
            <option value="livelihoods">Livelihoods</option>
            <option value="health">Health</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Main Image URL</label>
          <input v-model="newActivity.image" type="text" class="w-full p-2 border rounded-md" placeholder="e.g., https://example.com/image.jpg" />
          <label class="block text-sm font-medium text-gray-700 mt-2">Or Upload Main Image</label>
          <input type="file" accept="image/*" @change="handleMainImageUpload" class="w-full p-2 border rounded-md" />
          <p v-if="mainImagePreview" class="mt-2">
            <img :src="mainImagePreview" alt="Main image preview" class="h-24 w-24 object-cover rounded-md" />
          </p>
          <p v-if="uploadError.mainImage" class="text-red-600 text-sm mt-1">{{ uploadError.mainImage }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Additional Images (comma-separated URLs)</label>
          <input v-model="image1Input" type="text" class="w-full p-2 border rounded-md" placeholder="e.g., /image1.jpg,/image2.jpg" />
          <label class="block text-sm font-medium text-gray-700 mt-2">Or Upload Additional Images</label>
          <input type="file" accept="image/*" multiple @change="handleAdditionalImagesUpload" class="w-full p-2 border rounded-md" />
          <div v-if="additionalImagesPreview.length" class="mt-2 flex flex-wrap gap-2">
            <img v-for="(preview, index) in additionalImagesPreview" :key="index" :src="preview" alt="Additional image preview" class="h-24 w-24 object-cover rounded-md" />
          </div>
          <p v-if="uploadError.additionalImages" class="text-red-600 text-sm mt-1">{{ uploadError.additionalImages }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Location</label>
          <input v-model="newActivity.location" type="text" required class="w-full p-2 border rounded-md" />
        </div>
        <div class="flex space-x-4">
          <button type="submit" :disabled="isUploading" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
            {{ editingId ? 'Update' : 'Create' }} {{ isUploading ? '(Uploading...)' : '' }}
          </button>
          <button v-if="editingId" @click="cancelEdit" type="button" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </form>
    </div>

    <!-- Activities Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="activity in activities" :key="activity._id" class="flex flex-col">
        <card-activity
          :activity="activity"
          :get-category-badge-class="getCategoryBadgeClass"
          :get-category-label="getCategoryLabel"
          :format-date="formatDate"
          @view-detail="handleViewDetail"
        />
        <div class="mt-4 flex space-x-4">
          <button
            @click="editActivity(activity)"
            class="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          >
            Edit
          </button>
          <button
            @click="deleteActivity(activity._id)"
            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardActivity from '@/components/News/CardActivity.vue';
import convex from '@/convex';

const activities = ref([]);
const newActivity = ref({
  title: '',
  content: '',
  date: '',
  author: '',
  category: 'education',
  image: '/placeholder.svg',
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
  // Implement navigation or modal for details
};

const editActivity = (activity) => {
  editingId.value = activity._id;
  newActivity.value = {
    title: activity.title || '',
    content: activity.content || '',
    date: activity.date ? new Date(activity.date).toISOString().split('T')[0] : '',
    author: activity.author || '',
    category: activity.category || 'education',
    image: activity.image || '/placeholder.svg',
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
      newActivity.value.image = '/placeholder.svg';
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
      alert('Activity updated successfully');
    } else {
      console.log('Creating activity:', newActivity.value);
      await convex.mutation("mutations:createActivity", newActivity.value);
      alert('Activity created successfully');
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

const deleteActivity = async (id) => {
  try {
    await convex.mutation("mutations:deleteActivity", { id });
    await fetchActivities();
    alert('Activity deleted successfully');
  } catch (error) {
    console.error('Error deleting activity:', error);
    alert(`Failed to delete activity: ${error.message || 'Unknown error'}`);
  }
};

const resetForm = () => {
  newActivity.value = {
    title: '',
    content: '',
    date: '',
    author: '',
    category: 'education',
    image: '/placeholder.svg',
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
</script>
