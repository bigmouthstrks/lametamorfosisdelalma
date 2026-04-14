<template>
    <div class="club-page">
        <Navbar
            title="Club de lectura: Mujeres que corren con los lobos"
            :isBackVisible="true"
            backRoute="/"
        />

        <!-- Hero oscuro con portada -->
        <section class="club-hero">
            <div class="club-hero-bg"></div>
            <div class="club-hero-vignette"></div>
            <div class="club-hero-content">
                <p class="text-eyebrow club-eyebrow">✦ &nbsp; Taller de lectura por Psicóloga Valentina Moraga &nbsp; ✦</p>
                <h1 class="club-main-title special-title">
                    Mujeres<br />que corren<br />con los lobos
                </h1>
                <div class="club-hero-ornament">⊱ ✦ ⊰</div>
            </div>
        </section>

        <!-- Cita 1 -->
        <section class="club-section parchment-section">
            <div class="container parchment-content">
                <span class="parchment-open-quote">"</span>
                <blockquote class="club-quote">
                    Cuando alejarnos de nuestro corazón se prolonga y no encontramos la vuelta a
                    casa, sentimos los efectos, las mujeres pueden sentirse extremadamente secas,
                    fatigadas, frágiles, deprimidas o confusas, pueden hacer elecciones que
                    desgasten su vida, sobreprotección del yo, sentirse insegura, débil o vacilante,
                    no empeñarse en seguir su propio ritmo, sentirse cohibida, temor a aventurarse
                    en solitario o rebelarse, ser perfeccionista, sentir encogimiento, humillación,
                    angustia, ansiedad.
                </blockquote>
                <cite class="club-cite">— Clarissa Pinkola Estés</cite>
            </div>
        </section>

        <!-- Encuentros -->
        <section class="club-section dark-section">
            <div class="container-fluid">
                <div class="row align-items-center g-0">
                    <div class="col-12 col-xl-5">
                        <img class="club-full-img" src="../assets/images/women.jpg" alt="Mujeres" />
                    </div>
                    <div class="col-12 col-xl-7 club-text-col">
                        <div class="club-text-inner">
                            <p class="text-eyebrow club-section-eyebrow">✦ El taller ✦</p>
                            <h2 class="club-section-heading cinzel-heading text-gold">
                                Encuentro semanal virtual<br />
                                donde la obra de<br />
                                <em class="text-rose-pal">Clarissa Pinkola Estés</em><br />
                                cobrará vida.
                            </h2>
                            <div class="club-divider">
                                <span class="club-divider-line"></span>
                                <span class="club-divider-star">⊱ ✦ ⊰</span>
                                <span class="club-divider-line"></span>
                            </div>
                            <p class="club-body-text">
                                Utilizaremos la <em class="text-gold">lectura conjunta</em> de cuentos de folclor,<br />
                                la sabiduría de los <em class="text-gold">círculos de mujeres</em><br />
                                y diferentes <em class="text-gold">herramientas terapéuticas</em><br />
                                como portales para reconectar<br />
                                y profundizar en nuestra <em class="text-gold">sabiduría femenina</em>.
                            </p>
                            <div class="club-cta-wrap">
                                <button
                                    type="button"
                                    class="club-cta-btn"
                                    @click="invokeKhipu"
                                >
                                    Quiero ser parte ✦
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Restauración -->
        <section class="club-section parchment-section">
            <div class="container parchment-content">
                <p class="club-vinque text-wine-deep">
                    Cuando sentimos el hambre del alma, es cuando debemos dedicarnos a la tarea de la restauración.
                </p>
                <div class="club-divider-parchment">
                    <span class="divider-line-dark"></span>
                    <span class="divider-sym-dark">⊱ ✦ ⊰</span>
                    <span class="divider-line-dark"></span>
                </div>
                <p class="club-body-parchment">
                    Debemos aprender sobre la vida instintiva y completar nuestras iniciaciones
                    psíquicas, recuperar nuestros tesoros y reestablecer dentro de nosotras los
                    procesos vitales. Esto no lo logramos solas, lo logramos incorporando las
                    herramientas necesarias para transitar de mejor manera el mundo.
                </p>
                <p class="club-body-parchment">
                    Es hora de que nuestra naturaleza interior brille y empape nuestras vidas.
                    A todas quienes desean atravesar el mundo del alma y de los seres humanos.
                </p>
            </div>
        </section>

        <!-- Es para ti si -->
        <section class="club-section dark-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-xl-5">
                        <img
                            class="club-full-img"
                            src="../assets/images/miamore.webp"
                            alt=""
                        />
                    </div>
                    <div class="col-12 col-xl-7 club-text-col">
                        <div class="club-text-inner">
                            <p class="text-eyebrow club-section-eyebrow">✦ ¿Es para ti? ✦</p>
                            <h2 class="club-section-heading cinzel-heading text-gold">
                                Este espacio es para ti si…
                            </h2>
                            <div class="club-checklist">
                                <div class="club-check-item" v-for="(item, i) in checkItems" :key="i">
                                    <span class="club-check-icon">✦</span>
                                    <p class="club-check-text">{{ item }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cita 2 + CTA final -->
        <section class="club-section dark-section club-final-section">
            <div class="container club-final-inner">
                <p class="text-eyebrow club-section-eyebrow">✦ ✦ ✦</p>
                <blockquote class="club-quote-light">
                    «Si las mujeres la han perdido, cuando la vuelvan a encontrar, pugnarán por
                    conservarla para siempre. Una vez que la hayan recuperado, lucharán con todas
                    sus fuerzas para conservarla, pues con ella florece su vida creativa; sus
                    relaciones adquieren significado, profundidad y salud…»
                </blockquote>
                <cite class="club-cite-light">— Clarissa Pinkola Estés</cite>
                <div class="club-cta-wrap" style="margin-top: 40px;">
                    <button
                        type="button"
                        class="club-cta-btn"
                        @click="invokeKhipu"
                    >
                        Quiero ser parte ✦
                    </button>
                </div>
            </div>
        </section>

        <FooterComponent />
    </div>
</template>

<script lang="ts">
import Navbar          from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { PaymentRequest }  from '../store/Khipu/PaymentRequest'
import { KhipuController } from '../store/Khipu/KhipuController'
import { PaymentResponse } from '../store/Khipu/PaymentResponse'

export default {
    name: 'ReadingClubView',
    components: { Navbar, FooterComponent },
    data() {
        return {
            checkItems: [
                'Te has visto en situaciones donde aceptas cosas que no quieres, mostrando una sonrisa cuando quieres decir no.',
                'Tienes una voz interna que te debilita en vez de dar ánimos y protección.',
                'El libro Mujeres que corren con los lobos ha aparecido en tu vida y quieres aprender más sobre sus enseñanzas.',
                'Te interesa la psicología, la espiritualidad y sientes un llamado a profundizar en la naturaleza Salvaje femenina.',
                'Ansías reencontrarte con una parte más genuina tuya que sabes está ahí.',
                'Buscas compartir y aprender junto a otras mujeres y reconocer a otras que portan la misma semilla que tú.'
            ]
        }
    },
    methods: {
        invokeKhipu() {
            const request = new PaymentRequest(
                30000,
                'CLP',
                'Taller de lectura: Mujeres que corren con los lobos'
            )
            request.return_url  = 'https://www.lametamorfosisdelalma.com/transaction-completed'
            request.cancel_url  = 'https://www.lametamorfosisdelalma.com/transaction-cencelled'
            request.notify_url  = 'https://lametamorfosis-backend-6105c00f8483.herokuapp.com/webhook'
            request.picture_url = 'https://lametamorfosisdelalma.s3.sa-east-1.amazonaws.com/EBook+Cover.png'
            try {
                const paymentResponse: Promise<PaymentResponse> = KhipuController.createPayment(request)
                paymentResponse.then((response) => {
                    KhipuController.invoke(response.payment_id)
                })
            } catch (error) {
                console.error('Error creating payment:', error)
            }
        }
    }
}
</script>

<style scoped>
.club-page {
    background: #120620;
}

/* ---- Secciones genéricas ---- */
.club-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.dark-section {
    background: linear-gradient(160deg, #1e0b2e 0%, #3a0d1e 100%);
}

.parchment-section {
    background: linear-gradient(145deg, #f5e6c0 0%, #efe0b0 60%, #e8d090 100%);
}

.parchment-content {
    padding: 60px 20px;
    max-width: 780px;
}

/* ---- Hero ---- */
.club-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.club-hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('./../assets/images/book-cover-art-transparent-bg.png');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 90%;
    opacity: 0.18;
}

.club-hero-vignette {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse 80% 50% at 50% 50%, transparent 30%, rgba(18, 6, 32, 0.7) 100%),
        linear-gradient(to bottom, rgba(18, 6, 32, 0.3) 0%, transparent 30%, rgba(18, 6, 32, 0.5) 100%);
    pointer-events: none;
}

.club-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 100px 20px 60px;
}

