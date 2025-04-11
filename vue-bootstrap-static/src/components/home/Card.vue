<template>
    <article 
      class="card" 
      :id="`${id}`"         
      aria-label="Click to learn more" 
      title="Click to learn more"
      >
      <router-link :to="`/services#${id}`" class="card-link">
        <img 
          :src="require(`@/assets/images/home/icons/${image}`)" 
          :alt="`${title} Icon Image`" 
          loading="lazy"
        />
        <section class="body">
          <h1>{{ title }}</h1>
          <p class="text">{{ description }}</p>
        </section>
        <ul class="list">
          <li class="text" v-for="(item, index) in list" :key="index">
            <b>{{ item.label }}: </b>{{ item.description }}
          </li>
        </ul>
      <section class="link">Learn More</section>
    </router-link>
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
    list: {
      type: Array,
      required: true,
    }
  }
};
</script>