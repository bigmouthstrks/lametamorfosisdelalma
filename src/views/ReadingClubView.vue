<template>
    <Navbar title="Club de lectura: Mujeres que corren con los lobos" />
    <div class="view-container bg-dark">
        <div class="header">
            <div class="container layer">
                <div class="header-image-container">
                    <p class="subtitle text-light text-center">
                        Taller de lectura <br />
                        por Psicologa Valentina Moraga
                    </p>
                    <p class="dynamic-title special-title text-center">
                        Mujeres <br />
                        que <br />
                        corren <br />
                        con los<br />
                        lobos
                    </p>
                </div>
            </div>
            <div class="about-me vh-100 bg-light">
                <div class="container mt-5">
                    <h1 class="text-center">Acerca de mi</h1>
                    <p>
                        Mi nombre es Valentina Moraga, psicóloga titulada de la Universidad Adolfo
                        Ibáñez. Cuento con diplomados en temáticas de desarrollo personal y terapia
                        breve. Apasionada y movilizada por conectar a las personas con la voz de su
                        corazón, la sensatez y la conciencia. He ofrecido más de 80 publicaciones
                        escritas sobre filosofía, espiritualidad y psicología. Realizo
                        acompañamientos psicoterapéuticos y lecturas de energía y arquetipos a
                        través del tarot. Certificada por la Super Intendencia de Salud de Chile,
                        número de registro 6894119
                    </p>
                </div>
            </div>
        </div>
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
.subtitle {
    text-shadow: 1px 1px 8px black;
    font-size: 20px;
    color: white !important;
    font-weight: lighter;
    line-height: 22px;
    /* text-shadow:
        1px 0 black,
        -1px 0 black,
        0 1px black,
        0 -1px black,
        1px 1px black,
        -1px -1px black,
        1px -1px black,
        -1px 1px black; */
}
.navbar-container,
.footer-container,
.view-container {
    background-color: #832b3b !important;
    color: #f8c29b;
}

.navbar-title {
    color: #f8c29b !important;
}

.special-title {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    font-style: normal;
    color: #f8c29b;
    font-size: 114px;
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

.header-image-container {
    background-repeat: no-repeat;
    padding-bottom: 10%;
    padding-top: 10%;
    height: 100%;
    background-position: center top;
    background-size: auto 100%;
    background-image: url('./../assets/images/book-cover-art-transparent-bg.png') !important;
}

.dynamic-title {
    line-height: 110px;
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
