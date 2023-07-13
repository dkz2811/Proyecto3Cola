export const cartModule = {
    state: {
        shoppingList: [],
    },
    getters: {
        getShoppingList: state => { return state.shoppingList },
        getShoppingListTotal: state => { return state.shoppingList.reduce((total, device) => { return total + device.price}, 0);},
        getShoppingListCount: state => { return state.shoppingList.length },
    },
    mutations: {
        addProductToShoppingList: (state, payload) => {  state.shoppingList.push(payload); },
        removeProductFromShoppingList: (state, payload) => { state.shoppingList.splice(payload, 1); },
        clearCart: (state) => { state.shoppingList = [] },
        clearCartLocal: () => { localStorage.removeItem('cart') },
        setCartFromLocalStorage: (state, payload) => { state.shoppingList = payload },
        setCartFromBackEnd: (state, payload) => { state.shoppingList = payload },
    },
    actions: {
        setCartFromBackEnd: (context, payload) => {
            context.commit('setCartFromBackEnd', payload)
            context.commit('setNavBarCart', payload.length)
        },
        setCartFromLocalStorage: (context) => {
            let cart = JSON.parse(localStorage.getItem('cart')) || null
            if( cart !== null ){ 
                context.commit('setCartFromLocalStorage', cart)
                context.commit('setNavBarCart', cart.length)
            }
        },
        addProductToShoppingList: (context, payload) => {
            context.commit('addProductToShoppingList', payload)
            context.commit('updateStockDown', payload)
            context.dispatch('setNavBarCart', context.state.shoppingList.length)
            localStorage.setItem('cart', JSON.stringify(context.state.shoppingList))
        },
        removeProductFromShoppingList: (context, payload) => {
            let deviceToUpdateStock = context.state.shoppingList[payload];
            context.commit('removeProductFromShoppingList', payload)
            context.commit('updateStockUp', deviceToUpdateStock)
            context.dispatch('setNavBarCart', context.state.shoppingList.length)
            localStorage.setItem('cart', JSON.stringify(context.state.shoppingList))
        },
        checkOut: (context) => {    
            context.dispatch('getRecipt');
            context.dispatch('updateUser');
            context.dispatch('updateStock')
        },
        getRecipt: (context) => {
            console.log("getRecipt cart.js")
            let recipt = { id: Date.now(), date: new Date().toLocaleDateString(), total: context.getters.getShoppingListTotal, detail:[] }
            for ( let item of context.state.shoppingList) { recipt.detail.push({ qtty: 1, product_id: item.id, product_name: item.model, price: item.price }) }
            context.commit('addRecipt',recipt);
        },
    }
}