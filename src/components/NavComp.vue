<template>
    <div class="mb-3">
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-for="link in getNavBar" :key="link.comp">
                <b-nav-item>
                    <router-link  v-if="link.visible"
                    class="nav-link active" 
                    :to="link.to"><ALabel 
                    :title="link.title " 
                    :value="link.value"/>
                </router-link>
            </b-nav-item>
        </b-navbar-nav>
    </b-collapse>
    <div>
        <button class="btn btn-success mr3" type="button" @click="userLogOut" :disabled="isLoading" v-if="isLogged"> Log Out</button>
    </div>
</b-navbar>
</div>   
</template>
<script>
//https://bootstrap-vue.org/docs/components/navbar
import { mapGetters } from 'vuex';
import ALabel from './ALabel.vue';

export default {
    name:"NavComp",
    components:{
        ALabel
    },
    methods:{
        userLogOut(){
            this.$store.dispatch('userLogOut');
        }
    },
    computed:{
        ...mapGetters(['getNavBar', 'isLogged', 'isLoading']),
    },
}
</script>
<style>
</style>