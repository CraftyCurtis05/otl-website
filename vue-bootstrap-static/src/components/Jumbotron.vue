<!-- src/components/Jumbotron.vue -->
<template>
  <article class="jumbotron-deck">
    <div 
      v-for="(item, index) in jumbotrons" 
      :key="index" 
      class="jumbotron"
      :style="{ backgroundImage: `url(${require('@/assets/images/' + item.image)})` }"
    >
      <section class="text-container">
        <h1>{{ item.title }}</h1>
        <hr>
        <p class="text">{{ item.text1 }}<span class="text-blue">{{ item.blueText }}</span>{{ item.text2 }}</p>
        <router-link v-if="item.buttonText" :to="item.buttonLink" class="btn btn-md" role="button">
          <span class="btn-text">{{ item.buttonText }}&nbsp;</span>
          <div class="img-container">
            <img class="img-black" :src="imageBlack" loading="lazy" />
            <img class="img-white" :src="imageWhite" loading="lazy" />
          </div>
        </router-link>
      </section>
    </div>
  </article>
</template>

<script>
import imageBlack from "@/assets/images/icons/button_arrow_black.png";
import imageWhite from "@/assets/images/icons/button_arrow_white.png";

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
  height: 18rem;
  text-align: center;
}

.text-container {
  margin-top: 2vw;
}

h1,
hr,
.text {
  margin: auto;
}

h1 {
  width: 30%;
  font-size: 2.1rem;
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
</style>