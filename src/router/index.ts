import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SessionsView from '@/views/SessionsView.vue'
import WritingsView from '@/views/WritingsView.vue'
import ReadingClubView from '@/views/ReadingClubView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/sessions', component: SessionsView },
    { path: '/writings', component: WritingsView },
    {
        path: '/product/:id',
        name: 'ProductDetailView',
        component: ProductDetailView,
        props: (route) => ({ id: route.params.id ?? 1 })
    },
    { path: '/reading-club', component: ReadingClubView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
