<template>
    <Navbar title="Club de lectura: Mujeres que corren con los lobos" />
    <div class="view-container bg-dark">
        <div class="header">
            <h1 class="dynamic-title text-end">Taller de lectura</h1>
            <h3 class="dynamic-title special-title text-end">Mujeres que corren con los lobos</h3>

            <img
                class="w-50"
                src="../assets/images/book-cover-art-transparent-bg.png"
                alt="image"
            />
        </div>
        <!-- <div class="container">hola</div> -->
    </div>
    <FooterComponent />
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    name: 'ReadingClubView',
    components: {
        Navbar,
        FooterComponent
    }
}
</script>

<style scoped>
.navbar-container,
.footer-container,
.view-container {
    background-color: #832b3b !important;
    color: #f8c29b;
}

.special-title {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    font-style: normal;
    color: #f8c29b;
    font-size: 128px;
    text-shadow:
        2px 0 black,
        -2px 0 black,
        0 2px black,
        0 -2px black,
        1px 1px black,
        -1px -1px black,
        1px -1px black,
        -1px 1px black;
}

.dynamic-title {
    height: 100px;
    width: 800px;
    position: absolute;
    top: 250px;
    left: 1400px;
    -webkit-animation: jump 1s cubic-bezier(0.3, 1.2, 0.8, 1.2);
    animation: jump 1s cubic-bezier(0.3, 1.2, 0.8, 1.2);
}
@-webkit-keyframes jump {
    0% {
        transform: translateX(600px);
    }
    100% {
        transform: translateX(0px);
    }
}
@keyframes jump {
    0% {
        transform: translateX(600px);
    }
    100% {
        transform: translateX(0px);
    }
}
</style>
