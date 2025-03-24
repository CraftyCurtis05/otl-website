<!-- src/components/Footer.vue -->
<template>
  <footer class="text-white py-5" aria-labelledby="footer-heading">
    <!-- Top part: Logo and Phrase on the left, Links on the right -->
    <div class="container">
      <div class="row mb-4">
        <!-- Left side: Logo and Phrase -->
        <section class="col-md-6 d-flex align-items-center">
          <router-link class="navbar-brand" to="/" aria-label="Go to Home">
            <img src="@/assets/images/logo.png" alt="Five Nine Technologies logo" width="120" loading="lazy" />
          </router-link>
          <span>Your Technology Needs, Our Expertise.</span>
        </section>

        <!-- Right side: Links -->
        <nav class="col-md-6 text-md-start">
          <div class="row">
            <!-- Explore Section -->
            <section class="col-md-2">
              <h5>Explore</h5>
              <ul class="list-unstyled">
                <li><router-link to="/" class="text-white" aria-label="Go to Home">Home</router-link></li>
                <li><router-link to="/services" class="text-white" aria-label="View Services">Services</router-link></li>
                <li><router-link to="/pricing" class="text-white" aria-label="View Pricing">Pricing</router-link></li>
                <li><router-link to="/support" class="text-white" aria-label="Visit Support Page">Support</router-link></li>
              </ul>
            </section>

            <!-- Services Section -->
            <section class="col-md-2">
              <h5>Services</h5>
              <ul class="list-unstyled">
                <li><router-link to="/services#consulting" class="text-white" aria-label="Consulting Services">Consulting</router-link></li>
                <li><router-link to="/services#support" class="text-white" aria-label="Support Services">Support</router-link></li>
                <li><router-link to="/services#video-security" class="text-white" aria-label="Video Security Services">Video Security</router-link></li>
                <li><router-link to="/services#voip" class="text-white" aria-label="VoIP Services">VoIP</router-link></li>
              </ul>
            </section>

            <!-- Support Section -->
            <section class="col-md-2">
              <h5>Support</h5>
              <ul class="list-unstyled">
                <li><router-link to="/support#emergency" class="text-white" aria-label="Emergency Support">Emergency</router-link></li>
                <li><router-link to="/support#non-emergency" class="text-white" aria-label="Non-Emergency Support">Non-Emergency</router-link></li>
              </ul>
            </section>

            <!-- Contact Us Section -->
            <section class="col-md-5">
              <h5>Contact Us</h5>
              <ul class="list-unstyled">
                <li>
                  <img src="@/assets/images/icons/phone_icon_white.png" width="20" alt="Phone icon" />
                  <a href="tel:18448898885" class="text-white" aria-label="Call support at +1 (844) 889-8885">+1 (844) 889-8885</a>
                </li>
                <li>
                  <img src="@/assets/images/icons/email_icon_white.png" width="25" alt="Email icon" />
                  <a href="mailto:support@otlcommunications.com" class="text-white" aria-label="Email support at support@otlcommunications.com">support@otlcommunications.com</a>
                </li>
              </ul>
              <h5>Hours of Operation</h5>
              <p>M-F &nbsp;&nbsp; 8:00am - 5:00pm EST</p>
            </section>

            <!-- Scroll to Top Button Section -->
            <section class="col-md-1 d-flex align-items-center">
              <button class="btn btn-info" aria-label="Scroll to top of the page">^</button>
            </section>
          </div>
        </nav>
      </div>

      <!-- Line Divider -->
      <hr class="text-dark" />

      <!-- Bottom part: Copyright and Legal Links -->
      <div class="row">
        <section class="col-md-6 text-md-start">
          <p class="text-dark mb-0">&copy; 2025 Five Nine Technologies, LLC. All rights reserved.</p>
        </section>
        <nav class="col-md-6 text-md-end">
          <ul class="list-unstyled d-inline-flex mb-0">
            <li class="me-3"><router-link to="/privacy" class="text-dark" aria-label="View Privacy Policy">Privacy Policy</router-link></li>
            <li class="me-3"><router-link to="/sitemap" class="text-dark" aria-label="View Sitemap">Sitemap</router-link></li>
            <li><router-link to="/terms" class="text-dark" aria-label="View Terms & Conditions">Terms & Conditions</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
};
</script>

<style scoped>
/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {

  footer {
    background: #545454;
  }
}

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