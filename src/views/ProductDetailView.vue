<template>
    <Navbar :title="productData.title" />
    <div class="view-container">
        <br />
        <br />
        <div class="container bg-light shadow rounded">
            <div class="row d-flex justify-content-center">
                <div class="title mt-2">
                    <h2 class="magazine-title text-center">{{ productData.title }}</h2>
                </div>
                <!-- <div class="image-container col-12 text-center">
                    <video autoplay muted loop class="h-100 w-100">
                        <source
                            src="../assets/images/video-metamorfosis-compress.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div> -->
            </div>
            <div class="content-container row mt-3 p-3">
                <div class="">
                    <p class="long-description text-secondary text-center">
                        {{ productData.longDescription }}
                    </p>
                </div>
                <div class="text-center">
                    <div
                        class="badge rounded-pill ml-1 me-1 bg-success text-light"
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
                    <button class="purchase-button rounded-pill p-2 ml-1 me-1">
                        Comprar ebook
                    </button>
                    <button class="btn btn-light rounded-pill">💟</button>
                </div>
            </div>
        </div>
        <AboutAuthor :data="authorData" />
    </div>
    <FooterComponent />
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import AboutAuthor from '../components/AboutAuthor.vue'

import { AuthorController } from '../store/AuthorController'
import { type Product } from '../store/Product'
import { ProductController } from '../store/ProductController'

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
            return ProductController.getProduct(this.id)
        },
        authorData() {
            const product: Product = this.productData as Product
            return AuthorController.getAuthor(product.author)
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
