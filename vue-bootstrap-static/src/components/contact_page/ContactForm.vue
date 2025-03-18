<template>
    <main class="col-md-7 text-start p-5">
        <form @submit.prevent="sendEmail" ref="form">
        <div>
            <label for="first-name">First Name:</label>
            <input type="text" id="first_name" name="first_name" v-model="formData.firstName" required>
        </div>
        <div>
            <label for="last-name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" v-model="formData.lastName" required>
        </div>
        <div>
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="user_email" v-model="formData.email" required>
        </div>
        <div>
            <label for="company">Company Name:</label>
            <input type="text" id="company" name="company" v-model="formData.company">
        </div>
        <div>
            <label for="service">Service you are interested in:</label>
            <input type="text" id="service" name="service" v-model="formData.service">
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Send</button>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </form>
    </main>
  </template>

  <script>
  import emailjs from '@emailjs/browser';

  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        successMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      async sendEmail() {
        try {
          await emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            this.$refs.form,
            {
              publicKey: 'YOUR_PUBLIC_KEY',
            }
          );
          this.successMessage = 'Email sent successfully!';
          this.errorMessage = '';
          this.formData = { name: '', email: '', message: '' }; // Clear form
        } catch (error) {
          console.error('Failed to send email:', error);
          this.errorMessage = 'Failed to send email. Please try again later.';
          this.successMessage = '';
        }
      }
    }
  };
  </script>

  <style scoped>
  .success-message {
    color: green;
    margin-top: 10px;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>