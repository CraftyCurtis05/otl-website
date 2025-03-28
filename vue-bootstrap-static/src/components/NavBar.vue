<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark" role="navigation">
    <div class="container-fluid">
      <!-- Logo and Brand Section (Header) -->
      <header class="navbar-brand">
        <router-link to="/" aria-label="Home">
          <img :src="image" alt="Logo Image" loading="eager" />
        </router-link>
      </header>

      <!-- Navbar Toggler for Mobile View -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links (Collapsed on small screens) -->
      <section class="collapse navbar-collapse text-white" id="navbarScroll">
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
        <aside class="form-container col-md-3">
          <form @submit.prevent="submitSearch" role="search" aria-label="Search Form">
            <label for="navbarSearch" class="visually-hidden">Search</label>
            <input 
              id="navbarSearch" 
              class="form-control me-2" 
              type="search"
              v-model="searchQuery"
              placeholder="Search" 
              aria-label="Search"
            >
            <button class="btn" type="submit" aria-label="Submit search">Search</button>
          </form>
        </aside>
      </section>
    </div>
  </nav>
</template>
  
<script>
import image from '@/assets/images/logo.png';

export default {
  name: 'NavBarComponent',
  data() {
    return {
      image: image,
      searchQuery: ''
    }
  },
  methods: {
    submitSearch() {
      if (this.searchQuery.trim() !== '') {
        this.handleSearchNavigation(this.searchQuery);
      }
    },
    handleSearchNavigation(query) {
      query = query.trim().toLowerCase();

      // Define RegEx patterns for each category with synonyms
      const routes = {
        home: /\b(home|about|main|start|welcome|site|on the line|otl|communication|dashboard|who we are|company|meet|mission|what we do|overview|information|what do we offer|learn about|why choose)\b/,
        services: /\b(service|offer|offering|solution|benefit|operation|product|capabilities|feature|provision|resource|expertise|option|function|list services|explore|our services|otl communication services|technology solutions|security solutions|communication solutions|professional services|explore services)\b/,
        consulting: /\b(consulting|business consulting|strategic consulting|IT consulting|advice|infrastructure|analysis|strategy|operational efficiency|network design consulting|technology solutions consulting)\b/,
        support: /\b(support|support service|network support|emergency support|24\/7 support|hourly support|monthly retainer support|it support services|business support services|technical support services|flexible support)\b/,
        videoSecurity: /\b(video security|cameras|surveillance|video security systems|security cameras|monitoring|access control|network video recorders|nvr)\b/,
        voip: /\b(voip|voip solutions|voip services|phone systems|voip installation|hosted voip|voip setup|voip maintenance|voice over internet protocol)\b/,
        assistance: /\b(assistance|remote support|onsite support|after hours support|emergency support)\b/,
        pricing: /\b(pricing|cost|how much|prices|quote|rate|fee|charge|value|estimate|bulk pricing|per extension|monthly retainer)\b/,
        contact: /\b(contact|get in touch|request a quote|reach out|phone|email|form|message|inquiries|representative|connect|correspond|talk|call|notify|approach|interact|engage|consult|speak|inquire|ping)\b/
      };

      // Iterate over routes and check if the query matches any pattern
      for (const [route, regex] of Object.entries(routes)) {
        if (regex.test(query)) {
          // Match routes based on RegEx
          if (route === 'home') {
            this.$router.push('/');
          } else if (route === 'services') {
            this.$router.push('/services');
          } else if (route === 'consulting') {
            this.$router.push('/services#consulting');
          } else if (route === 'support') {
            this.$router.push('/services#support');
          } else if (route === 'videoSecurity') {
            this.$router.push('/services#video-security');
          } else if (route === 'voip') {
            this.$router.push('/services#voip');
          } else if (route === 'assistance') {
            this.$router.push('/support');
          } else if (route === 'pricing') {
            this.$router.push('/pricing');
          } else if (route === 'contact') {
            this.$router.push('/contact');
          }
          return; // Exit after the first match
        }
      }

      // If no match is found, redirect to home and show an alert
      this.$router.push('/');
      alert('No results found for your search. Please try again with different keywords.');
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #545454;
  height: 3.5rem;
}

.navbar-brand,
.form-container {
  width: 30%;
}

.navbar-brand {
  text-align: start;
  padding: 0;
  margin: 0;
}

.navbar-brand img {
  width: 3.25rem;
}

li {
  text-align: start;
  padding: 0;
  margin: 0;
}

form {
  display: flex;
  flex-direction: row;
  align-items: center;
}

form input {
  width: 100%;
}

form .btn {
  width: 30%;
}
/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {}

/* Laptop Screen Size Styling */
@media only screen and (min-width: 769px) and (max-width: 1279px) {}

/* Tablet Screen Size Styling */
@media only screen and (min-width: 481px) and (max-width: 768px) {}

/* Mobile Screen Size Styling */
@media only screen and (max-width: 480px) {}
</style>