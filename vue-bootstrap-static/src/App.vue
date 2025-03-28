<template>
  
  <nav id="top">
    <NavBarComponent />
  </nav>

  <main>
    <router-view />
  </main>

  <footer>
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
};
</script>

<style>
/* Global Styling */
#app {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
  font-weight: bold;
  text-decoration: none;
}

h2 {
  font-size: 1.5rem;
}

ul,
li {
  width: 100%;
}

li {
  font-size: .99rem;
  list-style: none;
  text-align: start;
  margin: .5vw;
  margin-left: -2vw;
}

.text-blue {
  color: #80E0FC;
}

/* Jumbotron Styling */
.jumbotron {
  color: white;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  line-height: 1.3;
}

.jumbotron hr {
  width: 20%;
  color: #545454;
  border: .3rem solid #545454;
}

/* Banner Styling */
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

/* Button Styling */
.btn {
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  background: linear-gradient(to right, #80E0FC, #187EC1);
  margin: 1vw auto;
}

.btn,
.btn-text,
.btn img {
  transition: all 0.3s ease;
}

.btn .img-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 10%;
}

.btn img {
  position: absolute;
  width: 100%;
}

.btn .img-black {
  opacity: 1;
}

.btn .img-white {
  opacity: 0;
}

.btn:hover {
  background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
  background-size: 300% 300%;
  border-color: #00FFFF;
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
  transform: scale(1.05);
}

.btn:hover img {
  width: 125%;
  transform: translateX(5px);
}

.btn:hover .img-black {
  opacity: 0;
}

.btn:hover .img-white {
  opacity: 1;
}

/* Link Styling */
.link {
  color: #002373;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

/* Card Styling */
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  justify-content: space-around;
  gap: 1vw;
}

.card {
  border: 0;
  line-height: 1.5;
  padding: .25vw;
  transition: all 0.4s ease;
}

.card .card-link,
.card .body,
.card .text {
  color: black;
  text-decoration: none;
}

.card h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

.card .img-container {
  transition: all 0.3s ease;
}

.card img {
  width: 20%;
}

.card ul {
  list-style-type: disc;
}

.card li {
  text-align: start;
}

.card .link-blue {
  color: #002373;
  font-style: italic;
  text-decoration: none;
}

.card:hover {
  background-color: #b1b1b1;
  transform: scale(1.05);
  z-index: 10;
  cursor: pointer;
}

.card:hover .link,
.card:hover h1 {
  text-decoration: underline;
}

.card:hover .img-container {
  border-color: #00FFFF;
  box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.9);
  transform: translateY(-1px);
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