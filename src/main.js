import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(require('vue-moment'))

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'qrcade',
  databaseURL: 'https://qrcade.firebaseio.com',
  apiKey: 'AIzaSyBIEMYxKHl1Ht3yetmk4n9Fq4IazQDGq7I',
  authDomain: 'qrcade.firebaseapp.com',
  storageBucket: 'qrcade.appspot.com',
  messagingSenderId: '416126815522',
  appId: '1:416126815522:web:64082ef59259ce1ba1a97b',
  measurementId: 'G-CPFG21HV4T'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export const db = firebase.firestore()
console.log('main db ' + db)
