export const productModule = {  
    state: {
        BASE_URL: process.env.VUE_APP_MOCKAPI_SERVICE_URL,
        devices: [],
        stockedDevices: [],
        stockChangeLoading: false
    },
    getters: { 
        getDevices: state => { return state.devices },
        getDevicesCount: state => { return state.devices.length },
        getStockedDevices: state => { return state.stockedDevices },
    },
    mutations: {
        setDevices: (state, payload) => { state.devices = payload },
        setStockedDevices: (state, payload) => { state.stockedDevices = payload },
        updateStockDown: (state, payload) => {state.stockedDevices.some( device => { if( device.id === payload.id ){ device.stock -= 1; }})},    
        updateStockUp: (state, payload) => {state.stockedDevices.some( device => { if( device.id === payload.id ){ device.stock += 1; }})},
    },
    actions: {  
        getDevices: (context) => {
            if( context.getters.getDevicesCount === 0 ){
                fetch(context.state.BASE_URL + '/products')
                .then(response => response.json())
                .then(data => { 
                    context.commit('setDevices', data)
                    context.commit('setStockedDevices', data)
                })
                .catch(error => console.log(error))
            }else{
                let stock = context.getters.getStockedDevices.slice()
                context.commit('setStockedDevices', stock )
            }
        },
        updateStock: (context) => {  
            let stock = context.getters.getStockedDevices;
            let cart = context.getters.getShoppingList;
            let idToUpdate = [];
            let devicesToUpdate = [];
            for( let item of cart ){  
                stock.find( device => { if( device.id === item.id ){ devicesToUpdate.push(device) }})
                idToUpdate.push(item.id)
            }
            let stockChanged = [ ...new Set(idToUpdate)]
            for( let id of stockChanged ){
                let item = devicesToUpdate.find( device => { if( device.id === id ){ return device }})
                fetch(context.state.BASE_URL + '/products/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(item),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .catch(error => console.log("updateStock: ", error))
            }
            context.commit('clearCart')
            context.commit('clearCartLocal')
            context.dispatch('setNavBarCart', context.getters.getShoppingListCount)
        },
        addDevice: (context, payload) => {
            fetch(context.state.BASE_URL + '/products', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .catch(error => console.log(error))
            context.commit('setDevices', [])
            context.dispatch('getDevices')
        },
        deleteDevice: (context, payload) => {   
            fetch(context.state.BASE_URL + '/products/' + payload.id, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .catch(error => console.log(error))
            context.commit('setDevices', [])
            context.dispatch('getDevices')
        },
        updateDevice: (context, payload) => {   
            fetch(context.state.BASE_URL + '/products/' + payload.id, {
                method: "PUT",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .catch(error => console.log(error))
            context.commit('setDevices', [])
            context.dispatch('getDevices')
        }
    }
}