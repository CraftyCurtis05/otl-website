<!-- src/components/support/SupportList.vue -->
<template>
    <article class="list-container">
      <section v-for="(item, index) in supportInfo" :key="index" class="list">
        <h1 class="title">{{ item.title }}</h1>
        <hr class="line">
        <ul class="list-items">
          <li v-for="(subItem, subIndex) in item.details" :key="subIndex" class="list-item">
            <b>{{ subItem.label }}:</b> {{ subItem.text }}
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
.list-container {
    margin: 1% 5%;
}

.list {
    text-align: left;
    padding: .3vw;
}

.title {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
}

.line {
    width: 10%;
    border: 2px solid;
    margin: .25rem;
}

.list-items {
    list-style: disc;
}

.more-info {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
}

.link {
    font-size: 1.1rem;
    font-weight: bold;
    color: #0984D0;
}

.btn-container {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 1rem auto;
}

.btn-container .btn {
    margin-inline: 1rem;
}

.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-size: 1rem;
    color: black;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 0 auto;
}

.btn,
.btn-text,
.btn-img {
    transition: all 0.3s ease;
}

.btn-img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: auto;
}

.btn-img img {
    position: absolute;
    width: 100%;
    height: auto;
}

.btn-img .black-img {
    opacity: 1;
}

.btn-img .white-img {
    opacity: 0;
}

.btn:hover {
    color: black;
    background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
    background-size: 300% 300%;
    transform: scale(1.1);
    transform: translateY(-1px);
    box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4); /* Glowing effect */
    border-color: #00FFFF; /* Optional: Change the border color to match the glow */
    animation: gradient-animation 4s ease infinite;
}

/* Animation for button */
@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.btn:hover .btn-text {
    color: white;
    font-weight: 500;
    transform: scale(1.05); /* Scale only the text inside the button */
}

.btn:hover .btn-img {
    width: 15%;
    transform: translateX(5px);
}

.btn:hover .black-img {
    opacity: 0;
}

.btn:hover .white-img {
    opacity: 1;
}
</style>