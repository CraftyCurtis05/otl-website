<!-- src/components/services/Card.vue -->
<template>
    <article class="card" @click="openModal" v-bind="$attrs">
      <section class="header">
        <h1 class="title">{{ title }}</h1>
        <p class="link">Click to learn more</p>
      </section>
      <section class="img-container">
        <img v-if="image" :src="require(`@/assets/images/services/cards/${image}`)" class="card-img" :alt="`${title} Card Image`" />
        <p v-else>Image not available</p>
      </section>
      <section class="text">
        <p>{{ description }}</p>
      </section>
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
      :modalPricingLink="modalPricingLink"
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
    modalPricingLink: { 
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

</style>  