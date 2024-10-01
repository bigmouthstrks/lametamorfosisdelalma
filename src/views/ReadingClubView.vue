<template>
    <Navbar
        title="Club de lectura: Mujeres que corren con los lobos"
        :isBackVisible="true"
        backRoute="/"
    />
    <div class="view-container bg-dark">
        <div class="container">
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
    </div>
    <div class="view-body">
        <div
            class="section d-flex justify-content-center align-items-center bg-light"
            id="section-1"
        >
            <div class="container" id="section-1-container">
                <p class="quote text-lg times">
                    "Cuando alejarnos de nuestro corazón se prolonga y no encontramos la vuelta a
                    casa, sentimos los efectos, las mujeres pueden sentirse extremadamente secas,
                    fatigadas, frágiles, deprimidas o confusas, pueden hacer elecciones que
                    desgasten su vida, sobreprotección del yo, sentirse insegura, débil o vacilante,
                    no empeñarse en seguir su propio ritmo, sentirse cohibida, temor a aventurarse
                    en solitario o rebelarse, ser perfeccionista, sentir encogimiento, humillación,
                    angustia, ansiedad. Temor a reaccionar con agresividad cuando no queda nada más
                    que hacer, temor a hablar claro, mostrarse conciliadora o excesivamente amable,
                    sentirnos como criaturas disfrazadas, sentirse diferente fuera que dentro,
                    ajustarse a las exigencias del mundo."
                </p>
                <p class="text-end text-dark bold-font times text-md quote">
                    Clarissa Pinkola Estés
                </p>
            </div>
        </div>
        <div class="section d-flex align-items-center bg-dark" id="section-2">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-xl-5">
                        <img class="full-w-img img-fluid" src="../assets/images/women.jpg" alt="" />
                    </div>
                    <div class="d-flex align-items-center col-12 col-xl-7">
                        <div>
                            <h1 class="text-light text-xl light-font">
                                Encuentro semanal virtual <br />
                                donde la obra de <br />
                                <strong>Clarissa Pinkola Estés cobrará vida. </strong>
                            </h1>
                            <br />
                            <p class="text-lg text-justify text-light light-font line-md">
                                Utilizaremos la
                                <span class="italic underline">lectura conjunta</span> <br />
                                de cuentos de folclor, <br />la sabiduría de los
                                <span class="italic underline">círculos de mujeres</span>
                                <br />
                                y diferentes
                                <span class="italic underline">herramientas terapéuticas</span>
                                <br />
                                como portales para reconectar <br />
                                y profundizar <br />
                                en nuestra <span class="italic underline">sabiduría femenina</span>.
                            </p>
                            <br />
                            <br />
                            <div class="container text-center">
                                <button
                                    type="button"
                                    @click="invokeKhipu"
                                    style="
                                        font-size: 28px;
                                        width: 320px;
                                        height: 100px;
                                        border-radius: 48px;
                                    "
                                    class="bg-light text-dark shadow-0 border-0 text-sm"
                                >
                                    Quiero ser parte
                                </button>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-light d-flex justify-content-center align-items-center">
            <div class="container">
                <p class="vinque italic text-xl text-dark light-font">
                    Cuando sentimos el hambre del alma, es cuando debemos dedicarnos a la tarea de
                    la restauración.
                </p>
                <p class="text-lg text-dark line-md text-justify light-font">
                    Debemos aprender sobre la vida instintiva y completar nuestras iniciaciones
                    psíquicas, recuperar nuestros tesoros y reestablecer dentro de nosotras los
                    procesos vitales. Esto no lo logramos solas, lo logramos incorporando las
                    herramientas necesarias para transitar de mejor manera el mundo
                </p>
                <p class="text-lg text-dark line-md text-justify">
                    Es hora de que nuestra naturaleza interior brille y empape nuestras vidas
                    <br />
                    A todas quienes desean atravesar el mundo del alma y de los seres humanos.
                </p>
            </div>
        </div>

        <div class="section bg-dark d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-5">
                        <img
                            class="full-w-img img-fluid"
                            src="../assets/images/miamore.webp"
                            alt=""
                        />
                    </div>
                    <div class="col 12 col-xl-7 d-flex align-items-center">
                        <div>
                            <div>
                                <h1 class="text-xl text-light bold-font">Es para ti si:</h1>
                            </div>
                            <br />
                            <div>
                                <p class="text-justify text-md text-light light-font">
                                    <font-awesome-icon icon="circle-check" /> Te has visto en
                                    situaciones donde aceptas cosas que no quieres, mostrando una
                                    sonrisa cuando quieres decir no.
                                </p>
                            </div>
                            <br />
                            <div>
                                <p class="text-justify text-md text-light light-font">
                                    <font-awesome-icon icon="circle-check" /> Tienes una voz interna
                                    que te debilita en vez de dar ánimos y protección.
                                </p>
                            </div>
                            <br />
                            <div>
                                <p class="text-justify text-md text-light light-font">
                                    <font-awesome-icon icon="circle-check" /> De alguna manera el
                                    libro Mujeres que corren con los lobos ha aparecido en tu vida y
                                    quieres aprender más sobre sus enseñanzas.
                                </p>
                            </div>
                            <br />
                            <div>
                                <p class="text-justify text-md text-light light-font">
                                    <font-awesome-icon icon="circle-check" /> Te interesa la
                                    psicología, la espiritualidad y sientes un llamado a profundizar
                                    en la naturaleza Salvaje femenina.
                                </p>
                            </div>
                            <br />
                            <div>
                                <p class="text-justify text-md text-light light-font">
                                    <font-awesome-icon icon="circle-check" /> Ansías reencontrarte
                                    con una parte más genuina tuya que sabes está ahí.
                                </p>
                            </div>
                            <br />
                            <div>
                                <p class="text-justify text-md text-light light-font">
                                    <font-awesome-icon icon="circle-check" /> Buscas compartir y
                                    aprender junto a otras mujeres y reconocer a otras que portan la
                                    misma semilla que tú.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section d-flex align-items-center bg-light">
            <div class="container">
                <div class="">
                    <h1 class="text-dark text-lg light-font">
                        Este libro recoge la tradición oral de diferentes lugares del mundo, para
                        permitir a las mujeres el despertar de su vitalidad y la conexión su propia
                        naturaleza, encender la linterna que nos muestre el camino
                    </h1>
                    <br />
                    <p class="text-dark text-lg text-justify light-font">
                        Para dejar de vivir una vida como criaturas disfrazadas, para aprender a
                        confiar en nuestra intuición, aprendiendo a mostrar los dientes cuando sea
                        necesario, y también, a renacernos las veces que necesitemos, Para vivir una
                        vida sensata, en la que caminemos de la mano con la voz universal de la
                        mujer salvaje, que nos susurra como andar en el mundo manteniendonos cerca
                        de nuestro corazón,
                    </p>
                    <p class="text-dark text-lg text-justify light-font">
                        y hacerlo con otras mujeres, con las que podrás escuchar tradiciones orales
                        que nos recuerdan la voz de la gran Madre, aquella que nos cobija y hoy está
                        dispuesta a compartir su sabiduría.
                    </p>
                    <br />
                    <p class="vinque text-dark bold-font text-xl">
                        Este es el momento de decirle que sí a la voz del alma
                    </p>
                </div>
            </div>
        </div>

        <div
            class="section d-flex justify-content-center align-items-center bg-dark"
            id="section-1"
        >
            <div class="container-fluid" id="section-1-container">
                <p class="quote text-lg times text-light">
                    «Si las mujeres la han perdido, cuando la vuelvan a encontrar, pugnarán por
                    conservarla para siempre. Una vez que la hayan recuperado, lucharán con todas
                    sus fuerzas para conservarla, pues con ella florece su vida creativa; sus
                    relaciones adquieren significado, profundidad y salud; sus ciclos sexuales,
                    creativos, laborales y lúdicos se restablecen; ya no son el blanco de las
                    depredaciones de los demás, y tienen el mismo derecho a crecer y prosperar según
                    las leyes de la naturaleza. Ahora su cansancio-del-final-de-la-jornada procede
                    de un trabajo y un esfuerzo satisfactorios, no del hecho de haber estado
                    encerradas en un esquema mental, una tarea o una relación excesivamente
                    restringidos. Saben instintivamente cuándo tienen que morir las cosas y cuándo
                    tienen que vivir; saben cómo alejarse y cómo quedarse.»
                </p>
                <p class="text-end text-light bold-font times text-md quote">
                    Clarissa Pinkola Estés
                </p>
                <div class="container text-center">
                    <button
                        @click="invokeKhipu"
                        type="button"
                        style="font-size: 28px; width: 320px; height: 100px; border-radius: 48px"
                        class="bg-light text-dark shadow-0 border-0 text-sm"
                    >
                        Quiero ser parte
                    </button>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { PaymentRequest } from '../store/Khipu/PaymentRequest'
