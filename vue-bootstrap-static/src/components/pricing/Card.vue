<!-- src/components/pricing/Card.vue -->
<template>
    <article class="card" :id="`#${id}`">
        <h1 class="title">{{ title }}</h1>
        <section v-if="pricing" class="body">
            <details v-for="(item, index) in pricing" :key="index">
                <summary>{{ item.title }}</summary>
                <ul v-for="(subItem, subIndex) in item.amounts" :key="subIndex">
                    <li><b>{{ subItem.label }}</b>{{ subItem.amount }}</li>
                </ul>
            </details>
        </section>

        <!-- Contact Section -->
        <section class="contact">
            <p v-if="contactText" class="text">{{ text }}</p>

            <router-link to="/contact" class="btn btn-md" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>

            <router-link :to="link" class="link">
                <p>Learn More About Our {{ title }} Services</p>
            </router-link>
        </section>
    </article>
</template>

<script>
export default {
    name: 'ServiceCard',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        pricing: {
            type: Array,
            default: () => []
        },
        text: {
            type: String,
            default: ''
        },
        link: {
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

.card .title {
    font-size: 1.35rem;
    font-weight: 700;
    padding: .5rem;
    margin: 0;
}

.card details {
    text-align: left;
}

.contact .text {
    font-style: italic;
}
</style>