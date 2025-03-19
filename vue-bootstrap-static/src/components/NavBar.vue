<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg bg-secondary navbar-dark" role="navigation">
    <div class="container-fluid">
      <!-- Logo and Brand Section (Header) -->
      <header class="navbar-brand col-md-4 text-md-start">
        <router-link to="/" aria-label="Home">
          <img src="@/assets/images/otl-logo.png" alt="Logo" width="50" loading="lazy" />
        </router-link>
      </header>

      <!-- Navbar Toggler for Mobile View -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links (Collapsed on small screens) -->
      <section class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav col-md-5 d-flex justify-content-center me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <!-- Home Link -->
          <li class="nav-item px-4">
            <router-link class="nav-link" to="/" aria-current="page" role="link">Home</router-link>
          </li>

          <!-- Services Dropdown -->
          <li class="nav-item dropdown px-4">
            <button class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Services Dropdown">
              Services
            </button>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li class="px-5"><router-link class="dropdown-item" to="/services#consulting" role="link">Consulting</router-link></li>
              <li><router-link class="dropdown-item" to="/services#support" role="link">Support</router-link></li>
              <li><router-link class="dropdown-item" to="/services#video-security" role="link">Video Security</router-link></li>
              <li><router-link class="dropdown-item" to="/services#voip" role="link">VoIP</router-link></li>
            </ul>
          </li>

          <!-- Support Dropdown -->
          <li class="nav-item dropdown px-4">
            <button class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Support Dropdown">
              Support
            </button>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><router-link class="dropdown-item" to="/support#hourly" role="link">Hourly</router-link></li>
              <li><router-link class="dropdown-item" to="/support#emergency" role="link">Emergency</router-link></li>
            </ul>
          </li>

          <!-- Pricing Link -->
          <li class="nav-item px-4">
            <router-link class="nav-link" to="/pricing" role="link">Pricing</router-link>
          </li>

          <!-- Contact Link -->
          <li class="nav-item px-4">
            <router-link class="nav-link" to="/contact" role="link">Contact</router-link>
          </li>
        </ul>

        <!-- Search Section (Aside) -->
        <aside class="col-md-3 text-md-end">
          <form class="d-flex flex-row" role="search" aria-label="Search Form">
            <label for="navbarSearch" class="visually-hidden">Search</label>
            <input id="navbarSearch" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-info" type="submit" aria-label="Submit search">Search</button>
          </form>
        </aside>
      </section>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: 'NavBarComponent',
};
</script>

<style scoped>
/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {

  nav {
    height: 65px;
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