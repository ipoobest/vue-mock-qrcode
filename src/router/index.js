import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import QrCodeView from '../views/QrCodeView.vue'
import QrCodeSancView from '../views/QrCodeSancView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'QrCodeView',
    component: QrCodeView
  },
  {
    path: '/scan',
    name: 'QrCodeSancView',
    component: QrCodeSancView
  }
]

const router = new VueRouter({
  routes
})

export default router