import { KhipuController } from '../store/Khipu/KhipuController'
import { PaymentResponse } from '../store/Khipu/PaymentResponse'

export default {
    name: 'ReadingClubView',
    components: {
        Navbar,
        FooterComponent
    },
    methods: {
        invokeKhipu() {
            const request: PaymentRequest = new PaymentRequest(
                30000,
                'CLP',
                'Taller de lectura: Mujeres que corren con los lobos'
            )
            request.return_url = 'https://www.lametamorfosisdelalma.com/transaction-completed'
            request.cancel_url = 'https://www.lametamorfosisdelalma.com/transaction-cencelled'
            request.notify_url = 'https://lametamorfosis-backend-6105c00f8483.herokuapp.com/webhook'
            request.picture_url =
                'https://lametamorfosisdelalma.s3.sa-east-1.amazonaws.com/EBook+Cover.png'

            try {
                const paymentResponse: Promise<PaymentResponse> =
                    KhipuController.createPayment(request)
                paymentResponse.then((response) => {
                    const paymentId = response.payment_id
                    KhipuController.invoke(paymentId)
                })
            } catch (error) {
                console.error('Error creating payment:', error)
            }
        }
    }
}
</script>

<style scoped>
.full-w-img {
    max-height: 95vh;
}
#section-1-container {
    min-height: 400px !important;
    max-width: 800px !important;
}
.underline {
    text-decoration: underline;
}

.line-md {
    line-height: 56px;
}
.line-lg {
    line-height: 64px;
}
.full-w-image {
    max-width: 90vh !important;
}
.bg-light {
    background-color: #f9c29b !important;
}
.bg-dark {
    background-color: #832b3b !important;
}
.light-font {
    font-weight: lighter !important;
}
.bold-font {
    font-weight: bolder !important;
}
.text-light {
    color: #f9c29b !important;
}
.text-dark {
    color: #832b3b !important;
}
.times {
    font-family: var(--times);
}
.pacifico {
    font-family: var(--pacifico);
}
.impact {
    font-family: var(--impact);
}
.quote {
    font-style: italic;
    text-align: justify;
}
.section {
    min-height: 100vh;
}
.text-xl {
    font-size: 56px;
}
.text-lg-2 {
    font-size: 40px;
}
.text-lg {
    font-size: 32px;
}
.text-md {
    font-size: 24px;
}
.text-sm {
    font-size: 18px;
}
.text-xsm {
    font-size: 12px;
}
.text-justify {
    text-align: justify !important;
}

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
    padding-bottom: 16vh;
    padding-top: 24vh;
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
.sword-rotate {
    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
}
</style>
