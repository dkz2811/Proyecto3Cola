import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import { productModule } from './modules/product'
import { userModule } from './modules/user'
import { navbarModule } from './modules/navbar'
import { cartModule } from './modules/cart'

export default new Vuex.Store({
  state: { 
    BASE_URL: process.env.VUE_APP_MOCKAPI_SERVICE_URL,
    isLoading:false,
  },
  getters: {
    isLoading: state => { return state.isLoading },
  },
  mutations: {
    isLoading: (state, payload) => { state.isLoading = payload },
  },
  actions: {
    isLoading: (context, payload) => { context.commit('isLoading', payload) },
  },
  modules: {
    product: productModule,
    user: userModule,
    navbar: navbarModule,
    cart: cartModule
  }
})
