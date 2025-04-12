<template>
  <article class="jumbotron-deck">
    <div 
      v-for="(item, index) in jumbotrons" 
      :key="index" 
      class="jumbotron"
      :style="{ backgroundImage: `url(${require('@/assets/' + item.image)})` }"
    >
      <section class="text-container">
        <h1 class="text-white">{{ item.title }}</h1>
        <hr>
        <p class="text">{{ item.text1 }}<span class="text-blue">{{ item.blueText }}</span>{{ item.text2 }}</p>
        <router-link 
          v-if="item.buttonText" 
          :to="item.buttonLink" 
          class="btn btn-md" 
          role="button"
          :aria-label="item.buttonLabel"
          :title="item.buttonLabel"
          ><span class="btn-text">{{ item.buttonText }}&nbsp;</span>
          <div class="img-container">
            <img 
              class="img-black" 
              :src="imageBlack" 
              loading="lazy" 
            />
            <img 
              class="img-white" 
              :src="imageWhite" 
              loading="lazy" 
            />
          </div>
        </router-link>
      </section>
    </div>
  </article>
</template>

<script>
import imageBlack from "@/assets/icons/button_arrow_black.webp";
import imageWhite from "@/assets/icons/button_arrow_white.webp";

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
      imageBlack: imageBlack,
      imageWhite: imageWhite
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 45vh;
}

.text-container {
  margin-top: 1vw;
}

h1,
hr,
.text {
  margin: auto;
}

h1 {
  width: 30%;
  font-size: 2.1rem;
  font-weight: bold;
}

h1,
.text {
  margin-block: .5vw;
}

.text {
  width: 70%;
  font-size: 1.3rem;
}

.btn {
  display: flex;
  flex-direction: row;
  width: 10%;
}

@media only screen and (min-width: 2001px) {

  h1,
  .text {
    width: 60%;
  }

  h1 {
    font-size: 3rem;
    width: 35%;
  }

  .text {
    font-size: 1.5rem;
  }

  .btn {
    font-size: 1.2rem;
    width: 15rem;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 2000px) {

  h1 {
    font-size: 2rem;
    width: 30%;
  }

  .text {
    font-size: 1.25rem;
    width: 60%;
  }

  .btn {
    font-size: 1rem;
    width: 11rem;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1439px){

  h1 {
    font-size: 1.8rem;
    width: 30%;
  }

  .text {
    font-size: 1.15rem;
  }

  .btn {
    font-size: .95rem;
    width: 11rem;
  }
}

@media only screen and (max-width: 1217px) {

  h1 {
    width: 35%;
  }

  .text {
    width: 75%;
  }
}

@media only screen and (max-width: 1043px) {
  
  h1 {
    width: 40%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {

  h1 {
    font-size: 1.6rem;
    width: 35%;
  }

  .text {
    font-size: 1rem;
  }

  .btn {
    font-size: .9rem;
    width: 10rem;
  }
}

@media only screen and (max-width: 927px) {

  h1 {
    width: 40%;
  }

  .text {
    width: 85%;
  }
}

@media only screen and (max-width: 811px) {

  h1 {
    width: 45%;
  }
}

@media only screen and (min-width: 481px) and (max-width: 767px) {

  h1 {
    font-size: 1.5rem;
    width: 45%;
  }

  .text {
    font-size: .95rem;
    width: 90%;
  }

  .btn {
    font-size: .8rem;
    width: 9rem;
  }
}

@media only screen and (max-width: 690px) {

  h1 {
    width: 55%;
  }

  .text {
    width: 95%;
  }
}

@media only screen and (max-width: 553px) {

  h1 {
    width: 65%;
  }
}

@media only screen and (max-width: 480px) {

  .jumbotron {
    height: 35vh;
  }

  h1 {
    font-size: 1.35rem;
    width: 70%;
  }

  .text {
    font-size: .9rem;
  }

  .btn {
    font-size: .75rem;
    width: 8rem;
  }
}

@media only screen and (max-width: 417px) {
  
  h1 {
    width: 77%;
  }

  .text {
    width: 99%;
  }
}

@media only screen and (max-width: 380px) {

  h1 {
    width: 90%;
  }
}
</style>