<!-- src/components/services/Modal.vue -->
<template>
  <article
    v-if="isModalVisible"
    class="modal fade show"
    :id="modalId"
    tabindex="-1"
    :aria-labelledby="modalLabelId"
    aria-hidden="false"
    style="display: block;"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <section class="modal-header">
          <h1 class="modal-title" :id="modalLabelId">{{ modalTitle }}</h1>
          <button
            type="button"
            class="btn-close btn-close-white"
            @click="closeModal"
            aria-label="Close"
          ></button>
        </section>
        <section class="modal-body">
          <aside class="modal-top">
            <div class="col-8">
              <h2>Why do I need {{ modalService }} services?</h2>
              <hr>
              <p>{{ modalNeeds }}</p>
            </div>
            <div class="col-4">
              <div v-if="modalImageSrc">
                <img :src="modalImageSrc" alt="Modal Image" class="img-fluid" />
              </div>
            </div>
          </aside>
          <aside class="modal-bottom">
            <div>
              <h2>What do we offer?</h2>
              <hr>
              <p>{{ modalOffer }}:</p>
              <ul v-if="modalOfferings && modalOfferings.length">
                <li v-for="(offering, index) in modalOfferings" :key="index">{{ offering }}</li>
              </ul>
            </div>
          </aside>
          <aside>
            <h3>{{ modalContact }}</h3>
          </aside>
        </section>
        <section class="modal-footer">
          <router-link v-if="modalContactLink" :to="modalContactLink" class="btn btn-link">
            Contact Us
          </router-link>
          <router-link v-if="modalPricingLink" :to="modalPricingLink" class="btn btn-link">
            View Pricing
          </router-link>
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
    modalId: { type: String, required: true },
    modalLabelId: { type: String, required: true },
    modalTitle: { type: String, required: true },
    modalService: String,
    modalNeeds: String,
    modalImageSrc: String,
    modalOffer: String,
    modalOfferings: Array,
    modalContact: String,
    modalContactLink: String,
    modalPricingLink: String,
    isModalVisible: Boolean,
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

.btn-link {
  width: 30%;
  text-decoration: none;
  font-size: .9rem;
  font-weight: 500;
  color: black;
  background: linear-gradient(to right, #80E0FC, #187EC1);
  margin: 0 auto;
  transition: all 0.3s ease;
}

.btn-link:hover {
  color: white;
  background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
  background-size: 300% 300%;
  border-color: #00FFFF;
  box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4);
  transform: scale(1.1);
  transform: translateY(-1px);
  animation: gradient-animation 4s ease infinite;
}

/* Animation for button */
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
</style>
  