<template>
    <div class="writings-page">
        <Navbar title="Mis escritos" backRoute="" :isBackVisible="true" />

        <div class="writings-hero">
            <p class="text-eyebrow writings-eyebrow">✦ &nbsp; Escritos &nbsp; ✦</p>
            <h2 class="writings-heading cinzel-heading text-gold">Palabras del alma</h2>
            <div class="writings-ornament">⊱ ✦ ⊰</div>
        </div>

        <div class="writings-body">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div
                        class="col-12 col-lg-9 col-xl-7"
                        v-for="product in products"
                        :key="product.id"
                    >
                        <ProductItem :product="product" />
                    </div>
                </div>
            </div>
        </div>

        <FooterComponent />
    </div>
</template>

<script lang="ts">
import ProductItem      from '../components/ProductItem.vue'
import Navbar           from '../components/Navbar.vue'
import FooterComponent  from '../components/FooterComponent.vue'
import { ProductController } from '../store/Product/ProductController'

export default {
    name: 'WritingsView',
    components: { ProductItem, Navbar, FooterComponent },
    data() {
        return { products: ProductController.getLocalProducts() }
    }
}
</script>

<style scoped>
.writings-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #120620 0%, #1e0b2e 50%, #3a0d1e 100%);
}

.writings-hero {
    padding: 110px 20px 50px;
    text-align: center;
}

.writings-eyebrow {
    opacity: 0.8;
    margin-bottom: 14px;
}

.writings-heading {
    font-size: clamp(28px, 4vw, 44px);
    margin-bottom: 16px;
}

.writings-ornament {
    color: #c9a84c;
    font-size: 16px;
    letter-spacing: 6px;
    opacity: 0.7;
}

.writings-body {
    padding: 10px 0 60px;
}
</style>
