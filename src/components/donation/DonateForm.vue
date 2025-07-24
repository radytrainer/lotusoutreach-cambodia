<template>
  <div class="lg:col-span-3">
    <form @submit.prevent="handleSubmit" class="bg-white rounded-xl shadow-2xl border border-pink-100 p-6">
      <div class="bg-gradient-to-r from-pink-600 to-pink-500 px-6 py-4 rounded-t-xl">
        <h2 class="text-xl font-semibold text-white flex items-center">
          <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Donation Details
        </h2>
      </div>
      <div class="p-6 space-y-6">
        <div>
          <label for="amount" class="block text-gray-700 text-sm font-medium mb-2 flex items-center">
            <svg class="h-5 w-5 mr-2 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Donation Amount (USD)*
          </label>
          <div class="flex flex-wrap gap-3 mb-4">
            <button type="button" @click="setAmount(50)" class="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-all duration-200">$50</button>
            <button type="button" @click="setAmount(100)" class="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-all duration-200">$100</button>
            <button type="button" @click="setAmount(250)" class="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-all duration-200">$250</button>
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 mb-4 ml-4">$</span>
            </div>
            <input v-model.number="form.amount" class="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" type="number" id="amount" min="1" required placeholder="0.00" aria-describedby="amount-error" />
            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div class="bg-pink-600 h-2 rounded-full transition-all duration-300" :style="{ width: progress + '%' }"></div>
            </div>
            <p v-if="false" id="amount-error" class="text-red-500 text-xs mt-1">{{ errors.amount }}</p>
          </div>
        </div>
        <div>
          <label for="anonymous" class="block text-gray-700 text-sm font-medium mb-2 flex items-center">
            <svg class="h-5 w-5 mr-2 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Make this donation anonymous?
          </label>
          <select v-model="form.anonymous" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" id="anonymous" aria-label="Select anonymity preference">
            <option value="no">No, display my name</option>
            <option value="yes">Yes, make it anonymous</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-2 flex items-center">
            <svg class="h-5 w-5 mr-2 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            Donation Type
          </label>
          <div class="flex flex-wrap items-center gap-4">
            <label class="inline-flex items-center">
              <input v-model="form.donationType" type="radio" value="one-time" class="h-5 w-5 text-pink-600 focus:ring-pink-500" />
              <span class="ml-2 text-gray-700">One-Time Donation</span>
            </label>
            <label class="inline-flex items-center">
              <input v-model="form.donationType" type="radio" value="recurring" class="h-5 w-5 text-pink-600 focus:ring-pink-500" />
              <span class="ml-2 text-gray-700">Recurring Donation</span>
            </label>
            <select v-if="form.donationType === 'recurring'" v-model="form.frequency" class="p-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" aria-label="Select donation frequency">
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="annually">Annually</option>
              <option value="every-6-months">Every 6 Months</option>
            </select>
          </div>
        </div>
        <div class="p-4 bg-pink-50 rounded-lg border border-pink-100">
          <h3 class="text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <svg class="h-5 w-5 mr-2 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Your Information
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="full-name" class="block text-sm font-medium text-gray-700 mb-1">Full Name <span class="text-red-500">*</span></label>
              <input id="full-name" type="text" v-model.trim="form.fullName" required class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" aria-describedby="full-name-error" />
              <p v-if="false" id="full-name-error" class="text-red-500 text-xs mt-1">{{ errors.fullName }}</p>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email <span class="text-red-500">*</span></label>
              <input id="email" type="email" v-model="form.email" required class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" aria-describedby="email-error" />
              <p v-if="false" id="email-error" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input id="phone" type="tel" v-model="form.phone" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" />
            </div>
            <div>
              <label for="city" class="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input id="city" type="text" v-model="form.city" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" />
            </div>
            <div class="md:col-span-2">
              <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input id="address" type="text" v-model="form.address" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" />
            </div>
            <div class="md:col-span-2">
              <label for="country" class="block text-sm font-medium text-gray-700 mb-1">Country <span class="text-red-500">*</span></label>
              <select id="country" v-model="form.country" required class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" aria-describedby="country-error">
                <option value="">Select Country</option>
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
              <p v-if="false" id="country-error" class="text-red-500 text-xs mt-1">{{ errors.country }}</p>
            </div>
          </div>
        </div>
        <div>
          <label for="comment" class="block text-gray-700 text-sm font-medium mb-2 flex items-center">
            <svg class="h-5 w-5 mr-2 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Comment (Optional)
          </label>
          <textarea v-model="form.comment" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500" id="comment" rows="4" placeholder="Any special instructions or notes..."></textarea>
        </div>
        <div>
          <button type="submit" :disabled="isFormInvalid" class="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
            <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003-3z" />
            </svg>
            Donate Now
          </button>
          <transition name="fade">
            <p v-if="successMessage" :class="successMessage.includes('error') ? 'text-red-500' : 'text-green-500'" class="text-sm mt-2 text-center">
              {{ successMessage }}
            </p>
          </transition>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";

