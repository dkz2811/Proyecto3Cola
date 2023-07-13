import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/index.js";
import MainCard from "./components/MainCard.vue"
import CartComp from "./components/CartComp.vue"
import RegisterComp from "./components/RegisterComp.vue"
import LogInComp from "./components/LogInComp.vue"
import CrudProduct from "./components/CrudProduct.vue"
import CustomerPage from "./components/CustomerPage.vue"

Vue.use(VueRouter);
Vue.use(store);

const routes = [
    { path: "/", component: MainCard, name: "store"},
    { path: "/log-in", component: LogInComp, name: "log-in"},
    { path: "/register", component: RegisterComp, name: "register"},
    { path: "/shopping-cart", component: CartComp, name: "shopping-cart"},
    { path: "/product-mgm", component: CrudProduct, name: "product-mgm"},
    { path: "/customer-page", component: CustomerPage, name: "customer-page"},
]

const router =  new VueRouter({
    mode: "history", 
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    if ( to.path === "/product-mgm"){
        if (store.getters.isLogged) {
            next(); 
        } else {
            next("/log-in"); 
        }
    } else {
        next();
    }
});



export default router;