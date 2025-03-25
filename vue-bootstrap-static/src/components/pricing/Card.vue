<!-- src/components/pricing/Card.vue -->
<template>
    <article class="card">
        <h1 class="title">{{ title }}</h1>
        
        <!-- Dropdown Container for Pricing Information -->
        <section v-if="pricing" class="dropdown-container">
            <details v-for="(item, index) in pricing" :key="index" class="dropdown">
                <summary>{{ item.title }}</summary>
                <ul>
                    <li v-for="(price, idx) in item.prices" :key="idx">
                        <b>{{ price.label }}:</b> {{ price.amount }}
                    </li>
                </ul>
            </details>
        </section>

        <!-- Contact Section -->
        <section class="contact">
            <p v-if="contactText" class="text">{{ contactText }}</p>

            <router-link :to="contactLink" class="btn btn-md" role="button">
                <span class="btn-text">{{ buttonText }}</span>
            </router-link>

            <router-link :to="learnMoreLink" class="link">
                <p>Learn More About Our {{ title }} Services</p>
            </router-link>
        </section>
    </article>
</template>

<script>
export default {
    name: 'ServiceCard',
    props: {
        title: {
            type: String,
            required: true
        },
        pricing: {
            type: Array,
            default: () => []
        },
        contactText: {
            type: String,
            default: ''
        },
        contactLink: {
            type: String,
            default: '/contact'
        },
        buttonText: {
            type: String,
            default: 'GET STARTED TODAY!'
        },
        learnMoreLink: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped>
.card {
    width: 390px;
    text-align: center;
}

.title {
    font-size: 1.35rem;
    font-weight: 700;
    padding: .5rem;
    margin: 0;
}

.dropdown-container,
.contact {
    padding-block: .5rem;
    padding-inline: 1rem;
}

.dropdown-container {
    text-align: left;
}

.dropdown {
    padding-inline-start: .1rem;
}

summary {
    font-weight: bold;
    padding: .2rem;
}

ul {
    padding-inline-start: 2rem;
}

ul li {
    padding-block: .2rem;
}

.contact .text {
    font-style: italic;
}

.btn {
    width: 90%;
    font-size: .9rem;
    color: black;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 0 auto;
}

.btn,
.btn-text {
    transition: all 0.3s ease;
}

.btn:hover {
    color: black;
    background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
    background-size: 300% 300%;
    transform: scale(1.1);
    transform: translateY(-1px);
    box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4);
    animation: gradient-animation 4s ease infinite;
}

@keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.btn:hover .btn-text {
    color: white;
    font-weight: 500;
}

.link {
    text-decoration: none;
    color: #0984D0;
}

.link p {
    padding: .5rem;
}

.link:hover {
    text-decoration: underline;
}
</style>