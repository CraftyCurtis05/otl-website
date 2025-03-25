<template>
  
  <nav id="top">
    <NavBarComponent />
  </nav>

  <main>
    <router-view />
  </main>

  <footer id="bottom">
    <FooterComponent />
  </footer>

</template>

<script>
import NavBarComponent from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: 'App',
  metaInfo: {
    title: 'OTL On The Line Communications Website',
    titleTemplate: '%s | OTL On The Line Communications',
  },
  components: {
    NavBarComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  caret-color: transparent;
}

main {
  display: flex;
  flex-direction: column;
}

h1,
h2 {
  font-family: 'Georgia', serif;
  color: black;
}

h2 {
  font-size: 1.5rem;
}

.banner {
  padding: .5vw;
}

.banner h1 {
  font-family: 'Helvetica', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
}

.banner h1,
.banner hr {
  padding: 0;
  margin: 0 auto;
}

.banner hr {
  width: 10%;
  color: #545454;
  border: 2px solid #545454;
}

.banner .card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.btn {
  width: 90%;
  font-size: .9rem;
  color: black;
  background: linear-gradient(to right, #80E0FC, #187EC1);
  margin: 0 auto;
}

.btn,
.btn-text {
  transition: all 0.3s ease;
}

.btn:hover {
  color: black;
  background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
  background-size: 300% 300%;
  transform: scale(1.1);
  transform: translateY(-1px);
  box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4);
  animation: gradient-animation 4s ease infinite;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.btn:hover .btn-text {
  color: white;
  font-weight: 500;
}

.link {
  text-decoration: none;
  color: #0984D0;
}

.link p {
  padding: .5rem;
}

.link:hover {
  text-decoration: underline;
}

.card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    justify-content: space-around;
    gap: 1vw;
}

/* Desktop: 4 cards per row */
@media (min-width: 1280px) {
    .card {
        flex: 1 1 calc(25% - 2rem); /* Each card takes up 25% of the row width */
    }
}

/* Laptop: 2 cards per row */
@media (max-width: 1279px) and (min-width: 769px) {
    .card {
        flex: 1 1 calc(45% - 2rem); /* Each card takes up 45% of the row width */
    }
}

/* Tablet: 1 card per row */
@media (max-width: 768px) {
    .card {
        flex: 1 1 calc(90% - 2rem); /* Each card takes up 90% of the row width */
    }
}

/* Mobile: 1 card per row */
@media (max-width: 480px) {
    .card {
        flex: 1 1 calc(100% - 2rem); /* Each card takes up 100% of the row width */
    }
}
</style>