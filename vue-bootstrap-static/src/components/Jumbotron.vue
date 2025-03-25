<!-- src/components/Jumbotron.vue -->
<template>
  <article class="jumbotron-deck">
    <div 
      v-for="(item, index) in jumbotrons" 
      :key="index" 
      class="jumbotron"
      :style="{ backgroundImage: `url(${item.image})` }"
    >
      <section class="container">
        <h1 class="title" v-html="item.title"></h1>
        <hr class="line">
        <p class="text" v-html="item.text"></p>
        <router-link v-if="item.buttonText" :to="item.buttonLink" class="btn btn-md" role="button">
          <span class="btn-text">{{ item.buttonText }}&nbsp;</span>
          <div class="btn-img">
            <img class="black-img" :src="blackImg" />
            <img class="white-img" :src="whiteImg" />
          </div>
        </router-link>
      </section>
    </div>
  </article>
</template>

<script>
import image1 from '@/assets/images/icons/button_arrow_black.png';
import image2 from '@/assets/images/icons/button_arrow_white.png';

export default {
  name: 'JumbotronMain',
  props: {
    jumbotrons: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      blackImg: image1,
      whiteImg: image2
    };
  }
};
</script>
  
  <style scoped>
  .jumbotron-deck {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .jumbotron {
    height: 18rem;
    background-size: cover;
    background-position: center center;
    color: white;
    padding: 2rem;
    text-align: center;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
  
  .title {
    font-size: 2.1rem;
    font-weight: bold;
  }
  
  hr {
    width: 25%;
    border: 3px solid;
    padding: 0;
    margin-block: .6rem;
  }
  
  .text {
    font-size: 1.4rem;
  }
  
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 14%;
    font-size: 1rem;
    color: black;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 0 auto;
  }
  
  .btn-img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
  }
  
  .btn-img img {
    position: absolute;
    width: 100%;
    height: auto;
  }
  
  .btn-img .black-img {
    opacity: 1;
  }
  
  .btn-img .white-img {
    opacity: 0;
  }
  
  .btn:hover {
    color: black;
    background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
    background-size: 300% 300%;
    transform: scale(1.1);
    transform: translateY(-1px);
    box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4); /* Glowing effect */
    animation: gradient-animation 4s ease infinite;
  }
  
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .btn:hover .btn-text {
    color: white;
    font-weight: 500;
    transform: scale(1.05);
  }
  
  .btn:hover .btn-img {
    width: 15%;
    transform: translateX(5px);
  }
  
  .btn:hover .black-img {
    opacity: 0;
  }
  
  .btn:hover .white-img {
    opacity: 1;
  }
  </style>