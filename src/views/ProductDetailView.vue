<template>
    <Navbar :title="productData.title" :isBackVisible="true" backRoute="writings" />
    <div class="view-container">
        <br />
        <br />
        <div class="container bg-light shadow rounded">
            <div class="row d-flex justify-content-center">
                <div class="title mt-2">
                    <h2 class="magazine-title text-center">{{ productData.title }}</h2>
                </div>
                <div class="image-container col-12 text-center">
                    <video autoplay muted loop class="h-100 w-100">
                        <source
                            src="../assets/images/video-metamorfosis-compress.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <div class="content-container row mt-3 p-3">
                <div class="">
                    <p class="long-description text-secondary text-center">
                        {{ productData.longDescription }}
                    </p>
                </div>
                <div class="text-center">
                    <div
                        class="badge rounded-pill ml-1 me-1 text-light bg-success"
                        v-for="(tag, i) in productData.tags"
                        :key="i"
                    >
                        <small>{{ tag }}</small>
                    </div>
                </div>
                <div class="text-center">
                    <p class="price">
                        {{ productData.priceAsString }} <small class="currency">CLP</small>
                    </p>
                    <button @click="invokeKhipu" class="purchase-button rounded-pill p-2 ml-1 me-1">
                        Comprar ebook
                    </button>
                    <p class="text-secondary mt-1 italic">
                        <small
                            >(Después de completar el pago se enviará el ejemplar <br />
                            por correo electrónico. ¡Gracias por tu compra!)</small
                        >
                    </p>
                </div>
            </div>
        </div>
        <AboutAuthor :authorName="authorName" />
        <div id="khipu-web-root"></div>
    </div>
    <FooterComponent />
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import AboutAuthor from '../components/AboutAuthor.vue'
import { ProductController } from '../store/Product/ProductController'
import Product from '../store/Product/Product'
import { KhipuController } from '../store/Khipu/KhipuController'
import { PaymentResponse } from '../store/Khipu/PaymentResponse'
import { PaymentRequest } from '../store/Khipu/PaymentRequest'

export default {
    name: 'ProductDetailView',
    components: {
        Navbar,
        FooterComponent,
        AboutAuthor
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        productData() {
            return ProductController.getLocalProduct(this.id) as Product
        },
        authorName() {
            const product = ProductController.getLocalProduct(this.id) as Product
            return product.author
        }
    },
    methods: {
        invokeKhipu() {
            const request: PaymentRequest = new PaymentRequest(
                2000,
                'CLP',
                'La Revolución Simbólica'
            )
            request.return_url = 'https://www.lametamorfosisdelalma.com/transaction-completed'
            request.cancel_url = 'https://www.lametamorfosisdelalma.com/transaction-cencelled'
            request.notify_url = 'https://lametamorfosis-backend-6105c00f8483.herokuapp.com/webhook'

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
.navbar-container,
.footer-container,
.view-container {
    background-color: #f8d7d9;
}
.price {
    font-size: 32px;
}
.magazine-title {
    font-size: 48px;
}
.long-description {
    text-align: justify !important;
}
</style>
