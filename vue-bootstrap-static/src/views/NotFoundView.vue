<template>
    <article class="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
      <router-link to="/" class="btn">Go back to Home</router-link>
    </article>
</template>

<script>
export default {
    name: 'NotFoundView',
};
</script>

<style scoped>
.not-found-container {
    text-align: center;
    padding: 15vh 0;
}

.not-found-container h1 {
    font-size: 3rem;
    font-weight: bold;
}

.not-found-container p {
    font-size: 1.25rem;
    color: #555;
    margin: 1rem 0;
}

.btn {
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 1vw auto;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn:hover {
    background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
    background-size: 300% 300%;
    border-color: #0a65b0;
    color: white;
    font-weight: 500;
    transform: scale(1.1);
    transform: translateY(-1px);
    box-shadow: 0 0 15px 5px rgba(124, 237, 254, 0.4);
}

@media (min-width: 2561px) {
    
    .not-found-container {
        padding: 10vh 0;
    }

    .not-found-container h1 {
        font-size: 4rem;
    }

    .not-found-container p {
        font-size: 1.6rem;
    }

    .btn {
        width: 20%;
        font-size: 1.5rem;
    }
}

@media (min-width: 1601px) and (max-width: 2560px) {
    
    .not-found-container {
        padding: 16vh 0;
    }

    .not-found-container h1 {
        font-size: 3.5rem;
    }

    .not-found-container p {
        font-size: 1.5rem;
    }

    .btn {
        width: 25%;
        font-size: 1.4rem;
    }
}

@media (min-width: 1441px) and (max-width: 1600px) {

    .not-found-container {
        padding: 13vh 0;
    }

    .not-found-container h1 {
        font-size: 3.25rem;
    }

    .not-found-container p {
        font-size: 1.4rem;
    }

    .btn {
        width: 30%;
        font-size: 1.3rem;
    }
}

@media (min-width: 1281px) and (max-width: 1440px) {

    .not-found-container {
        padding: 10.25vh 0;
    }

    .not-found-container h1 {
        font-size: 3rem;
    }

    .not-found-container p {
        font-size: 1.3rem;
    }

    .btn {
        width: 35%;
        font-size: 1.2rem;
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {

    .not-found-container {
        padding: 10vh 0;
    }

    .not-found-container h1 {
        font-size: 2.75rem;
    }

    .not-found-container p {
        font-size: 1.25rem;
    }

    .btn {
        width: 40%;
        font-size: 1.1rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

    .not-found-container {
        padding: 11.5vh 0;
    }

    .not-found-container h1 {
        font-size: 2.5rem;
    }

    .not-found-container p {
        font-size: 1.2rem;
    }

    .btn {
        width: 50%;
        font-size: 1.1rem;
    }
}

@media (min-width: 481px) and (max-width: 768px) {

    .not-found-container {
        padding: 12.5vh 0;
    }

    .not-found-container h1 {
        font-size: 2.25rem;
    }

    .not-found-container p {
        font-size: 1.1rem;
    }

    .btn {
        width: 60%;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {

    .not-found-container {
        padding: 10vh 0;
    }

    .not-found-container h1 {
        font-size: 2rem;
    }

    .not-found-container p {
        font-size: 1rem;
    }

    .btn {
        width: 70%;
        font-size: .95rem;
    }
}
</style>