<!-- src/components/pricing/CardDeck.vue -->
<template>
    <div class="card-deck">
        <ServiceCard
            v-for="(card, index) in serviceCards"
            :key="index"
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
                    title: "Consulting Services",
                    pricing: [
                        {
                            title: 'Hourly Consulting',
                            prices: [
                                { label: 'Business Hours', amount: '$150.00 per hour' },
                                { label: 'After Hours', amount: '$250.00 per hour' }
                            ]
                        }
                    ],
                    contactText: "Contact us to schedule an appointment, and our team will discuss your specific project and provide a tailored quote.",
                    contactLink: '/contact',
                    learnMoreLink: '/services#consulting',
                    buttonText: 'GET STARTED TODAY!'
                },
                {
                    title: "Support Services",
                    pricing: [
                        {
                            title: 'Hourly Support (Business Hours)',
                            prices: [
                                { label: 'Standard', amount: '$150.00 per hour' }
                            ]
                        },
                        {
                            title: 'Emergency Support',
                            prices: [
                                { label: 'Emergency', amount: '$250.00 per hour' }
                            ]
                        }
                    ],
                    contactText: "*Anytime hours are available 24/7, ideal for after-hours work or tasks within maintenance windows.",
                    contactLink: '/contact',
                    learnMoreLink: '/services#support',
                    buttonText: 'GET STARTED TODAY!'
                },
                {
                    title: "Video Security Services",
                    pricing: [
                        {
                            title: 'Cameras, Door Access, and NVR Solutions',
                            prices: [
                                { label: 'Pricing', amount: 'Available by proposal only.' }
                            ]
                        }
                    ],
                    contactText: "Contact us for a customized quote to fit your security needs.",
                    contactLink: '/contact',
                    learnMoreLink: '/services#video-security',
                    buttonText: 'GET STARTED TODAY!'
                },
                {
                    title: "VoIP Services",
                    pricing: [
                        {
                            title: 'Hosted VoIP Extension',
                            prices: [
                                { label: 'Per Extension', amount: '$20.00 per month' }
                            ]
                        },
                        {
                            title: 'Advanced Features',
                            prices: [
                                { label: 'Call Recording', amount: '$1.00 per GB per month' },
                                { label: 'Mobile App', amount: '$5.00 per month, per extension' }
                            ]
                        }
                    ],
                    contactText: "*Quoted for custom pricing based on your needs.",
                    contactLink: '/contact',
                    learnMoreLink: '/services#voip',
                    buttonText: 'GET STARTED TODAY!'
                }
            ]
        };
    }
};
</script>

<style scoped>
.card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    justify-content: space-around;
    gap: 1vw;
}

/* Desktop: 4 cards per row */
@media (min-width: 1280px) {
    .card {
        flex: 1 1 calc(25% - 2rem); /* Each card takes up 25% of the row width */
    }
}

/* Laptop: 2 cards per row */
@media (max-width: 1279px) and (min-width: 769px) {
    .card {
        flex: 1 1 calc(45% - 2rem); /* Each card takes up 45% of the row width */
    }
}

/* Tablet: 1 card per row */
@media (max-width: 768px) {
    .card {
        flex: 1 1 calc(90% - 2rem); /* Each card takes up 90% of the row width */
    }
}

/* Mobile: 1 card per row */
@media (max-width: 480px) {
    .card {
        flex: 1 1 calc(100% - 2rem); /* Each card takes up 100% of the row width */
    }
}
</style>