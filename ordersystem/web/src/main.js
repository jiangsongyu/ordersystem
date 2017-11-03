import './assets/bootstrap/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './vuex/store'
import ElementUI from 'element-ui'
import './assets/theme-chalk/index.css'
import './assets/index.js'
// import VueSocketio from 'vue-socket.io';
// Vue.use(VueSocketio, 'http://localhost:888');  
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})