<template>
  <main class="col-md-7 text-start">
    <form @submit.prevent="sendEmail" ref="form">

      <section class="d-flex flex-row">
        <div class="form-input d-flex flex-column">
          <label for="first-name">First Name <span class="required">*</span></label>
          <input class="input" type="text" id="first_name" name="first_name" v-model="formData.firstName" required>
        </div>
        <div class="form-input d-flex flex-column">
          <label for="last-name">Last Name <span class="required">*</span></label>
          <input class="input" type="text" id="last_name" name="last_name" v-model="formData.lastName" required>
        </div>
      </section>

      <section class="form-input d-flex flex-column">
        <label for="email">Email Address <span class="required">*</span></label>
        <input class="input" type="email" id="email" name="user_email" v-model="formData.email" required>
      </section>

      <section class="form-input d-flex flex-column">
        <label for="company">Company Name (if applicable)</label>
        <input class="input" type="text" id="company" name="company" v-model="formData.company">
      </section>

      <section class="form-input d-flex flex-column">
        <label for="service">Service you are interested in: <span class="required">*</span></label>
        <select class="input" type="text" id="service" name="service" v-model="formData.service" required>
          <option value="consulting">Consulting</option>
          <option value="support">Support</option>
          <option value="video-security">Video Security</option>
          <option value="voip">VoIP</option>
          <option value="general">General Inquiry</option>
        </select>
      </section>

      <section class="form-input d-flex flex-column">
        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" name="message" v-model="formData.message" required></textarea>
      </section>

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
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
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
        this.formData = { firstName: '', lastName: '', email: '', company: '', service: '', message: '' }; // Clear form
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
main {
  padding-block: 2vw;
  padding-inline: 8vw;
}

label {
  font-family: 'Helvetica', sans-serif;
  font-size: 1.2rem;
}

.required {
  color: #CC0000;
}

.form-input {
  width: 100%;
  padding: .75vw;
}

.input {
  height: 2vw;
}

textarea {
  height: 10vw;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>