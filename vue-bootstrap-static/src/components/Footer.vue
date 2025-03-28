<!-- src/components/Footer.vue -->
<template>
  <footer aria-label="Footer">
    <div class="footer-container">

      <!-- Left side: Logo and Phrase -->
      <section class="left">
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
        <span>Your Technology Needs, Our Expertise.</span>
      </section>

      <!-- Right side: Links -->
      <nav>
        <div class="row">
          <!-- Explore Section -->
          <section class="col-2">
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
          <section class="col-2">
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
          <section class="col-2">
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
          <section class="col-md-5">
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

          <!-- Scroll to Top Button Section -->
          <section class="col-md-1">
            <button 
              @click="scrollToTop" 
              class="btn" 
              aria-label="Back to top"
              title="Back to top"
              >^
            </button>
          </section>
        </div>
      </nav>
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

export default {
  name: 'FooterComponent',
  data() {
    return {
      logo: logo,
      image1: image1,
      image2: image2
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

.footer-container,
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

.left {
  padding-inline-end: 5vw;
}

.navbar-brand img {
  width: 15%;
}

ul {
  list-style: none;
}

li {
  color: white;
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

.btn {
  margin-block: 5vw;
  margin-inline-end: 50%;
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