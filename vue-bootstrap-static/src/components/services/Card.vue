<!-- src/components/services/Card.vue -->
<template>
  <div>
    <!-- Card -->
    <article class="card" @click="openModal">
      <section class="header">
        <h1 class="title">{{ title }}</h1>
        <p class="link">Click to learn more</p>
      </section>
      <section class="img-container">
        <img :src="cardImageSrc" class="card-img" alt="Card Image" />
      </section>
      <section class="text">
        <p>{{ description }}</p>
      </section>
    </article>

    <!-- Modal Trigger -->
    <ServicesModal
      :modalId="modalId"
      :modalLabelId="modalLabelId"
      :modalTitle="modalTitle"
      :modalService="modalService"
      :modalNeeds="modalNeeds"
      :modalImageSrc="modalImageSrc"
      :modalOffer="modalOffer"
      :modalOfferings="modalOfferings"
      :modalContact="modalContact"
      :modalContactLink="modalContactLink"
      :modalPricingLink="modalPricingLink"
      :isModalVisible="isModalVisible"
      @update:isModalVisible="isModalVisible = $event"
    />
  </div>
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
    cardImageSrc: { 
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
    modalTitle: { 
      type: String, 
      required: true 
    },
    modalImageSrc: { 
      type: String, 
      required: true 
    },
    modalService: { 
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
    modalContactLink: { 
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
.card {
  width: 390px;
  border: 0;
  padding: .5rem;
  line-height: 1.2;
  transition: all 0.4s ease;
}

.title {
  font-size: 1.35rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}

.link {
  text-decoration: none;
  font-size: .95rem;
  font-style: italic;
  color: #002373;
}

.img-container {
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 5px solid #545454;
  border-radius: 50%;
  margin: auto;
  margin-bottom: .5rem;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text {
  width: 60%;
  margin: auto;
}

.card:hover {
  background-color: #8b8b8b;
  transform: scale(1.1);
  z-index: 10;
}

.card:hover .link {
  text-decoration: underline;
}

.card:hover .img-container {
  border-color: #00FFFF;
  box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.9);
  transform: translateY(-1px);
}
</style>  