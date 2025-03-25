<!-- src/components/pricing/Card.vue -->
<template>
    <article class="card">
        <h1 class="title">{{ title }}</h1>
        <section v-if="pricing" class="dropdown-container">
            <details v-for="(item, index) in pricing" :key="index" class="dropdown">
                <summary>{{ item.title }}</summary>
                <ul v-for="(subItem, subIndex) in item.amounts" :key="subIndex">
                    <li><b>{{ subItem.label }}</b>{{ subItem.amount }}</li>
                </ul>
            </details>
        </section>

        <!-- Contact Section -->
        <section class="contact">
            <p v-if="contactText" class="text">{{ contactText }}</p>

            <router-link to="/contact" class="btn btn-md" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
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
</style>