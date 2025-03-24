<!-- src/components/services/Card.vue -->
<template>
  <div>

    <!-- Card -->
    <article class="card" @click="openModal">
      <section class="header">
        <h1 class="title">{{ title }}</h1>
        <p class="link">{{ linkText }}</p>
      </section>
      <section class="img-container">
        <img :src="cardImageSrc" class="card-img" alt="Card Image" />
      </section>
      <section class="text">
        <p>{{ description }}</p>
      </section>
    </article>
  
    <!-- Trigger Modal -->
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
    title: String,
    description: String,
    cardImageSrc: String,
    linkText: { type: String, default: 'Click to learn more' },
    modalId: String,
    modalLabelId: String,
    modalTitle: String,
    modalImageSrc: String,
    modalService: String,
    modalNeeds: String,
    modalOffer: String,
    modalOfferings: Array,
    modalContact: String,
    modalContactLink: String,
    modalPricingLink: String,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
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