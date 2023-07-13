import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueForm from 'vue-form'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueForm)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
