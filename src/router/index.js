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
// Detail
import Returnpolicy from '../components/Detail/Returnpolicy.vue'
import Warrantypolicy from '../components/Detail/Warrantypolicy.vue'
import Salespolicy from '../components/Detail/Salespolicy.vue'
import Cuspolicy from '../components/Detail/Cuspolicy.vue'
import Accbank from '../components/Detail/Accbank.vue'

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
      // tin tức trong nước
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
      // hướng dẫn cho người mới
    },
    {
      path: '/internationalnews',
      name: 'Internationalnews',
      component: Internationalnews
      // tin tức quốc tế
    },
    {
      path: '/promotionnews',
      name: 'Promotionnews',
      component: Promotionnews
      // tin khuyến mãi
    },
    // contact
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
      // giới thiệu
    },
    {
      path: '/contactstore',
      name: 'Contactstore',
      component: Contactstore
      // liên hệ cửa hàng
    },
    {
      path: '/accountbank',
      name: 'Accountbank',
      component: Accountbank
      // tài khoản ngân hàng
    },
    {
      path: '/buyingguide',
      name: 'Buyingguide',
      component: Buyingguide
      // hướng dẫn mua hàng
    },
    {
      path: '/bankpolicy',
      name: 'Bankpolicy',
      component: Bankpolicy
      // chính sách bán hàng
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
    },
    // Detail
    {
      path: '/returnpolicy',
      name: 'Returnpolicy',
      component: Returnpolicy
      // chính sách đổi trả
    },
    {
      path: '/warrantypolicy',
      name: 'Warrantypolicy',
      component: Warrantypolicy
      // quy định bảo hành
    },
    {
      path: '/salespolicy',
      name: 'Salespolicy',
      component: Salespolicy
      // chính sách bán hàng online
    },
    {
      path: '/cuspolicy',
      name: 'Cuspolicy',
      component: Cuspolicy
      // chính sách thẻ khách hàng
    },
    {
      path: '/accbank',
      name: 'Accbank',
      component: Accbank
      // tài khoản khách hàng
    },
    
  ]
})

export default router
