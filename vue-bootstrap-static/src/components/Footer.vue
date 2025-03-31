<!-- src/components/Footer.vue -->
<template>
  <footer aria-label="Footer">

    <!-- Scroll to Top Button Section -->
    <section class="top-btn">
      <button 
        @click="scrollToTop" 
        class="btn btn-container" 
        aria-label="Back to top"
        title="Back to top"
      >
        <div class="img-container">
          <img class="img-black" :src="image3" loading="lazy"/>
          <img class="img-white" :src="image4" loading="lazy"/>
        </div>  
      </button>
    </section>

    <div class="footer-container">

      <!-- Left side: Logo and Phrase -->
      <section class="left-container">
        <div class="logo-container">
          <router-link 
            class="navbar-brand" 
            to="/" 
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
          <span>Your Technology Needs, Our Expertise.</span>
        </div>
      </section>

      <!-- Right side: Links -->
      <section class="right-container">
        <div class="row">
          <!-- Explore Section -->
          <section class="explore-container col-2">
            <ul>
              <li class="title">Explore</li>
              <li>
                <router-link 
                  to="/"
                  class="text-white" 
                  aria-label="Go to homepage"
                  title="Go to homepage"
                  >Home
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/services" 
                  class="text-white" 
                  aria-label="Go to services page"
                  title="Go to services page"
                  >Services
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/pricing" 
                  class="text-white" 
                  aria-label="Go to pricing page"
                  title="Go to pricing page"
                  >Pricing
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/support" 
                  class="text-white" 
                  aria-label="Go to support page"
                  title="Go to support page"
                  >Support
                </router-link>
              </li>
            </ul>
          </section>

          <!-- Services Section -->
          <section class="services-container col-2">
            <ul>
              <li class="title">Services</li>
              <li>
                <router-link 
                  to="/services#consulting" 
                  class="text-white" 
                  aria-label="Go to consulting services"
                  title="Go to consulting services"
                  >Consulting
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/services#support" 
                  class="text-white" 
                  aria-label="Go to support services"
                  title="Go to support services"
                  >Support
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/services#video-security" 
                  class="text-white" 
                  aria-label="Go to video security services"
                  title="Go to video security services"
                  >Video Security
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/services#voip" 
                  class="text-white" 
                  aria-label="Go to voip services"
                  title="Go to voip services"
                  >VoIP
                </router-link>
              </li>
            </ul>
          </section>

          <!-- Support Section -->
          <section class="support-container col-2">
            <ul>
              <li class="title">Support</li>
              <li>
                <router-link 
                  to="/support#emergency" 
                  class="text-white" 
                  aria-label="Go to emergency support"
                  title="Go to emergency support"
                  >Emergency
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/support#non-emergency" 
                  class="text-white" 
                  aria-label="Go to non-emergency support"
                  title="Go to non-emergency support"
                  >Non-Emergency
                </router-link>
              </li>
            </ul>
          </section>

          <!-- Contact Us Section -->
          <section class="contact-container col-6">
            <ul>
              <li class="title">Contact Us</li>
              <li>
                <img 
                  :src="image1" 
                  class="icon" 
                  alt="Phone icon" 
                  loading="lazy"
                />
                <a 
                  href="tel:18448898885" 
                  class="text-white" 
                  aria-label="Call us at +1 (844) 889-8885"
                  title="Call us at +1 (844) 889-8885"
                  >+1 (844) 889-8885
                </a>
              </li>
              <li>
                <img 
                  :src="image2" 
                  class="icon" 
                  alt="Email icon" 
                  loading="lazy"
                />
                <a 
                  href="mailto:support@otlcommunications.com" 
                  class="text-white" 
                  aria-label="Email us at support@otlcommunications.com"
                  title="Email us at support@otlcommunications.com"
                  >support@otlcommunications.com
                </a>
              </li>
            </ul>
            <ul>
              <li class="title">Business Hours</li>
              <li 
                aria-label="Business Hours: Monday thru Friday 8:00am-5:00pm EST"
                title="Business Hours: Monday thru Friday 8:00am-5:00pm EST"
                >Monday - Friday: &nbsp; 8:00am - 5:00pm EST
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>  

    <!-- Line Divider -->
    <hr/>

    <!-- Bottom part: Copyright and Legal Links -->
    <div class="copyright-container">
      <section class="text">
        <p>&copy; 2025 Five Nine Technologies, LLC. All rights reserved.</p>
      </section>
      <nav>
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
          <li>
            <router-link 
              to="/sitemap" 
              class="link" 
              aria-label="View sitemap"
              title="View sitemap"
              >Sitemap
            </router-link>
          </li>
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
      </nav>
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
      image4: image4
    }
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
/* Base styling for all screen sizes */
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
  justify-content: center;
  align-items: center;
  width: 80%;
}

.logo-container {
  width: 15%;
}

.navbar-brand img {
  width: 100%;
}

.text-container {
  flex-wrap: wrap;
  text-align: left;
  padding: 1%;
  width: 25%;
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

/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {}

/* Laptop Screen Size Styling */
@media only screen and (min-width: 769px) and (max-width: 1279px) {
    
}

/* Tablet Screen Size Styling */
@media only screen and (min-width: 481px) and (max-width: 768px) {
    
}

/* Mobile Screen Size Styling */
@media only screen and (max-width: 480px) {
    
}
</style>