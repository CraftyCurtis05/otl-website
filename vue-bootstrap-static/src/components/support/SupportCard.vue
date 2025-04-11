<template>
  <article class="list-container">
    <section class="list" v-for="(item, index) in supportInfo" :key="index" :id="item.id">
      <h1>{{ item.title }}</h1>
      <hr>
      <ul>
        <li v-for="(subItem, subIndex) in item.details" :key="subIndex" class="list-item">
          <b>{{ subItem.label }}: </b>{{ subItem.text }}
        </li>
      </ul>
    </section>

    <section class="more-info">
      <div class="btn-container">
        <router-link 
          class="btn btn-md" 
          to="/services" 
          role="button" 
          aria-label="Go to services page" 
          title="Go to services page"
          >
          <span class="btn-text">LEARN MORE</span>
        </router-link>
        <router-link 
          class="btn btn-md" 
          to="/pricing" 
          role="button" 
          aria-label="Go to pricing page" 
          title="Go to pricing page"
          >
          <span class="btn-text">VIEW PRICING</span>
        </router-link>
      </div>

      <div class="contact-info">
        <router-link 
          to="/contact" 
          class="link" 
          aria-label="Go to contact page" 
          title="Go to contact page"
          >
          <p class="link">Have questions or need assistance?</p>
        </router-link>
        <p class="text">Reach out to learn more about how we can support your IT needs and ensure a smooth and efficient operation for your business.</p>
        <router-link 
          class="btn btn-md" 
          to="/contact" 
          role="button" 
          aria-label="Go to contact page" 
          title="Go to contact page"
          >
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
          id: 'hourly',
          title: 'Hourly Support',
          details: [
            { label: 'Availability', text: 'Monday to Friday, 8 AM - 5 PM EST.' },
            { label: 'Flexible', text: 'Pay for only the support you need, when you need it.' },
            { label: 'Discounted Hourly Blocks', text: 'Save on larger support needs by purchasing hourly blocks in advance.' }
          ]
        },
        {
          id: 'monthly',
          title: 'Monthly Retainer',
          details: [
            { label: 'Comprehensive IT Support', text: 'Ongoing management of your IT systems, including network management and VoIP services.' },
            { label: 'Peace of Mind', text: 'Ensure your systems are always in capable hands with a fixed monthly retainer.' }
          ]
        },
        {
          id: 'emergency',
          title: 'Emergency Support',
          details: [
            { label: 'After-Hours Assistance', text: 'Reach us for urgent issues outside of regular business hours.' },
            { label: 'Maintenance Windows', text: 'We offer support for projects that require work during maintenance windows, minimizing operational disruption.' }
          ]
        },
        {
          id: 'location',
          title: 'Location Information',
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
.list {
  padding-inline: 5%;
  padding-block: .5%;
}

h1,
hr,
li {
  color: black;
  text-align: start;
  text-decoration: none;
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 1.3rem;
  font-weight: bold;
}

hr {
  color: #545454;
  border: .2rem solid #545454;
  margin-block: .3%;
  width: 15%;
}

li {
  margin-block: .5%;
}

.btn-container {
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-bottom: 2%;
  width: 25%;
}

.btn {
  margin: 0;
  margin-inline: 5%;
}

.contact-info {
  width: 40%;
  margin: auto;
  margin-bottom: 2%;
}

.contact-info .text {
  font-weight: bold;
}

@media only screen and (min-width: 2560px) {

  hr {
    width: 10%;
  }
}

@media only screen and (max-width: 1024px) {

  h1 {
    font-size: 1.2rem;
  }

  hr {
    border: .15rem solid #545454;
    width: 18%;
  }

  li {
    font-size: .95rem;
  }

  .btn-container {
    width: 40%;
  }

  .btn {
    font-size: .9rem;
    width: 50%;
  }

  .contact-info {
    font-size: .95rem;
    width: 70%;
  }
}

@media only screen and (max-width: 768px) {

  h1 {
    font-size: 1.05rem;
  }

  hr {
    border: .15rem solid #545454;
    width: 22%;
  }

  li {
    font-size: .9rem;
  }

  .btn-container {
    width: 60%;
  }

  .btn {
    font-size: .8rem;
    width: 50%;
  }

  .contact-info {
    font-size: .9rem;
    width: 80%;
  }
}

@media only screen and (max-width: 480px) {

  h1 {
    font-size: .95rem;
  }

  hr {
    width: 35%;
  }

  li {
    font-size: .85rem;
  }

  .btn-container {
    width: 90%;
  }

  .btn {
    font-size: .75rem;
  }

  .contact-info {
    font-size: .85rem;
    width: 90%;
  }
}

@media only screen and (max-width: 375px) {

  hr {
    width: 40%;
  }
}
</style>