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
        class="navbar-toggler custom-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarScroll" 
        aria-controls="navbarScroll" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Link List -->
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
        home: /\b(home|about|main|start|welcome|site|on the line|otl|dashboard|who we are|company|meet|mission|what we do|overview|information|what do we offer|learn about|why choose)\b/,
        services: /\b(services|service|offer|offering|solution|benefit|operation|product|capabilities|feature|provision|resource|expertise|option|function|list services|explore|our services|otl communication services|technology solutions|security solutions|communication solutions|professional services|explore services)\b/,
        consulting: /\b(consulting|business consulting|strategic consulting|IT consulting|advice|infrastructure|analysis|strategy|operational efficiency|network design consulting|technology solutions consulting)\b/,
        support: /\b(support|support service|network support|emergency support|24\/7 support|hourly support|monthly retainer support|it support services|business support services|technical support services|flexible support)\b/,
        videoSecurity: /\b(video|video security|camera|surveillance|video security systems|security cameras|monitoring|access control|network video recorders|nvr)\b/,
        voip: /\b(voip|voip solutions|voip services|communication|phone systems|voip installation|voip features|hosted voip|voip setup|voip maintenance|voice over internet protocol)\b/,
        assistance: /\b(assistance|remote support|onsite support|after hours support|emergency support)\b/,
        pricing: /\b(pricing|cost|how much|prices|quote|rate|fee|charge|value|estimate|bulk pricing|per extension|monthly retainer|hourly|discount|features)\b/,
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

.dropdown-menu {
  border: 1px solid #545454;
}

.navbar-brand,
.navbar-nav,
.dropdown-item,
form {
  display: flex;
  align-items: center;
}

.navbar-brand {
  justify-content: start;
  flex-shrink: 0;
  width: 25%;
  padding: 0;
  margin: 0;
}

.navbar-brand img {
  width: 3.25rem;
  height: auto;
}

.navbar-collapse {
  background-color: #545454;
  color: white;
  height: 3.5rem;
}

.navbar-nav {
  justify-content: center;
  margin: 0 auto;
}

.nav-item {
  font-size: 1.1rem;
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

.dropdown {
  z-index: 20;
}

.dropdown-item {
  justify-content: start;
  margin-left: 18.5%;
  width: 100%;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background-color: rgb(113, 205, 220, 0.7);
  font-weight: bold;
}

.form-container {
  width: 35%;
}

form {
  flex-direction: row;
  justify-content: center;
}

form .btn {
  width: 50%;
}

/* Large desktop screens (2560px and above) */
@media only screen and (min-width: 2560px) {

  nav {
    height: 5rem;
  }

  .nav-item {
    font-size: 1.7rem;
  }

  .navbar-brand img {
    width: 4.5rem;
  }

  form input,
  form .btn {
    height: 3rem;
    font-size: 1.5rem;
  }
}

/* Laptop screens (992px - 1430px) */
@media (min-width: 992px) and (max-width: 1430px) {

  nav,
  .navbar-collapse {
    height: 3.1rem;
  }

  .nav-item {
    font-size: 1rem;
  }

  .navbar-brand img {
    width: 2.9rem;
  }

  form input,
  form .btn {
    height: 2rem;
    font-size: .8rem;
  }
}

/* Tablet screens (up to 991px) */
@media (max-width: 991px) {
  
  nav {
    height: 3.7rem;
  }

  .navbar-toggler {
    background-color: transparent;
    border: none;
    padding: .25vw 0;
  }

  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0)' stroke-width='2' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    width: 2.75rem;
  }

  .navbar-collapse {
    background-color: transparent;
    height: 16rem;
  }

  .navbar-nav,
  .form-container {
    background-color: #545454;
    width: 35vw;
    margin-left: 66%;
    padding: 2%;
  }

  .dropdown-menu {
    background-color: #545454;
    border: none;
  }

  .nav-item {
    font-size: 1rem;
  }

  .dropdown-item {
    color: white;
  }

  .navbar-brand img {
    width: 3rem;
  }

  form input,
  form .btn {
    font-size: .8rem;
    height: 2rem;
  }

  form input {
    width: 70%;
  }

  form .btn {
    width: 30%;
  }
}

@media (max-width: 790px) {

  .form-container {
    display: none;
  }
}

/* Medium mobile screens (Up to 480px) */
@media (max-width: 480px) {
 
  .navbar-nav {
    margin-left: 50%;
    padding: 0 50% 1% 5%;
  }
}

/* Small mobile screens (Up to 340px) */
@media (max-width: 340px) {

  .navbar-nav {
    margin-left: 40%;
    padding: 0 60% 1% 5%;
  }
}
</style>