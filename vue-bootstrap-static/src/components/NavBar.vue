<template>
  <nav 
    class="navbar navbar-expand-lg navbar-dark" 
    role="navigation" 
    aria-label="Navigation Bar"
  >
    <div class="container-fluid">

      <header class="navbar-brand">
        <router-link to="/">
          <img 
            :src="image" 
            alt="Logo image" 
            loading="lazy"
            aria-label="Go to homepage"
            title="Go to homepage"
          />
        </router-link>
      </header>

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
                  alt="Logo image"
                  loading="lazy"
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
            <li
              class="nav-item"
              v-for="(link, index) in navLinks"
              :key="index"
              data-bs-dismiss="offcanvas"
            >
              <router-link 
                class="nav-link" 
                :to="link.to" 
                exact-active-class="active"
                :aria-label="`Go to ${link.aria}`"
                :title="`Go to ${link.aria}`"
              >
                {{ link.label }}
              </router-link>
            </li>

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
import image from '@/assets/logo.webp';

export default {
  name: 'NavBarComponent',
  data() {
    return {
      image: image,
      searchQuery: '',
      navLinks: [
        { to: '/', label: 'Home', aria: 'homepage' },
        { to: '/services', label: 'Services', aria: 'services page' },
        { to: '/support', label: 'Support', aria: 'support page' },
        { to: '/pricing', label: 'Pricing', aria: 'pricing page' },
        { to: '/contact', label: 'Contact', aria: 'contact page' }
      ]
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

      const routeMap = {
        home: '/',
        services: '/services',
        consulting: '/services#consulting',
        support: '/services#support',
        videoSecurity: '/services#video-security',
        voip: '/services#voip',
        assistance: '/support',
        pricing: '/pricing',
        contact: '/contact',
      };

      const searchRoutes = {
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

      for (const [route, regex] of Object.entries(searchRoutes)) {
        if (regex.test(query)) {
          this.$router.push(routeMap[route]);
          return;
        }
      }
      alert('No results found for your search.');
    }
  }
};
</script>

<style scoped>
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

.nav-item.search {
  display: flex;
  align-items: center;
}

form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0;
  width: 100%;
}

form input,
form .btn {
  height: 2.3rem;
  font-size: 1rem;
  padding: 0 0.5rem;
}

form .btn {
  color: black;
  width: 30%;
}

form .btn:hover {
  color: white;
}

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