import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import QrCodeView from '../views/QrCodeView.vue'
import QrCodeSancView from '../views/QrCodeSancView.vue'
import HistoryView from '../views/HistoryView.vue'

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
  },
  {
    path: '/history',
    name: 'HistoryView',
    component: HistoryView
  }
]

const router = new VueRouter({
  routes
})

export default router
