<template>
    <div class="detail-page">
        <Navbar :title="productData.title" :isBackVisible="true" backRoute="writings" />

        <!-- Header pergamino -->
        <div class="detail-header">
            <p class="text-eyebrow detail-eyebrow">✦ &nbsp; Escritos &nbsp; ✦</p>
            <h1 class="detail-title cinzel-heading text-gold">{{ productData.title }}</h1>
            <div class="detail-ornament">⊱ ✦ ⊰</div>
        </div>

        <!-- Pergamino principal -->
        <div class="container detail-scroll-container">
            <div class="parchment-scroll">
                <!-- Esquinas -->
                <span class="scroll-corner scroll-tl">✦</span>
                <span class="scroll-corner scroll-tr">✦</span>
                <span class="scroll-corner scroll-bl">✦</span>
                <span class="scroll-corner scroll-br">✦</span>

                <!-- Video -->
                <div class="scroll-video-wrap">
                    <video autoplay muted loop class="scroll-video">
                        <source
                            src="../assets/images/video-metamorfosis-compress.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div class="scroll-video-vignette"></div>
                </div>

                <div class="scroll-ornament-divider">
                    <span class="divider-line"></span>
                    <span class="divider-sym">⊱ ✦ ⊰</span>
                    <span class="divider-line"></span>
                </div>

                <!-- Descripción -->
                <div class="scroll-body">
                    <p class="scroll-description">{{ productData.longDescription }}</p>

                    <!-- Tags -->
                    <div class="scroll-tags">
                        <span
                            class="product-tag"
                            v-for="(tag, i) in productData.tags"
                            :key="i"
                        >{{ tag }}</span>
                    </div>

                    <div class="scroll-ornament-divider">
                        <span class="divider-line"></span>
                        <span class="divider-sym">⊱ ✦ ⊰</span>
                        <span class="divider-line"></span>
                    </div>

                    <!-- Precio y CTA -->
                    <div class="scroll-purchase text-center">
                        <p class="scroll-price">
                            {{ productData.priceAsString }}
                            <small class="currency">CLP</small>
                        </p>
                        <button @click="invokeKhipu" class="purchase-button scroll-buy-btn">
                            Obtener el ejemplar ✦
                        </button>
                        <p class="scroll-purchase-note">
                            <em>Después de completar el pago se enviará el ejemplar<br />
                            por correo electrónico. ¡Gracias por tu compra!</em>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- About author -->
        <AboutAuthor :authorName="authorName" />

        <div id="khipu-web-root"></div>
        <FooterComponent />
    </div>
</template>

<script lang="ts">
import Navbar          from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import AboutAuthor     from '../components/AboutAuthor.vue'
import { ProductController } from '../store/Product/ProductController'
import Product         from '../store/Product/Product'
import { KhipuController }  from '../store/Khipu/KhipuController'
import { PaymentResponse }  from '../store/Khipu/PaymentResponse'
import { PaymentRequest }   from '../store/Khipu/PaymentRequest'

export default {
    name: 'ProductDetailView',
    components: { Navbar, FooterComponent, AboutAuthor },
    props: {
        id: { type: Number, required: true }
    },
    computed: {
        productData() {
            return ProductController.getLocalProduct(this.id) as Product
        },
        authorName() {
            return (ProductController.getLocalProduct(this.id) as Product).author
        }
    },
    methods: {
        invokeKhipu() {
            const request = new PaymentRequest(2000, 'CLP', 'La Revolución Simbólica')
            request.return_url  = 'https://www.lametamorfosisdelalma.com/transaction-completed'
            request.cancel_url  = 'https://www.lametamorfosisdelalma.com/transaction-cencelled'
            request.notify_url  = 'https://lametamorfosis-backend-6105c00f8483.herokuapp.com/webhook'
            request.picture_url = 'https://lametamorfosisdelalma.s3.sa-east-1.amazonaws.com/la-revolucion-simbolica-cut.jpg'
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
.detail-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #120620 0%, #1e0b2e 40%, #3a0d1e 100%);
}

/* Header */
.detail-header {
    padding: 100px 20px 40px;
    text-align: center;
}

.detail-eyebrow {
    opacity: 0.8;
    margin-bottom: 14px;
}

.detail-title {
    font-size: clamp(26px, 4vw, 42px);
    margin-bottom: 16px;
}

.detail-ornament {
    color: #c9a84c;
    font-size: 16px;
    letter-spacing: 6px;
    opacity: 0.7;
}

/* Pergamino */
.detail-scroll-container {
    padding-bottom: 50px;
    max-width: 860px;
}

.parchment-scroll {
    position: relative;
    background: linear-gradient(145deg, #f5e6c0 0%, #efe0b0 55%, #e8d090 100%);
    border: 1px solid #8a6f28;
    border-radius: 3px;
    box-shadow:
        0 8px 48px rgba(20, 5, 10, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.35),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.scroll-corner {
    position: absolute;
    font-size: 10px;
    color: #8a6f28;
    opacity: 0.6;
    z-index: 2;
}
.scroll-tl { top: 8px;  left: 8px; }
.scroll-tr { top: 8px;  right: 8px; }
.scroll-bl { bottom: 8px; left: 8px; }
.scroll-br { bottom: 8px; right: 8px; }

/* Video */
.scroll-video-wrap {
    position: relative;
    max-height: 50vh;
    overflow: hidden;
}

.scroll-video {
    width: 100%;
    display: block;
    object-fit: cover;
    max-height: 50vh;
}

.scroll-video-vignette {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 60%, #efe0b0 100%);
    pointer-events: none;
}

/* Divisores */
.scroll-ornament-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
}

.divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #8a6f28, transparent);
    display: block;
}

.divider-sym {
    color: #8a6f28;
    font-size: 13px;
    letter-spacing: 4px;
    opacity: 0.7;
}

/* Body */
.scroll-body {
    padding: 0 32px 32px;
}

.scroll-description {
    font-family: var(--font-body);
    font-size: clamp(1rem, 1.8vw, 1.125rem); /* 16–18px */
    color: #2e1018;
    line-height: 1.85;
    text-align: justify;
    opacity: 0.9;
    margin-bottom: 20px;
}

.scroll-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: 4px;
}

.product-tag {
    font-family: var(--font-heading);
    font-size: 0.6875rem;    /* 11px — decorativo uppercase aceptable */
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5c1a2e;
    border: 1px solid rgba(92, 26, 46, 0.35);
    padding: 4px 10px;
    border-radius: 1px;
    background: rgba(92, 26, 46, 0.07);
}

/* Compra */
.scroll-purchase {
    padding: 10px 0 4px;
}

.scroll-price {
    font-family: var(--font-heading);
    font-size: clamp(30px, 5vw, 48px);
    font-weight: 700;
    color: #3a0d1e;
    letter-spacing: 0.04em;
    margin-bottom: 16px;
}

.scroll-buy-btn {
    font-size: 0.9375rem;    /* 15px */
    padding: 14px 40px;
    margin-bottom: 16px;
}

.scroll-purchase-note {
    font-family: var(--font-body);
    font-size: 0.875rem;     /* 14px */
    font-style: italic;
    color: #5c1a2e;
    opacity: 0.75;
    line-height: 1.65;
    margin: 0;
}
</style>
