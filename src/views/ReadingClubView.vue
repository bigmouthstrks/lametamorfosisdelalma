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
                    <p>
                        Cuando alejarnos de nuestro corazón se prolonga y no encontramos la vuelta a
                        casa, sentimos los efectos, las mujeres pueden sentirse extremadamente
                        secas, fatigadas, frágiles, deprimidas o confusas, pueden hacer elecciones
                        que desgasten su vida, sobreprotección del yo, sentirse insegura, débil o
                        vacilante, no empeñarse en seguir su propio ritmo, sentirse cohibida, temor
                        a aventurarse en solitario o rebelarse, ser perfeccionista, sentir
                        encogimiento, humillación, angustia, ansiedad. Temor a reaccionar con
                        agresividad cuando no queda nada más que hacer, temor a hablar claro,
                        mostrarse conciliadora o excesivamente amable, sentirnos como criaturas
                        disfrazadas, sentirse diferente fuera que dentro, ajustarse a las exigencias
                        del mundo.
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
