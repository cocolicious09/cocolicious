import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/Home.vue'
import AboutView from './views/About.vue'
import FeaturedView from './views/Featured.vue'
import ProductsView from './views/Products.vue'
import FaqView from './views/Faq.vue'
import ContactView from './views/Contact.vue'
import LoginView from './views/Login.vue'
import SignupView from './views/Signup.vue'
import ProfileView from './views/Profile.vue'
import CartView from './views/Cart.vue'
import CheckoutView from './views/Checkout.vue'
import TransactionsView from './views/Transactions.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/featured', name: 'featured', component: FeaturedView },
    { path: '/products', name: 'products', component: ProductsView },
    { path: '/faq', name: 'faq', component: FaqView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signup', name: 'signup', component: SignupView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/cart', name: 'cart', component: CartView },
    { path: '/checkout', name: 'checkout', component: CheckoutView },
    { path: '/transactions', name: 'transactions', component: TransactionsView },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
