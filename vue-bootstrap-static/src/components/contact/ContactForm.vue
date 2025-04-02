<!-- src/components/contact/ContactForm.vue -->
<template>
  <article class="container col-7">

    <section class="error">
      <p v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</p>
      <p v-if="successMessage" class="alert alert-success">{{ successMessage }}</p>
    </section>

    <form @submit.prevent="sendEmail" ref="form">
      <section class="name-container">
        <div class="form-input">
          <label for="from_first">First Name <span class="required">*</span></label>
          <input 
            class="input" 
            type="text" 
            id="from_first" 
            name="from_first" 
            placeholder="Enter your first name"
            v-model="formData.from_first" 
            required
          />
        </div>
        <div class="form-input">
          <label for="from_last">Last Name <span class="required">*</span></label>
          <input 
            class="input" 
            type="text" 
            id="from_last" 
            name="from_last"
            placeholder="Enter your last name"
            v-model="formData.from_last" 
            required
          />
        </div>
      </section>

      <section class="form-input">
        <label for="from_email">Email Address <span class="required">*</span></label>
        <input 
          class="input" 
          type="email" 
          id="from_email" 
          name="from_email"
          placeholder="example@email.com" 
          v-model="formData.from_email" 
          required
        />
      </section>

      <section class="form-input">
        <label for="from_company">Company Name (if applicable)</label>
        <input 
          class="input" 
          type="text" 
          id="from_company" 
          name="from_company"
          placeholder="Enter company name (Leave blank if not applicable)" 
          v-model="formData.from_company"
        />
      </section>

      <section class="form-input">
        <label for="from_service">Service you are interested in: <span class="required">*</span></label>
        <select 
          class="input" 
          id="from_service" 
          name="from_service" 
          placeholder="Choose service"
          v-model="formData.from_service" 
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
        <label for="from_message">Message <span class="required">*</span></label>
        <textarea 
          id="from_message" 
          name="from_message"
          placeholder="Enter your message here..." 
          v-model="formData.from_message"
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
        from_first: '',
        from_last: '',
        from_email: '',
        from_company: '',
        from_service: '',
        from_message: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    sendEmail() {
      emailjs.send(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
        this.formData,
        process.env.VUE_APP_EMAILJS_USER_ID
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
        from_first: '',
        from_last: '',
        from_email: '',
        from_company: '',
        from_service: '',
        from_message: ''
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