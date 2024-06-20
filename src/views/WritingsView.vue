<template>
    <Navbar title="Mis escritos" />
    <div class="view-container">
        <br />
        <div class="container">
            <div class="row d-flex">
                <div class="col-12 col-lg-6" v-for="product in products" :key="product.id">
                    <ProductItem :data="product" />
                    <br />
                </div>
            </div>
        </div>
    </div>
    <div class="bg-success"></div>
    <FooterComponent />
</template>

<script lang="ts">
import ProductItem from '../components/ProductItem.vue'
import productsJson from '../store/products.json'
import { type Product } from '../store/Product'
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    name: 'WritingsView',
    components: {
        ProductItem,
        Navbar,
        FooterComponent
    },
    data() {
        const products: Product[] = productsJson.products
        return { products: products }
    }
}
</script>

<style scoped>
.view-container {
    background-color: white;
    background-image: url('../assets/images/butterfly.png');
    background-repeat: no-repeat;
    background-position: center;
}
</style>
