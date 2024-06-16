<template>
    <Navbar title="Mis escritos" />
    <div class="view-container">
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
import { type Product } from '../data/Product'
import Navbar from '../components/Navbar.vue'

export default {
    name: 'WritingsView',
    components: {
        ProductItem,
        Navbar
    },
    data() {
        const products: Product[] = productsJson.products
        return {
            products: products
        }
    }
}
</script>

<style scoped></style>