.club-eyebrow {
    margin-bottom: 24px;
}

.club-main-title {
    font-size: clamp(56px, 10vw, 110px);
    line-height: 1.0;
    color: #f2e2a8;
    text-shadow:
        0 0 60px rgba(201, 168, 76, 0.3),
        0 4px 20px rgba(18, 6, 32, 0.9),
        2px 2px 0 rgba(0,0,0,0.5);
    margin-bottom: 24px;
}

.club-hero-ornament {
    color: #c9a84c;
    font-size: 18px;
    letter-spacing: 8px;
    opacity: 0.7;
}

/* ---- Cita pergamino ---- */
.parchment-open-quote {
    font-family: var(--font-body);
    font-size: 80px;
    line-height: 0.5;
    color: #8a6f28;
    opacity: 0.4;
    display: block;
    margin-bottom: 10px;
}

.club-quote {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.25rem);  /* 16–20px */
    font-style: italic;
    color: #2e1018;
    line-height: 1.85;
    text-align: justify;
    margin-bottom: 16px;
    border: none;
    padding: 0;
}

.club-cite {
    font-family: var(--font-heading);
    font-size: 0.8125rem;    /* 13px */
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #5c1a2e;
    display: block;
    text-align: right;
    opacity: 0.8;
}

/* ---- Secciones oscuras con texto ---- */
.club-text-col {
    padding: 40px 20px;
}

