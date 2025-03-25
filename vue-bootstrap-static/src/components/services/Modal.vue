<!-- src/components/services/Modal.vue -->
<template>
  <article v-if="isModalVisible" class="modal fade show" :id="modalId" tabindex="-1" aria-labelledby="modalLabelId" aria-hidden="false" style="display: block;">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <section class="modal-header">
          <h1 class="modal-title" :id="modalLabelId">{{ title }}</h1>
          <button type="button" class="btn-close btn-close-white" @click="closeModal" aria-label="Close"></button>
        </section>
        <section class="modal-body">
          <aside class="modal-top">
            <div class="col-8">
              <h2>Why do I need {{ title }}?</h2>
              <hr>
              <p>{{ modalNeeds }}</p>
            </div>
            <div class="col-4">
              <img v-if="imageSrc" :src="require(`@/assets/images/services/modals/${imageSrc}`)" :alt="`${title} Modal Image`" class="img-fluid" />
              <p v-else>Image not available</p>
            </div>
          </aside>
          <aside class="modal-bottom">
            <div>
              <h2>What do we offer?</h2>
              <hr>
              <p>{{ modalOffer }}:</p>
              <ul v-if="modalOfferings && modalOfferings.length">
                <li v-for="(offering, index) in modalOfferings" :key="index">
                  <b>{{ offering.label }}: </b>{{ offering.text }}
                </li>
              </ul>
              <p v-else>No offerings available.</p>
            </div>
          </aside>
          <aside>
            <h3>{{ modalContact }}</h3>
          </aside>
        </section>
        <section class="modal-footer">
          <router-link to="/contact" class="btn">Contact Us</router-link>
          <router-link v-if="modalPricingLink" :to="modalPricingLink" class="btn">View Pricing</router-link>
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        </section>
      </div>
    </div>
  </article>
</template>
  
<script>
export default {
  name: "ServicesModal",
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
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
      required: true,
      default: () => []
    },
    modalContact: { 
      type: String, 
      required: true 
    },
    modalPricingLink: { 
      type: String, 
      required: true 
    },
    isModalVisible: {
      type: Boolean
    }
  },  
  methods: {
    closeModal() {
      this.$emit("update:isModalVisible", false); // Emit event to parent to close the modal
    }
  }
};
</script>
  
<style scoped>
.modal-content {
  border-color: #00FFFF;;
  box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4);
}

.modal-header,
.modal-footer {
  background-image: url('@/assets/images/services/modals/modal_header.png');
  background-size: cover;
  background-position: center center;
}

.modal-title {
  font-size: 1.5rem;
  color: white;
}

.modal-body {
  text-align: start;
}

.modal-top {
  display: flex;
  flex-direction: row;
}
.btn-secondary {

}
</style>
  