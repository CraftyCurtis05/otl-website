<!-- src/components/home/Card.vue -->
<template>
    <article class="card" :id="`#${id}`">
      <router-link :to="link" class="link">
        <img :src="require(`@/assets/images/home/icons/${image}`)" class="card-img" :alt="`${title} Icon Image`" />
      </router-link>
      <section class="card-body">
        <router-link :to="link" class="link">
          <h2 class="card-title"><b>{{ title }}</b></h2>
        </router-link>
        <p class="card-text text">{{ description }}</p>
      </section>
      <ul class="list text-start">
        <li class="list-item text" v-for="(item, index) in listItems" :key="index">
          <b>{{ item.label }}: </b>{{ item.description }}
        </li>
      </ul>
      <section class="card-link">
        <router-link :to="link">Learn More</router-link>
      </section>
    </article>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    listItems: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
.card {
    line-height: 1.4;
    padding: 1.2vw;
}

.link {
    text-decoration: none;
    color: black;
}

.link h2 {
    font-size: 1.3rem;
}

.card-img {
    width: 20%;
    font-size: 1.5rem;
}

.card-body {
    padding: 0.5rem;
}

.list {
    list-style-type: disc;
}

.list-item {
  padding-block: 0.3rem;
}
</style>