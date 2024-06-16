<template>
    <Navbar />
    <div class="view-container">
        <h1 class="text-center special-title">Escritos</h1>
        <br />
        <div class="container text-center">
            <div class="row row-cols-2">
                <div v-for="product in products" :key="product.id">
                    <ProductItem :data="product" />
                </div>
            </div>
        </div>
    </div>
    <div class="bg-success"></div>
</template>

<script lang="ts">
import ProductItem from '../components/ProductItem.vue'
import productsJson from '../data/products.json'
import { Product } from '../data/Product'

export default {
    name: 'WritingsView',
    components: {
        ProductItem
    },
    data() {
        const products: Product[] = productsJson.products
        return {
            products: products
        }
    }
}
</script>

<style scoped>
.navbar-container {
    background-color: #832b3b !important;
    color: #f8c29b;
}
</style>