.club-text-inner {
    max-width: 620px;
    padding: 0 20px;
}

.club-section-eyebrow {
    opacity: 0.75;
    margin-bottom: 16px;
}

.club-section-heading {
    font-size: clamp(24px, 3.5vw, 42px);
    line-height: 1.25;
    margin-bottom: 24px;
}

.text-rose-pal {
    color: #e8b4c0;
    font-style: italic;
}

.club-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
}

.club-divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(201, 168, 76, 0.4), transparent);
    display: block;
}

.club-divider-star {
    color: #c9a84c;
    font-size: 12px;
    letter-spacing: 4px;
    opacity: 0.7;
}

.club-body-text {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.25rem);  /* 16–20px */
    color: #f2e2a8;
    line-height: 1.9;
    opacity: 0.9;
    margin-bottom: 32px;
}

/* ---- CTA Button ---- */
.club-cta-wrap {
    display: flex;
    justify-content: center;
}

.club-cta-btn {
    font-family: var(--font-heading);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 18px 48px;
    border: 1px solid #c9a84c;
    border-radius: 2px;
    color: #f2e2a8;
    background: linear-gradient(135deg, rgba(58, 13, 30, 0.9) 0%, rgba(92, 26, 46, 0.9) 100%);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.35s ease;
    box-shadow:
        0 4px 20px rgba(90, 26, 46, 0.5),
        inset 0 1px 0 rgba(201, 168, 76, 0.15);
}

.club-cta-btn::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(201, 168, 76, 0.2);
    border-radius: 1px;
    pointer-events: none;
}

.club-cta-btn:hover {
    background: linear-gradient(135deg, rgba(92, 26, 46, 0.95) 0%, rgba(122, 42, 58, 0.95) 100%);
    color: #e8c96b;
    border-color: #e8c96b;
    transform: translateY(-2px);
    box-shadow:
        0 8px 32px rgba(90, 26, 46, 0.7),
        0 0 20px rgba(201, 168, 76, 0.15);
}

/* ---- Imagen full ---- */
.club-full-img {
    width: 100%;
    max-height: 95vh;
    object-fit: cover;
    display: block;
}

/* ---- Sección pergamino cuerpo ---- */
.club-vinque {
    font-family: var(--font-vinque);
    font-size: clamp(18px, 3vw, 26px);
    line-height: 1.4;
    color: #3a0d1e;
    margin-bottom: 20px;
    font-style: italic;
}

.text-wine-deep { color: #3a0d1e; }

.club-divider-parchment {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 16px 0;
}

.divider-line-dark {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #8a6f28, transparent);
    display: block;
}

.divider-sym-dark {
    color: #8a6f28;
    font-size: 12px;
    letter-spacing: 4px;
    opacity: 0.6;
}

.club-body-parchment {
    font-family: var(--font-body);
    font-size: clamp(1rem, 1.8vw, 1.125rem); /* 16–18px */
    color: #2e1018;
    line-height: 1.85;
    text-align: justify;
    opacity: 0.88;
    margin-bottom: 16px;
}

/* ---- Checklist ---- */
.club-checklist {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
}

.club-check-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
}

.club-check-icon {
    color: #c9a84c;
    font-size: 12px;
    margin-top: 4px;
    flex-shrink: 0;
}

.club-check-text {
    font-family: var(--font-body);
    font-size: clamp(0.9375rem, 1.6vw, 1.0625rem); /* 15–17px */
    color: #f2e2a8;
    line-height: 1.7;
    margin: 0;
    opacity: 0.9;
}

/* ---- Cita final ---- */
.club-final-section {
    min-height: auto;
    padding: 80px 20px;
}

.club-final-inner {
    text-align: center;
    max-width: 800px;
}

.club-quote-light {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.1875rem);  /* 16–19px */
    font-style: italic;
    color: #f2e2a8;
    line-height: 1.85;
    text-align: justify;
    margin-bottom: 20px;
    border: none;
    padding: 0;
    opacity: 0.9;
}

.club-cite-light {
    font-family: var(--font-heading);
    font-size: 0.8125rem;    /* 13px */
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #c9a84c;
    display: block;
    text-align: right;
    opacity: 0.8;
}
</style>

