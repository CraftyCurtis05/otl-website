<!-- src/components/services/cards/ConsultingCard.vue -->
<template>
    <div>
      <ServicesCard
        :title="'Consulting'"
        :cardImageSrc="cardImage"
        :description="'Let us tailor a solution that drives efficiency, productivity, and growth for your business.'"
        :modalId="'consultingModal'"
        :modalLabelId="'consultingModalLabel'"
        :modalTitle="'About Our Consulting Services'"
        :modalService="'consulting'"
        :modalNeeds="'Consulting helps ensure that your technology infrastructure is aligned with your business goals, optimized for performance, and scalable for future growth. By leveraging expert insights, you can make informed decisions on the best technology solutions, improve network efficiency, and proactively address potential issues before they impact your operations.'"
        :modalImageSrc="modalImage"
        :modalOffer="'At OTL Communications, our consulting services include'"
        :modalOfferings="modalOfferings"
        :modalContact="'Contact us today for a personalized quote and let us help you choose and implement the right technology solutions for your business.'"
        :modalContactLink="'/contact#consulting'"
        :modalPricingLink="'/pricing#consulting'"
      />
    </div>
</template>
  
<script>
import ServicesCard from '@/components/services/Card.vue';
import cardImage from '@/assets/images/services/cards/consulting_card.png';
import modalImage from '@/assets/images/services/modals/consulting_modal.png';

export default {
    components: {
        ServicesCard,
    },
    data() {
        return {
            cardImage,
            modalImage,
            modalOfferings: [
                'Network Design: Customized network designs to ensure your system operates seamlessly.',
                'Network Analysis: Thorough performance analyses to identify areas for improvement.',
                'IT Management: Comprehensive support including desktop management and reporting.',
            ]
        };
    }
};
</script>