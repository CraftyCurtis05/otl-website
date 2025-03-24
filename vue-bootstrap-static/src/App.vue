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
</style>