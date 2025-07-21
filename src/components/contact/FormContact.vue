<template>
  <!-- Centered Heading -->
  <div class="text-center mb-16 max-w-3xl mx-auto">
    <h2 class="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
    <div class="w-20 h-1 bg-blue-200 mx-auto mb-6"></div>
    <p class="text-lg text-gray-600">
      We'd love to hear from you! Whether you have questions, want to volunteer,
      or wish to support our work in Cambodia, fill out the form below.
    </p>
  </div>
  <div
    class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-8"
  >
    <div class="bg-white p-12 rounded-xl shadow-md border border-gray-100">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Name</label
            >
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Name"
              aria-required="true"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Email</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Email"
              aria-required="true"
            />
          </div>
        </div>
        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="5"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div class="pt-2">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full px-6 py-4 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            aria-label="Submit contact form"
          >
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </button>
        </div>
        <p
          v-if="formStatus"
          :class="[
            'text-center py-3 rounded-lg',
            formStatus.success
              ? 'bg-blue-50 text-blue-700'
              : 'bg-pink-50 text-pink-700',
          ]"
        >
          {{ formStatus.message }}
        </p>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// Form state
const form = ref({
  name: "",
  email: "",
  message: "",
});
const isSubmitting = ref(false);
const formStatus = ref(null);

// Form submission handler
const handleSubmit = async () => {
  isSubmitting.value = true;
  formStatus.value = null;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically send form data to an API
    // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form.value) });

    formStatus.value = {
      success: true,
      message: "Thank you for your message! We’ll get back to you soon.",
    };

    // Reset form
    form.value = { name: "", email: "", message: "" };
  } catch (error) {
    formStatus.value = {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>
