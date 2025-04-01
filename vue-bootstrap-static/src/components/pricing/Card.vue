<!-- src/components/pricing/Card.vue -->
<template>
    <article 
        class="card" 
        :id="`#${id}`" 
        aria-label="Pricing Card" 
        >
        <h1 class="title">{{ title }}</h1>
        <section v-if="pricing" class="body">
            <details v-for="(item, index) in pricing" :key="index">
                <summary aria-label="Show pricing information" title="Click to show pricing information">{{ item.title }}</summary>
                <span v-if="item.extra" class="text">{{ item.extra }}</span>
                <ul v-for="(subItem, subIndex) in item.amounts" :key="subIndex">
                    <li><b>{{ subItem.label }}</b>{{ subItem.amount }}</li>
                </ul>
            </details>
        </section>

        <!-- Contact Section -->
        <section class="contact">
            <span v-if="text" class="text">{{ text }}</span>

            <router-link to="/contact" class="btn btn-md" role="button" aria-label="Go to contact page" title="Go to contact page">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>

            <router-link :to="link" class="link" aria-label="Go to services page" title="Go to services page">
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

.body ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}

.body li {
    list-style-type: disc;
    margin-left: 10%;
}

.body .text {
    margin-left: 5%;
}

.text {
    font-style: italic;
}

.text,
.btn,
.link {
    margin-block: 1%;
}

.contact {
    padding-top: 10%;
    margin-top: auto;
}

.btn {
    margin-block: 5%;
}

p {
    font-size: .9rem;
}

.card:hover {
    background: white;
    transform: scale(1);
    cursor: auto;
}

.card:hover h1,
.card:hover .link,
.text:hover {
    text-decoration: none;
}

summary:hover,
.contact p:hover {
    text-decoration: underline;
}
</style>