<template>
  <nav 
    class="navbar navbar-expand-lg navbar-dark" 
    role="navigation" 
    aria-label="Navigation Bar"
    >
    <div class="container-fluid">

      <!-- Logo (hidden in offcanvas) -->
      <header class="navbar-brand">
        <router-link to="/" aria-label="Go to homepage">
          <img 
            :src="image" 
            alt="Logo image" 
            loading="eager" 
            title="Go to homepage"
          />
        </router-link>
      </header>

      <!-- Logo and Toggler Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        title="Toggle navigation menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Offcanvas Navbar -->
      <section 
        class="offcanvas offcanvas-end bg-dark text-white" 
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h1 class="offcanvas-title" id="offcanvasNavbarLabel">
            <section class="logo" data-bs-dismiss="offcanvas">
              <router-link to="/">
                <img 
                  :src="image" 
                  alt="Logo"
                  aria-label="Go to homepage"
                  title="Go to homepage"
                />
              </router-link>
            </section>  
          </h1>
          <button 
            type="button" 
            class="btn-close text-white" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
            title="Close menu"
            >
          </button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 lead">

            <!-- Home Link -->
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link 
                class="nav-link" 
                to="/" 
                exact-active-class="active"
                aria-label="Go to homepage"
                title="Go to homepage"
                >Home
              </router-link>
            </li>

            <!-- Services Link -->
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link 
                class="nav-link" 
                to="/services"
                exact-active-class="active"
                aria-label="Go to services page"
                title="Go to services page"
                >Services
              </router-link>
            </li>

            <!-- Support Link -->
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link 
                class="nav-link" 
                to="/support"
                exact-active-class="active"
                aria-label="Go to support page"
                title="Go to support page"
                >Support
              </router-link>
            </li>

            <!-- Pricing Link -->
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link 
                class="nav-link" 
                to="/pricing" 
                exact-active-class="active"
                aria-label="Go to pricing page"
                title="Go to pricing page"
                >Pricing
              </router-link>
            </li>

            <!-- Contact Link-->
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <router-link 
                class="nav-link" 
                to="/contact" 
                exact-active-class="active"
                aria-label="Go to contact page"
                title="Go to contact page"
                >Contact
              </router-link>
            </li>

            <!-- Search Bar -->
            <li class="nav-item search">
              <form 
                @submit.prevent="submitSearch" 
                role="search"
                aria-label="Search Form"
                title="Search form"
                >
                <input 
                  id="navbarSearch" 
                  class="form-control" 
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
                  ><i class="bi bi-search"></i>
                </button>
              </form>
            </li>
          </ul>
        </div>
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
/* Core Navbar Styling */
nav {
  background-color: #545454;
  height: 3.5rem;
}

.navbar-toggler {
  background-color: transparent;
  border: none;
  padding: .25vw 0;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0)' stroke-width='2' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  width: 2.75rem;
}

/* Logo */
.navbar-brand {
  display: flex;
  align-items: center;
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

/* Offcanvas styles */
.offcanvas-body {
  background-color: #545454;
  color: white;
}
.offcanvas-header {
  background-color: #333;
}
.offcanvas-title img {
  width: 3.25rem;
  height: auto;
}

/* Nav Items */
.navbar-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.0rem;
}
.nav-item {
  font-size: 1.1rem;
  transition: all 0.3s ease;
}
.nav-item:hover {
  transform: scale(1.05);
}
.nav-link {
  color: white;
}
.nav-link.active {
  text-decoration: line-through;
}

/* Search Form */
.nav-item.search {
  display: flex;
  align-items: center;
}
.nav-item.search form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0;
  width: 100%;
}
.nav-item.search input,
.nav-item.search .btn {
  height: 2.3rem;
  font-size: 1rem;
  padding: 0 0.5rem;
}
.nav-item.search .btn {
  color: black;
  width: 30%;
}
.nav-item.search .btn:hover {
  color: white;
}

/* Large desktop screens (2560px and above) */
@media only screen and (min-width: 2560px) {
  nav {
    height: 5rem;
  }

  .nav-item {
    font-size: 1.7rem;
  }

  .navbar-brand img,
  .offcanvas-title img {
    width: 4.5rem;
  }

  form input,
  form .btn {
    height: 3rem;
    font-size: 1.5rem;
  }
}

/* Laptop screens (992px - 1430px) */
@media only screen and (min-width: 992px) and (max-width: 1430px) {
  nav {
    height: 3.1rem;
  }

  .nav-item {
    font-size: 1rem;
  }

  .navbar-brand img,
  .offcanvas-title img {
    width: 2.9rem;
  }

  form input,
  form .btn {
    height: 2rem;
    font-size: .8rem;
  }
}

/* Tablet and smaller screens (up to 991px) */
@media only screen and (max-width: 991px) {

  .offcanvas .navbar-nav {
    flex-direction: column !important;
    align-items: flex-start;
    height: auto;
    gap: 1rem;
  }

  nav {
    height: 3.7rem;
  }

  .navbar-nav {
    padding-left: 1rem;
  }

  .navbar-brand img {
    width: 3rem;
  }

  .nav-item.search {
    display: none;
  }
}
</style>