const form = reactive({
  amount: "",
  anonymous: "no",
  donationType: "one-time",
  frequency: "monthly",
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  comment: "",
});

const successMessage = ref("");
const isSubmitting = ref(false);

const EMAIL_SERVICE_ID = 'service_xd0na0r';
const EMAIL_TEMPLATE_ID = 'template_78ubqnw';
const EMAIL_PUBLIC_KEY = 'Bl7S83_6GRufEYlOa';

const errors = reactive({});

const progress = computed(() =>
  Math.min((parseFloat(form.amount || 0) / 500) * 100, 100)
);

const countries = ref([
  "China", "Japan", "South Korea", "North Korea", "Taiwan", "Mongolia", "Hong Kong", "Brunei", "Cambodia", "Indonesia", "Malaysia", "Myanmar (Burma)",
  "Philippines", "Singapore", "Thailand", "Vietnam", "Laos", "Pakistan", "Bangladesh", "Bhutan", "India", "Maldives", "Nepal", "Sri Lanka", "Armenia",
  "Turkey", "Qatar", "Palestine", "France", "United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Russia",
]);

onMounted(() => {
  try {
    emailjs.init(EMAIL_PUBLIC_KEY);
  } catch (error) {
    console.error("Failed to initialize EmailJS:", error);
    successMessage.value = "Error: Email service not configured properly.";
    setTimeout(() => {
      successMessage.value = "";
    }, 3000);
  }
});

const validateForm = () => {
  Object.keys(errors).forEach((key) => delete errors[key]);
  const newErrors = {};
  if (!form.amount || form.amount <= 0) newErrors.amount = "Please enter a valid donation amount greater than 0";
  if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
  if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "A valid email is required";
  if (!form.country) newErrors.country = "Please select a country";
  Object.assign(errors, newErrors);
  return Object.keys(newErrors).length === 0;
};

const isFormInvalid = computed(() => {
  return !form.fullName.trim() || !form.email || !form.country || !/\S+@\S+\.\S+/.test(form.email);
});

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  if (!validateForm()) {
    successMessage.value = "Please fill in all required fields correctly.";
    setTimeout(() => {
      successMessage.value = "";
    }, 3000);
    isSubmitting.value = false;
    return;
  }

  const templateParams = {
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    amount: form.amount,
    anonymous: form.anonymous,
    donationType: form.donationType,
    frequency: form.donationType === 'recurring' ? form.frequency : 'N/A',
    city: form.city,
    address: form.address,
    country: form.country,
    comment: form.comment,
  };

  try {
    const result = await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams);
    console.log('Email sent:', result.text);
    successMessage.value = "Donation submitted successfully!";
    Object.keys(form).forEach((key) => (form[key] = ""));
    form.anonymous = "no";
    form.donationType = "one-time";
    form.frequency = "monthly";
    Object.keys(errors).forEach((key) => delete errors[key]);
    setTimeout(() => {
      successMessage.value = "";
    }, 3000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    successMessage.value = "Error: Failed to submit donation. Please try again.";
    setTimeout(() => {
      successMessage.value = "";
    }, 3000);
  } finally {
    isSubmitting.value = false;
  }
};

const setAmount = (value) => {
  form.amount = value;
  validateForm(); // Re-validate to clear errors and enable button if other fields are valid
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.3);
}

button {
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>