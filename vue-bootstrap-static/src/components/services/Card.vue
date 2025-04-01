<!-- src/components/services/Card.vue -->
<template>
    <article
      :id="`#${id}`"
      class="card" 
      aria-label="Click to learn more"
      title="Click to learn more"
      @click="openModal" 
      v-bind="$attrs"
      >
      <div class="body">
        <h1>{{ title }}</h1>
        <p class="link">Click to learn more</p>
        <section class="img-container">
          <img 
            v-if="image" 
            :src="require(`@/assets/images/services/cards/${image}`)" 
            :alt="`${title} Card Image`" 
            loading="lazy"
          />
          <p v-else>Image not available</p>
        </section>
        <section class="text">
          <p>{{ description }}</p>
        </section>
      </div>
    </article>

    <!-- Modal Trigger -->
    <ServicesModal
      :title="title"
      :image="image"
      :modalId="modalId"
      :modalLabelId="modalLabelId"
      :modalNeeds="modalNeeds"
      :modalOffer="modalOffer"
      :modalOfferings="modalOfferings"
      :modalContact="modalContact"
      :modalLink="modalLink"
      :isModalVisible="isModalVisible"
      @update:isModalVisible="isModalVisible = $event"
    />
</template>
  
<script>
import ServicesModal from '@/components/services/Modal.vue';

export default {
  name: 'ServicesCard',
  components: {
    ServicesModal,
  },
  props: {
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    image: { 
      type: String, 
      required: true 
    },
    modalId: { 
      type: String, 
      required: true 
    },
    modalLabelId: { 
      type: String, 
      required: true 
    },
    modalNeeds: { 
      type: String, 
      required: true 
    },
    modalOffer: { 
      type: String, 
      required: true 
    },
    modalOfferings: {
      type: Array,
      default: () => []
    },
    modalContact: { 
      type: String, 
      required: true 
    },
    modalLink: { 
      type: String, 
      required: true 
    }
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true
    }
  }
};
</script>

<style scoped>
.card .body {
  padding-block: 5%;
}

.card h1,
.card .link {
  padding: 0;
  margin: 0;
}

.card .link {
  padding-bottom: 2%;
}

.card .img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #8b8b8b;
  margin: auto;
}

.card .img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.card .text {
  padding-top: 3%;
}

.card:hover h1 {
  text-decoration: none;
}

.card:hover .img-container {
  border-color: #0a65b0;
}
</style> 