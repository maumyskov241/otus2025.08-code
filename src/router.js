import { createWebHistory, createRouter } from 'vue-router'

import ProductView from './views/ProductsView.vue'
import ProductDetailView from './views/ProductDetailView.vue'
import BasketView from './views/BasketView.vue'
import NotFoundPage from './views/NotFoundPage.vue'
import CheckoutView from './views/CheckoutView.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'

const routes = [
 // { path: '/login', name: 'login', component: LoginView },
  { path: '/basket', name: 'basket', component: BasketView },
 // { path: '/checkout', name: 'checkout', component: CheckoutView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/:filter?', name: 'products', component: ProductView, props: true  },
  { path: '/product/:id', name: 'product', component: ProductDetailView, props: true },
//  { path: '/product/create', name: 'productCreate', component: ProductView  },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (
    !localStorage.getItem("auth") &&

    // ❗️ Avoid an infinite redirect
    to.name === 'productCreate'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }

  if (from.name == 'basket' && to.name != 'checkout') {
    const answer = window.confirm('Вы действительно хотите покинуть корзину? Товары сами себя не купят ;(((')
    if (!answer) return false
  }


})

export default router