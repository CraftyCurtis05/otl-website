<template>
  <footer aria-label="Footer">

    <section class="top-btn">
      <button 
        @click="scrollToTop" 
        class="btn btn-container" 
      >
        <div class="img-container">
          <img 
            class="img-black" 
            :src="image3" 
            loading="lazy"
            aria-label="Back to top"
            title="Back to top"
          />
          <img 
            class="img-white" 
            :src="image4" 
            loading="lazy"
            aria-label="Back to top"
            title="Back to top"
          />
        </div>  
      </button>
    </section>

    <div class="footer-container">

      <section class="left-container">
        <div class="logo-container">
          <router-link
            to="/"
            class="navbar-brand"  
            aria-label="Go to homepage"
            >
            <img 
              :src="logo" 
              alt="Logo Image" 
              loading="lazy" 
              title="Go to homepage"
            />
          </router-link>
        </div>
        <div class="text-container">
          <span 
            title="Your technology needs, our expertise." 
            aria-label="Your technology needs, our expertise."
            >Your Technology Needs,<br>Our Expertise.
          </span>
        </div>
      </section>

      <section class="right-container">
        <div class="row">
          <section class="col-2">
            <ul>
              <li class="title">Explore</li>
              <li v-for="link in exploreLinks" :key="link.text">
                <router-link 
                  :to="link.to" 
                  class="text-white" 
                  :aria-label="link.label" 
                  :title="link.label"
                  >{{ link.text }}
                </router-link>
              </li>
            </ul>
          </section>

          <section class="col-2">
            <ul>
              <li class="title">Services</li>
              <li v-for="service in servicesLinks" :key="service.text">
                <router-link 
                  :to="service.to" 
                  class="text-white" 
                  :aria-label="service.label" 
                  :title="service.label"
                  >{{ service.text }}
                </router-link>
              </li>
            </ul>
          </section>

          <section class="col-2">
            <ul>
              <li class="title">Support</li>
              <li v-for="support in supportLinks" :key="support.text">
                <router-link 
                  :to="support.to" 
                  class="text-white" 
                  :aria-label="support.label" 
                  :title="support.label"
                  >{{ support.text }}
                </router-link>
              </li>
            </ul>
          </section>

          <section class="col-6">
            <ul>
              <li class="title">Contact Us</li>
              <li v-for="contact in contactLinks" :key="contact.text">
                <img 
                  :src="contact.icon" 
                  class="icon" 
                  :alt="contact.alt" 
                  loading="lazy"
                />
                <a 
                  :href="contact.href" 
                  class="text-white" 
                  :aria-label="contact.label" 
                  :title="contact.label"
                  >{{ contact.text }}
                </a>
              </li>
            </ul>
            <ul>
              <li class="title">Business Hours</li>
              <li 
                class="text-white hours" 
                :aria-label="businessHoursText" 
                :title="businessHoursText"
                >Monday - Friday: &nbsp; 8:00am - 5:00pm EST
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>

    <section class="mobile-container">
      <div class="col-2">
        <ul>
          <li class="title">Services</li>
          <li v-for="service in servicesLinks" :key="service.text">
            <router-link 
              :to="service.to" 
              class="text-white" 
              :aria-label="service.label" 
              :title="service.label"
              >{{ service.text }}
            </router-link>
          </li>
        </ul>
      </div>

      <hr/>

      <ul>
        <li class="title">Contact Us<span class="blue-arrow">></span></li>
        <li v-for="contact in contactLinks" :key="contact.text">
          <img 
            :src="contact.icon" 
            class="icon" 
            :alt="contact.alt" 
            loading="lazy"
          />
          <a 
            :href="contact.href" 
            class="text-white" 
            :aria-label="contact.label" 
            :title="contact.label"
            >{{ contact.text }}
          </a>
        </li>
      </ul>

      <hr/>

      <ul>
        <li class="title">Business Hours</li>
        <li 
          class="text-white hours" 
          :aria-label="businessHoursText" 
          :title="businessHoursText"
          >Monday - Friday: &nbsp; 8:00am - 5:00pm EST
        </li>
      </ul>

      <hr>

      <div class="copyright-container2">
        <section class="links-container">
          <ul class="links">
            <li>
              <router-link 
                to="/privacy" 
                class="link" 
                aria-label="View privacy policy" 
                title="View privacy policy"
                >Privacy Policy
              </router-link>
            </li>
            <span class="divider">|</span>
            <li>
              <router-link 
                to="/terms" 
                class="link" 
                aria-label="View terms & conditions" 
                title="View terms & conditions"
                >Terms & Conditions
              </router-link>
            </li>
          </ul>
        </section>
        <section class="text">
          <span 
            title="Copyright 2025 Five Nine Technologies, LLC. All rights reserved." 
            aria-label="Copyright 2025 Five Nine Technologies, LLC. All rights reserved."
            >&copy; 2025 Five Nine Technologies, LLC. All rights reserved.
          </span>
        </section>
      </div>
    </section>  

    <hr/>

    <div class="copyright-container">
      <section class="text">
        <span 
          title="Copyright 2025 Five Nine Technologies, LLC. All rights reserved." 
          aria-label="Copyright 2025 Five Nine Technologies, LLC. All rights reserved."
          >&copy; 2025 Five Nine Technologies, LLC. All rights reserved.
        </span>
      </section>
      <section>
        <ul class="links">
          <li>
            <router-link 
              to="/privacy" 
              class="link" 
              aria-label="View privacy policy" 
              title="View privacy policy"
              >Privacy Policy
            </router-link></li>
          <li>
            <router-link 
              to="/terms" 
              class="link" 
              aria-label="View terms & conditions" 
              title="View terms & conditions"
              >Terms & Conditions
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import logo from '@/assets/images/logo.png';
import image1 from '@/assets/images/icons/phone_icon_white.png';
import image2 from '@/assets/images/icons/email_icon_white.png';
import image3 from '@/assets/images/icons/top_arrow_black.png';
import image4 from '@/assets/images/icons/top_arrow_white.png';

