<!-- src/components/pricing/cards/VoIPCard.vue -->
<template>
    <article class="card">
        <h1 class="title">VoIP Services</h1>
        <section class="dropdown-container">
            <details class="dropdown">
                <summary>Hosted VoIP Extension</summary>
                <ul>
                    <li>$20.00 per month per extension (pricing includes all <a href="#">standard features</a>)</li>
                    <p>*Discounts available for multiple extensions and multi-location setups.</p>
                </ul>
            </details>    
            <details class="dropdown">    
                <summary>Advanced Features</summary>
                <ul>
                    <li><b>Call Center:</b> *Quoted</li>
                    <li><b>Call Recording:</b> $1.00 per GB per month</li>
                    <li><b>Conferencing</b> (More than 3-way call): *Quoted</li>
                    <li><b>Dictation:</b> $1.00 per month, per extension</li>
                    <li><b>Hotelling:</b> *Quoted</li>
                    <li><b>Mobile App:</b> $5.00 per month, per extension</li>
                    <li><b>SMS:</b> $5.00 per month, per extension</li>
                    <li><b>Salesforce Connector:</b> *Quoted</li>
                    <li><b>Switchboard:</b> $1.00 per month, per extension</li>
                    <li><b>Teams Integration:</b> $10.00 per month, per extension</li>
                    <li><b>WhatsApp Connector:</b> $5.00 per month, per extension</li>
                    <li><b>Remote Extension:</b> $5.00 per month, per extension</li>
                </ul>
            </details>
        </section>
        <section class="contact">
            <p class="text">*Quoted for custom pricing based on your needs.</p>
            <p class="text">All pricing is per month, excluding taxes and fees.</p>
            <router-link class="btn btn-sm" to="/contact" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>
            <router-link to="/services#voip" class="link">
                <p>Learn More About Our VoIP Services</p>
            </router-link>
        </section>
    </article>
</template>

<script>
export default {
    name: 'VoIPCard'
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

ul p {
    font-style: italic;
}

.contact .text:first-child {
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
    box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4); /* Glowing effect */
    border-color: #00FFFF; /* Optional: Change the border color to match the glow */
    animation: gradient-animation 4s ease infinite;
}

/* Animation for button */
@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
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