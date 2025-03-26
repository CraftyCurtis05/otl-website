<!-- src/components/pricing/CardDeck.vue -->
<template>
    <div class="card-deck">
        <ServiceCard
            v-for="(card, index) in serviceCards"
            :key="index"
            :id="card.id"
            :title="card.title"
            :pricing="card.pricing"
            :contactText="card.contactText"
            :contactLink="card.contactLink"
            :learnMoreLink="card.learnMoreLink"
            :buttonText="card.buttonText"
        />
    </div>
</template>

<script>
import ServiceCard from '@/components/pricing/Card.vue';

export default {
    name: 'CardDeck',
    components: {
        ServiceCard
    },
    data() {
        return {
            serviceCards: [
                {
                    id: 'consulting',
                    title: "Consulting Services",
                    pricing: [
                        {
                            title: 'Consulting Services',
                            amounts: [
                                { amount: 'Pricing is available by proposal only' }
                            ]
                        }
                    ],
                    contactText: "Contact us to discuss your specific project and our team will provide a tailored quote.",
                    learnMoreLink: '/services#consulting'
                },
                {
                    id: 'support',
                    title: "Support Services",
                    pricing: [
                        {
                            title: 'Hourly Support (Business Hours)',
                            amounts: [
                                { amount: '$150.00 per hour (8 AM - 5 PM EST, Monday to Friday)' }
                            ]    
                        },
                        {
                            title: 'Emergency Support',
                            amounts: [
                                { amount: '$250.00 per hour (after business hours or for urgent issues)' }
                            ]    
                        },
                        {
                            title: 'Discounted Hourly Blocks (Business Hours)',
                            amounts: [
                                { label: '10 hours: ', amount: '$1,400.00' },
                                { label: '25 hours: ', amount: '$3,000.00' },
                                { label: '50 hours: ', amount: '$5,000.00' }
                            ]
                        },
                        {
                            title: 'Discounted Hourly Blocks (*Anytime Hours)',
                            amounts: [
                                { label: '10 hours: ', amount: '$2,000.00' },
                                { label: '25 hours: ', amount: '$4,250.00' },
                                { label: '50 hours: ', amount: '$6,500.00' },
                                { amount: '*Anytime hours are available 24/7, ideal for after-hours work or tasks within maintenance windows. These hours must be purchased before the project, with additional blocks available as needed.' }
                            ]
                        }
                    ],
                    contactText: "Contact us to discuss your support needs and find the best solution for your business.",
                    learnMoreLink: '/services#support'
                },
                {
                    id: 'video-security',
                    title: "Video Security Services",
                    pricing: [
                        {
                            title: 'Cameras, Door Access, and NVR Solutions',
                            amounts: [
                                { amount: 'Pricing is available by proposal only' }
                            ]
                        }
                    ],
                    contactText: "Contact us for a customized quote to fit your business security needs.",
                    learnMoreLink: '/services#video-security'
                },
                {
                    id: 'voip',
                    title: "VoIP Services",
                    pricing: [
                        {
                            title: 'Hosted VoIP Extension',
                            amounts: [
                                { label: 'Per Extension: ', amount: '*$20.00 per month (includes all standard features)' },
                                { amount: '*Discounts available for multiple extensions and multi-location setups.' }
                            ]
                        },
                        {
                            title: 'Advanced Features',
                            amounts: [
                                { label: 'Call Center: ', amount: '*Quoted' },
                                { label: 'Call Recording: ', amount: '$1.00 per GB, per month' },
                                { label: 'Conferencing: ', amount: '*Quoted (more than 3-way call)' },
                                { label: 'Dictation: ', amount: '$1.00 per month, per extension' },
                                { label: 'Hotelling: ', amount: '*Quoted' },
                                { label: 'Mobile App: ', amount: '$5.00 per month, per extension' },
                                { label: 'SMS: ', amount: '$5.00 per month, per extension' },
                                { label: 'Salesforce Connector: ', amount: '*Quoted' },
                                { label: 'Switchboard: ', amount: '$1.00 per month, per extension' },
                                { label: 'Teams Integration: ', amount: '$10.00 per month, per extension' },
                                { label: 'WhatsApp Connector: ', amount: '$5.00 per month, per extension' },
                                { label: 'Remote Extension: ', amount: '$5.00 per month, per extension' },
                                { amount: '*Quoted for custom pricing based on your needs.' },
                                { label: 'All pricing is per month, excluding taxes and fees.'}
                            ]
                        }
                    ],
                    contactText: "Contact us to learn more about our VoIP solutions and the best plan for your business.",
                    learnMoreLink: '/services#voip'
                }
            ]
        };
    }
};
</script>

<style scoped>
/* Desktop: 4 cards per row */
@media (min-width: 1280px) {}

/* Laptop: 2 cards per row */
@media (max-width: 1279px) and (min-width: 769px) {}

/* Tablet: 1 card per row */
@media (max-width: 768px) {}

/* Mobile: 1 card per row */
@media (max-width: 480px) {}
</style>