<!-- src/components/support/SupportList.vue -->
<template>
    <article class="list-container">
      <section v-for="(item, index) in supportInfo" :key="index" class="list">
        <h1><router-link to="#contact" class="title">{{ item.title }}</router-link></h1>
        <hr>
        <ul>
          <li v-for="(subItem, subIndex) in item.details" :key="subIndex" class="list-item">
            <b>{{ subItem.label }}:</b>{{ subItem.text }}
          </li>
        </ul>
      </section>
  
      <!-- More Info Section -->
      <section class="more-info">
        <div class="btn-container">
          <router-link class="btn btn-md" to="/services" role="button">
            <span class="btn-text">LEARN MORE</span>
          </router-link>
          <router-link class="btn btn-md" to="/pricing" role="button">
            <span class="btn-text">VIEW PRICING</span>
          </router-link>
        </div>
  
        <div class="contact-info">
          <router-link to="/contact" class="link">
            <p class="link">Have questions or need assistance?</p>
          </router-link>
          <p class="text">Reach out to learn more about how we can support your IT needs and ensure a smooth and efficient operation for your business.</p>
          <router-link class="btn btn-md" to="/contact" role="button">
            <span class="btn-text">CONTACT US</span>
          </router-link>
        </div>
      </section>
    </article>
  </template>
  
  <script>
  export default {
    name: 'SupportList',
    data() {
      return {
        supportInfo: [
          {
            title: 'Hourly Support',
            details: [
              { label: 'Availability', text: 'Monday to Friday, 8 AM - 5 PM EST.' },
              { label: 'Flexible', text: 'Pay for only the support you need, when you need it.' },
              { label: 'Discounted Hourly Blocks', text: 'Save on larger support needs by purchasing hourly blocks in advance.' }
            ]
          },
          {
            title: 'Monthly Retainer',
            details: [
              { label: 'Comprehensive IT Support', text: 'Ongoing management of your IT systems, including network management and VoIP services.' },
              { label: 'Peace of Mind', text: 'Ensure your systems are always in capable hands with a fixed monthly retainer.' }
            ]
          },
          {
            title: 'Emergency Support',
            details: [
              { label: 'After-Hours Assistance', text: 'Reach us for urgent issues outside of regular business hours.' },
              { label: 'Maintenance Windows', text: 'We offer support for projects that require work during maintenance windows, minimizing operational disruption.' }
            ]
          },
          {
            title: 'Additional Information',
            details: [
              { label: 'Remote Support', text: 'All support is provided remotely via Teams or Zoom. Remote access to your systems must be granted.' },
              { label: 'Onsite Support', text: 'Onsite support is available, and travel expenses will be billed at cost.' }
            ]
          }
        ]
      };
    }
  };
  </script>

<style scoped>
.title {
  color: black;
  text-decoration: none;
}

.title:hover {
  text-decoration: underline;
}
</style>