export default {
  name: 'FooterComponent',
  data() {
    return {
      logo: logo,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      exploreLinks: [
        { text: 'Home', to: '/', label: 'Go to homepage' },
        { text: 'Services', to: '/services', label: 'Go to services page' },
        { text: 'Support', to: '/support', label: 'Go to support page' },
        { text: 'Pricing', to: '/pricing', label: 'Go to pricing page' }
      ],
      servicesLinks: [
        { text: 'Consulting', to: '/services#consulting', label: 'Go to consulting services' },
        { text: 'Support', to: '/services#support', label: 'Go to support services' },
        { text: 'Video Security', to: '/services#video-security', label: 'Go to video security services' },
        { text: 'VoIP', to: '/services#voip', label: 'Go to VoIP services' }
      ],
      supportLinks: [
        { text: 'Emergency', to: '/support#emergency', label: 'Go to emergency support' },
        { text: 'Non-Emergency', to: '/support#hourly', label: 'Go to non-emergency support' }
      ],
      contactLinks: [
        { text: '+1 (844) 889-8885', href: 'tel:18448898885', icon: image1, alt: 'Phone icon', label: 'Call us at +1 (844) 889-8885' },
        { text: 'support@otlcommunications.com', href: 'mailto:support@otlcommunications.com', icon: image2, alt: 'Email icon', label: 'Email us at support@otlcommunications.com' }
      ],
      businessHoursText: 'Business Hours: Monday thru Friday 8:00am-5:00pm EST'
    };
  },
  methods: {
    scrollToTop() {
      const topElement = document.getElementById('top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
footer {
  background: #545454;
  color: white;
  width: 100%;
}

.btn-container,
.btn .img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-container {
  background: transparent;
  border: none;
  margin: 0 auto;
  width: 100%;
  height: 5vh;
}

.btn .img-container {
  position: relative;
}

.btn img {
  width: 20%;
  min-width: 25px;
  height: auto;
}

.btn .img-black {
  opacity: 0;
}

.btn .img-white {
  opacity: 1;
}

.btn:hover .img-black {
  opacity: 1;
}

.btn:hover .img-white {
  opacity: 0;
}

.btn:hover {
  background-image: none;
  border-color: none;
  box-shadow: none;
  transform: scale(1);
  transform: translateY(0px);
}

.btn:hover img {
  width: 23%;
  min-width: 30px;
  transform: translateX(0px);
  transform: translateY(-1px);
}

.footer-container,
.left-container,
.text-container,
hr,
.copyright-container,
.copyright-container ul,
.links,
.link {
  display: flex;
  padding: 0;
  margin: 0;
}

.footer-container {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.left-container {
  justify-content: start;
  align-items: center;
  margin-left: 5%;
  width: 80%;
}

.logo-container {
  width: 20%;
}

.navbar-brand img {
  width: 100%;
}

.text-container {
  font-size: 1.2rem;
  font-weight: bold;
  flex-wrap: wrap;
  text-align: left;
  padding: 2%;
  width: 40%;
}

.right-container {
  padding-top: 1vw;
}

.title {
  font-weight: bold;
}

ul {
  list-style: none;
}

.text-white {
  color: white;
  text-decoration: none;
}

.text-white:hover {
  text-decoration: underline;
}

.hours:hover {
  text-decoration: none;
}

.icon {
  margin: .2vw;
  width: 5%;
}

.copyright-container {
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
}

.copyright-container,
.copyright-container ul {
  flex-direction: row;
}

.copyright-container .text,
.link {
  display: inline-block;
  font-size: .9rem;
}

.copyright-container .text {
  flex: 1;
  text-align: start;
  padding-inline-start: 1vw;
}

.links {
  flex: 1;
  justify-content: space-evenly;
  white-space: nowrap;
}

.link {
  color: black;
  padding-inline: 1.5vw;
}

.contact-container2,
.mobile-container {
  display: none;
}

@media only screen and (min-width: 2560px) {

  .text-container {
    font-size: 1.7rem;
  }

  .title,
  .text-white {
    font-size: 1.5rem;
  }

  .right-container {
    width: 80%;
  }

  .copyright-container .text,
  .link {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 1542px) {

  .text-container {
    font-size: 1rem;
  }

  .right-container {
    width: 90%;
  }

  .title,
  .text-white {
    font-size: .95rem;
  }

  .icon {
    width: 6%;
  }

  .copyright-container .text,
  .links {
    font-size: .9rem;
  }
}

@media only screen and (max-width: 1400px) {

  .logo-container {
    width: 25%;
  }
}

@media only screen and (max-width: 1180px) {

  .explore-container {
    display: none;
  }

  .left-container {
    width: 100%;
  }

  .right-container {
    width: 100%;
  }

  .services-container,
  .support-container {
    width: 20%;
  }

  .contact-container1 {
    width: 60%;
  }
}

@media only screen and (max-width: 1065px) {

  .logo-container {
    width: 35%;
  }

  .text-container {
    font-size: .95rem;
    width: 90%;
  }
    
  .right-container {
    width: 120%;
  }

  .title,
  .text-white {
    font-size: .9rem;
  }

  .copyright-container .text,
  .link {
    font-size: .8rem;
  }
}

@media only screen and (max-width: 874px) {

  .logo-container {
    margin-bottom: 10%;
    width: 35%;
  }

  .navbar-brand img {
    width: 85%;
  }

  .text-container {
    display: none;
  }
    
  .services-container,
  .support-container {
    width: 50%;
  }

  .contact-container1 {
    display: none;
  }

  .contact-container2 {
    display: flex;
    flex-direction: row;
    margin-top: 1%;
    margin-left: 5%;
    width: 100%;
  }
}

@media only screen and (max-width: 521px) {
    
  .left-container,
  .right-container,
  .contact-container2,
  .copyright-container {
    display: none;
  }

  .mobile-container {
    display: flex;
    flex-direction: column;
  }

  hr {
    margin-bottom: 2%;
  }

  .blue-arrow {
    color: #71cddc;
    margin-inline: 1vw;
  }

  .icon {
    width: 4%;
  }

  .copyright-container2 {
    display: flex;
    flex-direction: column;
  }

  .links-container {
    display: flex;
    flex-direction: row;
    margin: auto;
  }

  .link {
    color: white;
  }

  .divider {
    text-align: center;
    margin-top: 2%;
    margin-right: 5%;
  }

  .text {
    font-size: .75rem;
    padding-block: 2%;
  }
}
</style>