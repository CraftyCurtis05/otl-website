<!-- src/components/contact/ContactForm.vue -->
<template>
  <article class="container col-7">
    <!-- Error Handling -->
    <section class="error">
      <p v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</p>
      <p v-if="successMessage" class="alert alert-success">{{ successMessage }}</p>
    </section>

    <form @submit.prevent="sendEmail" ref="form">
      <section class="name-container">
        <div class="form-input">
          <label for="first-name">First Name <span class="required">*</span></label>
          <input 
            class="input" 
            type="text" 
            id="first_name" 
            name="first_name" 
            placeholder="Enter your first name"
            v-model="formData.firstName" 
            required
          />
        </div>
        <div class="form-input">
          <label for="last-name">Last Name <span class="required">*</span></label>
          <input 
            class="input" 
            type="text" 
            id="last_name" 
            name="last_name"
            placeholder="Enter your last name"
            v-model="formData.lastName" 
            required
          />
        </div>
      </section>

      <section class="form-input">
        <label for="email">Email Address <span class="required">*</span></label>
        <input 
          class="input" 
          type="email" 
          id="from_email" 
          name="email"
          placeholder="example@email.com" 
          v-model="formData.fromEmail" 
          required
        />
      </section>

      <section class="form-input">
        <label for="company">Company Name (if applicable)</label>
        <input 
          class="input" 
          type="text" 
          id="company" 
          name="company"
          placeholder="Enter company name (Leave blank if not applicable)" 
          v-model="formData.company"
        />
      </section>

      <section class="form-input">
        <label for="service">Service you are interested in: <span class="required">*</span></label>
        <select 
          class="input" 
          id="service" 
          name="service" 
          placeholder="Choose service"
          v-model="formData.service" 
          required
        >
          <option value="" disabled selected>Select an option</option>
          <option value="consulting">Consulting</option>
          <option value="support">Support</option>
          <option value="video-security">Video Security</option>
          <option value="voip">VoIP</option>
          <option value="general">General Inquiry</option>
        </select>
      </section>

      <section class="form-input">
        <label for="message">Message <span class="required">*</span></label>
        <textarea 
          id="message" 
          name="message"
          placeholder="Enter your message here..." 
          v-model="formData.message"
          rows="5"
          required
        ></textarea>
      </section>

      <button type="submit" class="btn">Send</button>
    </form>
  </article>
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
        fromEmail: '',
        company: '',
        service: '',
        message: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    sendEmail() {
      emailjs.send(
        "service_ug8f75f", // EmailJS Service ID
        "template_bqvi72t", // EmailJS Template ID
        {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          fromEmail: this.formData.fromEmail,
          company: this.formData.company,
          service: this.formData.service,
          message: this.formData.message
        },
        "PBn8z_QyI9TZT19D7" // EmailJS User ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        this.successMessage = "Your message has been sent successfully!";
        this.resetForm();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.errorMessage = "Something went wrong. Please try again later.";
        this.clearMessages();
      });
    },
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        fromEmail: '',
        company: '',
        service: '',
        message: ''
      };
      this.clearMessages();
    },
    clearMessages() {
      setTimeout(() => {
        this.successMessage = "";
        this.errorMessage = "";
      }, 4000);
    }
  }
};
</script>

<style scoped>
.container {
  text-align: start;
  padding-block: 2vw;
  padding-inline: 8vw;
  margin: 0 auto;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.name-container {
  display: flex;
  flex-direction: row;
}

.form-input {
  display: flex;
  flex-direction: column;
}

label {
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

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin: auto;
  margin-inline: 40%;
}
</style>