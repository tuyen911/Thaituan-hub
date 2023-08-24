import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/CartView.vue'
import Search from '../views/SearchView.vue'
import Product from '../views/ProductView.vue'

// newspage
import  Domesticnews from '../components/Newspage/Domesticnews.vue'
import Guide from '../components/Newspage/Guide.vue'
import Internationalnews from '../components/Newspage/Internationalnews.vue'
import Promotionnews from '../components/Newspage/Promotionnews.vue'

// contact page
import Introduce from '../components/Contact/Introduce.vue'
import Contactstore from '../components/Contact/Contactstore.vue'
import Accountbank from '../components/Contact/Accountbank.vue'
import Buyingguide from '../components/Contact/Buyingguide.vue'
import Bankpolicy from '../components/Contact/Bankpolicy.vue'

import Lookup from '../components/header/Lookup.vue'
import Abate from '../components/Abate/Abate.vue'
import CheckOrder from '../views/CheckOrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/:name',
      name: 'search',
      component: Search
    },
    {
      path: '/:product',
      name: 'product',
      component: Product
    },
    {
      path: '/domesticnews',
      name: 'Domesticnews',
      component: Domesticnews
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/internationalnews',
      name: 'Internationalnews',
      component: Internationalnews
    },
    {
      path: '/promotionnews',
      name: 'Promotionnews',
      component: Promotionnews
    },
    // contact
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/contactstore',
      name: 'Contactstore',
      component: Contactstore
    },
    {
      path: '/accountbank',
      name: 'Accountbank',
      component: Accountbank
    },
    {
      path: '/buyingguide',
      name: 'Buyingguide',
      component: Buyingguide
    },
    {
      path: '/bankpolicy',
      name: 'Bankpolicy',
      component: Bankpolicy
    },
    {
      path: '/lookup',
      name: 'Lookup',
      component: Lookup
    },
    {
      path: '/abate',
      name: 'Abate',
      component: Abate
    },
    {
      path:'/order/checkoder/:code:email',
      name: 'CheckOrder',
      component: CheckOrder
    }
  ]
})

export default router
