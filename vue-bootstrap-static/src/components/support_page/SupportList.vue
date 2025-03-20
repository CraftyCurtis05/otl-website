<template>
    <article class="list-container">
        <section class="list">
            <h1 class="title">Hourly Support</h1>
            <hr class="line">
            <ul class="list-items">
                <li class="list-item"><b>Availability:</b> Monday to Friday, 8 AM - 5 PM EST.</li>
                <li class="list-item"><b>Flexible:</b> Pay for only the support you need, when you need it.</li>
                <li class="list-item"><b>Discounted Hourly Blocks:</b> Save on larger support needs by purchasing hourly blocks in advance.</li>
            </ul>
        </section>
        <section class="list">
            <h1 class="title">Monthly Retainer</h1>
            <hr class="line">
            <ul class="list-items">
                <li class="list-item"><b>Comprehensive IT Support:</b> Ongoing management of your IT systems, including network management and VoIP services.</li>
                <li class="list-item"><b>Peace of Mind:</b> Ensure your systems are always in capable hands with a fixed monthly retainer.</li>
            </ul>
        </section>
        <section class="list">
            <h1 class="title">Emergency Support</h1>
            <hr class="line">
            <ul class="list-items">
                <li class="list-item"><b>After-Hours Assistance:</b> Reach us for urgent issues outside of regular business hours.</li>
                <li class="list-item"><b>Maintenance Windows:</b> We offer support for projects that require work during maintenance windows, minimizing operational disruption.</li>
            </ul>
        </section>
        <section class="list">
            <h1 class="title">Additional Information</h1>
            <hr class="line">
            <ul class="list-items">
                <li class="list-item"><b>Remote Support:</b> All support is provided remotely via Teams or Zoom. Remote access to your systems must be granted.</li>
                <li class="list-item"><b>Onsite Support:</b> Onsite support is available, and travel expenses will be billed at cost.</li>
            </ul>
        </section>
        <section class="more-info">
            <div class="btn-container">
                <router-link class="btn btn-md" to="/services" role="button">
                    <span class="btn-text">LEARN MORE</span>
                </router-link>
                <router-link class="btn btn-md" to="/pricing" role="button">
                    <span class="btn-text">VIEW PRICING</span>
                </router-link>
            </div>
            <div class="contact-info">
                <router-link to="/contact" class="link"><p class="link">Have questions or need assistance?</p></router-link>
                <p class="text">Reach out to learn more about how we can support your IT needs and ensure a smooth and efficient operation for your business.</p>
                <router-link class="btn btn-md" to="/contact" role="button">
                    <span class="btn-text">CONTACT US</span>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    name: 'SupportList'
};
</script>

<style scoped>
.list-container {
    margin: 1% 5%;
}

.list {
    text-align: left;
    padding: .3vw;
}

.title {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
}

.line {
    width: 10%;
    border: 2px solid;
    margin: .25rem;
}

.list-items {
    list-style: disc;
}

.more-info {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
}

.link {
    font-size: 1.1rem;
    font-weight: bold;
    color: #0984D0;
}

.btn-container {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 1rem auto;
}

.btn-container .btn {
    margin-inline: 1rem;
}

.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-size: 1rem;
    color: black;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 0 auto;
}

.btn,
.btn-text,
.btn-img {
    transition: all 0.3s ease;
}

.btn-img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: auto;
}

.btn-img img {
    position: absolute;
    width: 100%;
    height: auto;
}

.btn-img .black-img {
    opacity: 1;
}

.btn-img .white-img {
    opacity: 0;
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
    transform: scale(1.05); /* Scale only the text inside the button */
}

.btn:hover .btn-img {
    width: 15%;
    transform: translateX(5px);
}

.btn:hover .black-img {
    opacity: 0;
}

.btn:hover .white-img {
    opacity: 1;
}
</style>