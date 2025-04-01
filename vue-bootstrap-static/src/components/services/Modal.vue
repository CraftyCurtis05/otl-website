<!-- src/components/services/Modal.vue -->
<template>
  <article 
    v-if="isModalVisible" 
    class="modal fade show" 
    :id="modalId" 
    tabindex="-1" 
    aria-labelledby="modalLabelId" 
    aria-hidden="false" 
    style="display: block;"
    >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <section class="modal-header">
          <h1 class="modal-title" :id="modalLabelId">About Our {{ title }}</h1>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            @click="closeModal" 
            aria-label="Close"
            title="Close"
            >
          </button>
        </section>
        <section class="modal-body">
          <aside class="modal-top">
            <div class="text col-9">
              <h2>Why do I need {{ title }}?</h2>
              <hr>
              <p>{{ modalNeeds }}</p>
            </div>
            <div class="col-3 img-container">
              <img 
                v-if="image" 
                :src="require(`@/assets/images/services/modals/${image}`)" 
                :alt="`${title} Modal Image`" 
                class="img-fluid" 
                loading="lazy"
              />
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
          <router-link 
            to="/contact" 
            class="btn btn-contact"
            aria-label="Go to contact page"
            title="Go to contact page"
            >Contact Us
          </router-link>
          <router-link 
            v-if="modalLink" 
            :to="`/pricing${modalLink}`" 
            class="btn btn-pricing" 
            aria-label="Go to pricing page" 
            title="Go to pricing page"
            >View Pricing
          </router-link>
          <button 
            type="button" 
            class="btn btn-secondary" 
            @click="closeModal" 
            aria-label="Close" 
            title="Close"
            >Close
          </button>
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
      required: true,
      default: () => []
    },
    modalContact: { 
      type: String, 
      required: true 
    },
    modalLink: { 
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
.modal {
  left: 25%;
  width: 50%;
}

.modal-content {
  border-color: #0a65b0;
  box-shadow: 0 0 15px 5px rgba(124, 237, 254, 0.4);
  margin: auto;
}

.modal-header,
.modal-footer {
  background-image: url('@/assets/images/services/modals/modal_header.png');
  background-size: cover;
  background-position: center center;
}

.modal-title {
  font-size: 2rem;
  color: white;
}

.modal-body,
.modal-top,
.modal-bottom,
h2,
hr,
li,
h3 {
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: start;
  padding: 0;
  margin: 0;
}

.modal-body {
  padding: 3%;
}

.modal-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

h2 {
  font-family: 'Helvetica', sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
}

.modal-top .text {
  width: 60%;
}

hr,
.modal-top p {
  width: 90%;
}

hr {
  padding-block: .5%;
}

.img-container {
  width: 40%;
}

img {
  height: 100%;
}

.modal-bottom,
li {
  padding-block: 1%;
}

h3 {
  font-weight: bold;
  text-align: center;
  margin: auto;
  width: 80%;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: end;
  align-items: center;
}

.btn-contact,
.btn-pricing {
  margin-inline: 1%;
  width: 30%;
}

.btn-contact:hover,
.btn-pricing:hover {
  color: white;
}

.btn-secondary {
  background: grey;
  color: black;
  margin-left: 15%;
  width: 10%;
}
</style>
  