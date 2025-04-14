<template>
    <article 
        class="card pricing-card" 
        :id="`${id}`" 
        aria-label="Pricing Card" 
        >
        <h1>{{ title }}</h1>
        <section v-if="pricing" class="body">
            <details v-for="(item, index) in pricing" :key="index">
                <summary 
                    class="summary" 
                    aria-label="Show pricing information" 
                    title="Click to show pricing information"
                    >{{ item.title }}
                </summary>
                <span v-if="item.extra" class="text extra">{{ item.extra }}</span>
                <ul v-for="(subItem, subIndex) in item.amounts" :key="subIndex">
                    <li><b class="label">{{ subItem.label }}</b>{{ subItem.amount }}</li>
                </ul>
            </details>
        </section>

        <section class="contact">
            <span v-if="text" class="text">{{ text }}</span>

            <router-link 
                to="/contact" 
                class="btn btn-md" 
                role="button" 
                aria-label="Go to contact page" 
                title="Go to contact page"
                >
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>

            <router-link 
                :to="`/services#${id}`" 
                class="link" 
                aria-label="Go to services page" 
                title="Go to services page"
                >
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

.pricing-card .body {
  text-align: left !important;

}

.pricing-card details {
  width: 100%;
}

.pricing-card summary {
  text-align: left !important;
  font-weight: bold;
}

.body ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}

.body li {
    color: #002373; 
    list-style-type: disc;
    margin-left: 10% !important;
    margin: 1% 0;
}

.extra {
    color: #545454;
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
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    margin-top: auto;
}

.btn {
    font-size: .95rem;
    margin-block: 5%;
    width: 80% !important;
}

p {
    font-size: .9rem;
}

.card:hover {
    background: white;
    margin-inline: 0vw;
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

@media only screen and (max-width: 1440px) {

    p {
        font-size: .85rem;
    }
}

@media only screen and (min-width: 1025px) {

    summary {
        margin-left: 1.5vw;
    }
}

@media only screen and (max-width: 1024px) {

    .contact .text {
        font-size: 1rem;
        width: 95%;
    }

    .btn {
        font-size: .9rem;
    }
}

@media only screen and (max-width: 768px) {

    .pricing-card details {
        font-size: 1rem !important;
    }

    .btn {
        width: 50%;
    }
}

@media only screen and (max-width: 425px) {

    .pricing-card details,
    li,
    .text {
        font-size: .95rem !important;
    }

    .contact .text {
        font-size: .9rem;
        margin: auto;
        width: 90%;
    }

    .btn {
        font-size: .8rem;
    }
}

@media only screen and (max-width: 320px) {

    .contact p {
        font-size: .75rem;
    }

    .contact .text {
        font-size: .85rem;
    }
}
</style>