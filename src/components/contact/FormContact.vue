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

  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-8">
    <!-- Contact Form -->
    <div class="bg-white p-12 rounded-xl shadow-md border border-gray-100">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
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
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
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

        <!-- Feedback Message -->
        <p
          v-if="formStatus"
          :class="[
            'text-center py-3 px-4 rounded-lg text-sm font-medium',
            formStatus.success
              ? 'bg-blue-50 text-blue-700 border border-blue-200'
              : 'bg-pink-50 text-pink-700 border border-pink-200',
          ]"
        >
          {{ formStatus.message }}
        </p>
      </form>
    </div>

    <!-- Contact Info Section -->
    <ContactInfo />
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import ContactInfo from "./ContactInfo.vue";

// Reactive form data
const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const formStatus = ref(null);

// Replace with your EmailJS credentials
const SERVICE_ID = "service_g730mbw";
const TEMPLATE_ID = "template_kgkljol";
const PUBLIC_KEY = "Bl7S83_6GRufEYlOa";

// Submit form handler
const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    formStatus.value = {
      success: false,
      message: "Please fill out all required fields.",
    };
    return;
  }

  isSubmitting.value = true;
  formStatus.value = null;

  const templateParams = {
    from_name: form.value.name,
    from_email: form.value.email,
    message: form.value.message,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    formStatus.value = {
      success: true,
      message: "🎉 Thank you for contacting us! We'll get back to you shortly.",
    };

    // Reset form
    form.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    formStatus.value = {
      success: false,
      message:
        "😓 Sorry, we couldn't send your message. Please try again later.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>
