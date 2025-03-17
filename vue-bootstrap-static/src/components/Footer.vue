<template>
    <footer class="bg-secondary text-white py-5">
      <!-- Top part: Logo and Phrase on the left, Links on the right -->
      <div class="container">
        <div class="row mb-4">
          <!-- Left side: Logo and Phrase -->
          <div class="col-md-6 d-flex align-items-center">
            <img src="@/assets/images/otl-logo.png" alt="Logo" width="120" class="me-3" />
            <span>Our Company - Your Trusted Partner</span>
          </div>
          
          <!-- Right side: Links -->
          <div class="col-md-6">
            <div class="row">
              <!-- Explore Section -->
              <div class="col-md-3">
                <h5>Explore</h5>
                <ul class="list-unstyled">
                    <li><router-link to="/" class="text-white">Home</router-link></li>
                    <li><router-link to="/services" class="text-white">Services</router-link></li>
                    <li><router-link to="/pricing" class="text-white">Pricing</router-link></li>
                    <li><router-link to="/support" class="text-white">Support</router-link></li>
                </ul>
              </div>
              <!-- Services Section -->
              <div class="col-md-3">
                <h5>Services</h5>
                <ul class="list-unstyled">
                    <li><router-link to="/services" class="text-white">Consulting</router-link></li>
                    <li><router-link to="/services" class="text-white">Support</router-link></li>
                    <li><router-link to="/services" class="text-white">Video Security</router-link></li>
                    <li><router-link to="/services" class="text-white">VoIP</router-link></li>
                </ul>
              </div>
              <!-- Support Section -->
              <div class="col-md-3">
                <h5>Support</h5>
                <ul class="list-unstyled">
                  <li><router-link to="/support" class="text-white">Emergency</router-link></li>
                  <li><router-link to="/faq" class="text-white">Non-Emergency</router-link></li>
                </ul>
              </div>
              <!-- Contact Us Section -->
              <div class="col-md-3">
                <h5>Contact Us</h5>
                <ul class="list-unstyled">
                  <li><a href="/contact" class="text-white">Get in Touch</a></li>
                  <li><a href="/locations" class="text-white">Our Locations</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Line Divider -->
        <hr class="text-white" />
  
        <!-- Bottom part: Copyright and Legal Links -->
        <div class="row">
          <div class="col-md-6">
            <p class="mb-0">&copy; 2025 Our Company. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <ul class="list-unstyled d-inline-flex mb-0">
              <li class="me-3"><a href="/privacy" class="text-white">Privacy Policy</a></li>
              <li class="me-3"><a href="/sitemap" class="text-white">Sitemap</a></li>
              <li><a href="/terms" class="text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {

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