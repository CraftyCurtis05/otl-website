<!-- src/views/HomeView.vue -->
<template>
    <main>
      <section class="jumbotron">
        <HomeJumbotron />
      </section>
      <section class="banner">
        <span>WHAT WE OFFER</span>
        <hr class="text-secondary p-0 m-0 mx-auto">
      </section>
      <section class="card-container d-flex flex-row flex-wrap w-100 pt-2">
        <CardDeck />
      </section>
    </main>
  </template>
  
  <script>
  import CardDeck from '@/components/home/CardDeck.vue';
  import HomeJumbotron from '@/components/home/HomeJumbotron.vue';
  
  export default {
    name: 'HomeView',
    components: {
      HomeJumbotron,
      CardDeck,
    },
  };
  </script>
  
  <style scoped>
  /* Desktop Screen Size Styling */
  @media only screen and (min-width: 1280px) {
    .banner {
      font-size: 1.3rem;
      font-weight: 600;
      padding-top: .25rem;
    }
  
    hr {
      width: 11%;
      border: 2px solid;
    }
  }
  
  /* Laptop Screen Size Styling */
  @media only screen and (min-width: 769px) and (max-width: 1279px) {}
  
  /* Tablet Screen Size Styling */
  @media only screen and (min-width: 481px) and (max-width: 768px) {}
  
  /* Mobile Screen Size Styling */
  @media only screen and (max-width: 480px) {}
  </style>