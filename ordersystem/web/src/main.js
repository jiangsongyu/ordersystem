import './assets/bootstrap/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router/'

import ElementUI from 'element-ui'
import './assets/theme-chalk/index.css'
import './assets/index.js'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})