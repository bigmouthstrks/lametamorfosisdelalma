import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SessionsView from '@/views/SessionsView.vue'
import WritingsView from '@/views/WritingsView.vue'
import ReadingClubView from '@/views/ReadingClubView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import TransactionCompletedView from '@/views/TransactionCompletedView.vue'
import TransactionAbortedView from '@/views/TransactionAbortedView.vue'
import ProductsManagerView from '@/views/ProductsManagerView.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomeView },
    { path: '/sessions', component: SessionsView },
    { path: '/writings', name: 'WritingsView', component: WritingsView },
    { path: '/club-de-lectura', component: ReadingClubView },
    { path: '/transaction-completed', component: TransactionCompletedView },
    { path: '/transaction-aborted', component: TransactionAbortedView },
    {
        path: '/writings/:id',
        name: 'ProductDetailView',
        component: ProductDetailView,
        props: (route) => ({ id: route.params.id ?? 1 })
    },
    {
        path: '/products/manager',
        component: ProductsManagerView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
