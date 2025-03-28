<!-- src/components/Navbar.vue -->
<template>
  <nav 
    class="navbar navbar-expand-lg navbar-dark" 
    role="navigation"
    aria-label="Navigation Bar"
    >
    <div class="container-fluid">
      <!-- Logo Link  -->
      <header class="navbar-brand">
        <router-link to="/" aria-label="Go to homepage">
          <img 
            :src="image" 
            alt="Logo Image" 
            loading="eager" 
            title="Go to homepage"
          />
        </router-link>
      </header>

      <!-- Toggler Button -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarScroll" 
        aria-controls="navbarScroll" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        ><span class="navbar-toggler-icon"></span>
      </button>

      <section class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav navbar-nav-scroll">
          <!-- Home Link -->
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/" 
              aria-current="page" 
              role="link"
              active-class="active-nav-item"
              aria-label="Go to homepage"
              title="Go to homepage"
              >Home
            </router-link>
          </li>

          <!-- Services Dropdown -->
          <li class="nav-item dropdown">
            <router-link 
              class="nav-link dropdown-toggle" 
              to="/services"
              aria-expanded="false" 
              aria-label="Navigate to services page"
              data-bs-toggle="dropdown"
              active-class="active-nav-item"
              title="Navigate to services page"
              >Services
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
                <router-link 
                  class="dropdown-item" 
                  to="/services#consulting" 
                  role="link"
                  aria-label="Go to Consulting services"
                  title="Go to Consulting services"
                  @click="closeDropdown"
                  >Consulting</router-link>
              </li>
              <li>
                <router-link 
                  class="dropdown-item" 
                  to="/services#support" 
                  role="link"
                  aria-label="Go to Support services"
                  title="Go to Support services"
                  @click="closeDropdown"
                  >Support</router-link>
              </li>
              <li>
                <router-link 
                  class="dropdown-item" 
                  to="/services#video-security" 
                  role="link"
                  aria-label="Go to Video Security services"
                  title="Go to Video Security services"
                  @click="closeDropdown"
                  >Video Security</router-link>
              </li>
              <li>
                <router-link 
                  class="dropdown-item" 
                  to="/services#voip" 
                  role="link"
                  aria-label="Go to VoIP services"
                  title="Go to VoIP services"
                  @click="closeDropdown"
                  >VoIP</router-link>
              </li>
            </ul>
          </li>

          <!-- Support Dropdown -->
          <li class="nav-item dropdown">
            <router-link 
              class="nav-link dropdown-toggle" 
              to="/support"
              aria-expanded="false" 
              aria-label="Navigate to Support page"
              title="Navigate to Support page"
              data-bs-toggle="dropdown"
              active-class="active-nav-item"
              >Support
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
                <router-link 
                  class="dropdown-item" 
                  to="/support#hourly" 
                  role="link"
                  aria-label="Go to Hourly Support"
                  title="Go to Hourly Support"
                  @click="closeDropdown"
                  >Hourly
                </router-link>
              </li>
              <li>
                <router-link 
                  class="dropdown-item" 
                  to="/support#emergency" 
                  role="link"
                  aria-label="Go to Emergency Support"
                  title="Go to Emergency Support"
                  @click="closeDropdown"
                  >Emergency
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Pricing Link -->
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/pricing" 
              role="link" 
              aria-label="Navigate to Pricing page"
              title="Navigate to Pricing page"
              active-class="active-nav-item"
              >Pricing
            </router-link>
          </li>

          <!-- Contact Link -->
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/contact" 
              role="link" 
              aria-label="Navigate to Contact page"
              title="Navigate to Contact page"
              active-class="active-nav-item"
              >Contact
            </router-link>
          </li>
        </ul>

        <!-- Search Section -->
        <aside class="form-container">
          <form @submit.prevent="submitSearch" role="search" aria-label="Search Form">
            <label for="navbarSearch" class="visually-hidden">Search</label>
            <input 
              id="navbarSearch" 
              class="form-control me-2" 
              type="search"
              v-model="searchQuery"
              placeholder="Search" 
              aria-label="Enter search term"
              title="Enter search term"
            >
            <button 
              class="btn" 
              type="submit" 
              aria-label="Submit search" 
              title="Submit search"
              >Search
            </button>
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
    closeDropdown() {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('show');
      });
    },
    submitSearch() {
      if (this.searchQuery.trim() !== '') {
        this.handleSearchNavigation(this.searchQuery);
      }
    },
    handleSearchNavigation(query) {
      query = query.trim().toLowerCase();

      const routes = {
        home: /\b(home|about|main|start|welcome|site|on the line|otl|communication|dashboard|who we are|company|meet|mission|what we do|overview|information|what do we offer|learn about|why choose)\b/,
        services: /\b(services|service|offer|offering|solution|benefit|operation|product|capabilities|feature|provision|resource|expertise|option|function|list services|explore|our services|otl communication services|technology solutions|security solutions|communication solutions|professional services|explore services)\b/,
        consulting: /\b(consulting|business consulting|strategic consulting|IT consulting|advice|infrastructure|analysis|strategy|operational efficiency|network design consulting|technology solutions consulting)\b/,
        support: /\b(support|support service|network support|emergency support|24\/7 support|hourly support|monthly retainer support|it support services|business support services|technical support services|flexible support)\b/,
        videoSecurity: /\b(video|video security|camera|surveillance|video security systems|security cameras|monitoring|access control|network video recorders|nvr)\b/,
        voip: /\b(voip|voip solutions|voip services|phone systems|voip installation|hosted voip|voip setup|voip maintenance|voice over internet protocol)\b/,
        assistance: /\b(assistance|remote support|onsite support|after hours support|emergency support)\b/,
        pricing: /\b(pricing|cost|how much|prices|quote|rate|fee|charge|value|estimate|bulk pricing|per extension|monthly retainer)\b/,
        contact: /\b(contact|get in touch|request a quote|reach out|phone|email|form|message|inquiries|representative|connect|correspond|talk|call|notify|approach|interact|engage|consult|speak|inquire|ping)\b/
      };

      for (const [route, regex] of Object.entries(routes)) {
        if (regex.test(query)) {
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
          return;
        }
      }
      alert('No results found for your search. Please try again with different keywords.');
    }
  }
};
</script>

<style scoped>
/* Base styling for all screen sizes */
nav {
  background-color: #545454;
  height: 3.5rem;
}

.navbar-brand {
  text-align: start;
  width: 25%;
}

.navbar-brand img {
  width: 3.25rem;
}

.navbar-collapse {
  background-color: #545454;
  color: white;
  height: 3.5rem;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.nav-item {
  font-size: 1.1rem;
  text-align: start;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease;
}

.nav-item:hover {
  transform: scale(1.05);
}

.active-nav-item {
  text-decoration: line-through;
}

form {
  display: flex;
  flex-direction: row;
  align-items: center;
}

form .btn {
  width: 35%;
}

/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {
}

/* Laptop Screen Size Styling */
@media only screen and (min-width: 769px) and (max-width: 1279px) {}

/* Tablet Screen Size Styling */
@media only screen and (min-width: 481px) and (max-width: 768px) {}

/* Mobile Screen Size Styling */
@media only screen and (max-width: 480px) {}
</style>