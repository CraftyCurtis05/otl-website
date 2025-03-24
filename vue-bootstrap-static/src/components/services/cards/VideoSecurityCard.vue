<!-- src/components/services/cards/VideoSecurityCard.vue -->
<template>
    <div>
      <ServicesCard
        :title="'Video Security'"
        :cardImageSrc="cardImage"
        :description="'Secure your business with advanced video surveillance for peace of mind.'"
        :modalId="'videoSecurityModal'"
        :modalLabelId="'videoSecurityModalLabel'"
        :modalTitle="'About Our Video Security Services'"
        :modalService="'video security'"
        :modalNeeds="'Video security is essential for protecting your business from potential threats, ensuring the safety of employees, assets, and property. With advanced surveillance systems, you can monitor critical areas in real-time, deter criminal activity, and have access to valuable video footage for security and compliance purposes.'"
        :modalImageSrc="modalImage"
        :modalOffer="'At OTL Communications, we provide tailored video security solutions using the complete line of Ubiquiti products, including'"
        :modalOfferings="modalOfferings"
        :modalContact="'Contact us for a personalized quote and to learn more about how we can help safeguard your business.'"
        :modalContactLink="'/contact#video-security'"
        :modalPricingLink="'/pricing#video-security'"
      />
    </div>
</template>
  
<script>
import ServicesCard from '@/components/services/Card.vue';
import cardImage from '@/assets/images/services/cards/video_security_card.png';
import modalImage from '@/assets/images/services/modals/video_security_modal.png';

export default {
    components: {
        ServicesCard,
    },
    data() {
        return {
            cardImage,
            modalImage,
            modalOfferings: [
                'Cameras: High-quality surveillance cameras designed for reliable performance and clear footage.',
                'Door Access: Secure, streamlined access control solutions to monitor and manage entry points.',
                'NVR (Network Video Recorder): Robust systems to store, manage, and review your video footage with ease.',
            ]
        };
    }
};
</script>