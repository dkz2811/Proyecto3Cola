<template >
    <div class="container">
        <div class="row">
            <div class="col" v-for="(dev) in getStockedDevices" :key='dev.id'> 
                <OneCard
                button="Add to Cart"
                :model="dev.model"
                :price="dev.price"
                :picture="dev.picture"
                :id="dev.id"
                :stock="dev.stock"
                :specs="dev.specs"
                @getSelectedItem="getSelectedItem"
                ></OneCard>
            </div>
        </div> 
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import OneCard from './OneCard.vue'

export default {
    name: 'MainCard',
    components: {
        OneCard,
    },
    computed:{
        ...mapGetters(['getStockedDevices']),
    },
    methods:{
        getSelectedItem(item){
            this.$store.dispatch('addProductToShoppingList', item)
        }, 
    }
}
</script>
<style>

</style>