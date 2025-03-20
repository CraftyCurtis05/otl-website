<template>
    <main class="jumbotron">
        <article class="container col-md-6">
            <h1 class="title">Expert Support When You<br>Need It Most.</h1>
            <hr class="line">
            <p class="text">We offer expert support for Cisco, Ubiquiti, and Fortinet systems. Whether you need assistance during 
                <span class="text-blue">business hours, after-hours emergency support, or ongoing IT management,</span>
                we have flexible options to meet your needs.
            </p>
            <router-link class="btn btn-md" to="/contact" role="button">
                <span class="btn-text">GET SUPPORT&nbsp;</span>
                <div class="btn-img">
                    <img class="black-img" :src="blackImg"/>
                    <img class="white-img" :src="whiteImg"/>
                </div>
            </router-link>
        </article>
    </main>
</template>

<script>
import image1 from '@/assets/images/icons/button_arrow_black.png';
import image2 from '@/assets/images/icons/button_arrow_white.png';

export default {
    name: 'SupportJumbotron',
    data() {
        return {
            blackImg: image1,
            whiteImg: image2
        };
    }
};
</script>

<style scoped>
.jumbotron {
    height: 18rem;
    background-image: url('@/assets/images/services_page/services_jumbotron.png');
    background-size: cover;
    background-position: center center;
    color: white;
}

.container {
    width: 78%;
}

.container,
hr {
    margin: auto;
}

.title {
    font-size: 2.1rem;
    font-weight: bold;
}

hr {
    width: 25%;
    border: 3px solid;
    padding: 0;
    margin-block: .6rem;
}

.text {
    font-size: 1.4rem;
}

.text-blue {
    color: #23c7e4;
    font-weight: bold;
}

.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 14%;
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