<template >
    <div>
        <vue-form :state="formstate" @submit.prevent="onSubmitHandler">
            <div class="login-container mb-3">
                <div class="form-group">
                    <validate>
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <label for="model">Model</label>
                            </div>
                            <input id="model" type="text" v-model="device.model" placeholder="Model" required name="model"/>
                        </div>
                    </validate>
                </div>
                
                <div class="form-group">
                    <validate>
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <label for="price">Price</label>
                            </div>
                            <input id="price" type="number" v-model="device.price" placeholder="Price" required name="price"/>
                        </div>  
                    </validate>
                </div>
                <div class="form-group">
                    <validate>
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <label for="picture">Picture url</label>
                            </div>
                            <input  ref="pic" id="picture" type="text" v-model="device.picture" placeholder="Picture" name="picture"/>
                        </div>
                    </validate> 
                </div>
                <div class="form-group">
                    <validate>
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <label for="stock">Stock</label>
                            </div>
                            <input id="stock" type="number" v-model="device.stock" placeholder="Stock" required name="stock"/>
                        </div>
                    </validate>
                </div>
                <div class="form-group">
                    <validate>
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <label for="brand">Marca</label>
                            </div>  
                            <input id="brand" type="text" v-model="device.brand" placeholder="Brand" required name="brand"/>
                        </div>
                    </validate>
                    <div class="form-group">
                        <validate>
                            <div class="intput-group mb-3">
                                <div class="input-grou-prepend">
                                    <label for="specs">Specs</label>
                                </div>
                                <textarea 
                                class="textarea"
                                id="specs" 
                                v-model="device.specs" 
                                placeholder="Eech spec must be separeted by a comma ','" 
                                required name="specs" 
                                cols="20" 
                                rows="10"></textarea>
                            </div>  
                        </validate>
                    </div>
                </div>
                <div>
                    <div>
                        <span> 
                            {{ device.id != '' ? 'Modify '+ device.model : "" }}
                        </span>
                    </div>
                    <button 
                    :class=" device.id == '' ? 'btn btn-success mt-3' : 'btn btn-warning mt-3'" 
                    type="submit"> {{ device.id == '' ? 'Create New' : 'Modify ID:' + device.id  }}
                </button>
                <button class="btn btn-secondary mt-3 " @click="clearForm">Clear</button>
                <div>
                    <button v-if="device.id != ''"
                    type="button" 
                    class="btn btn-danger ml-3 mt-3 " 
                    @click="deleteDevice"
                    >Delete
                </button>    
            </div>
        </div> 
    </div>
</vue-form>
<div class="container">
    <div class="row" >
        <div class="col" v-for="(dev) in getStockedDevices" :key='dev.id' > 
            <OneCard
            button="Modify"
            :model="dev.model"
            :price="dev.price"
            :picture="dev.picture"
            :id="dev.id"
            :stock="dev.stock"
            :brand="dev.brand"
            :specs="dev.specs"
            @getSelectedItem="getSelectedItem"
            ></OneCard>
        </div>
    </div> 
</div>

</div>
</template>
<script>
import OneCard from './OneCard.vue';
import { mapGetters } from 'vuex';

export default {
    components: { OneCard },
    name:"CrudProduct",
    data(){
        return{
            BASE_URL: process.env.VUE_APP_MOCKAPI_SERVICE_URL,
            formstate:{},
            device:{ 
                id: "",
                model :"",
                specs: "",
                price: 0,
                picture: "",
                stock: 0,
                brand: "",
            }  
        }
    },
    computed:{
        ...mapGetters(['getStockedDevices']),
    },
    methods: {
        onSubmitHandler() {
            if(this.formstate.$valid){
                if(this.device.id !== ""){ 
                    this.saveChanges();
                }else if(this.device.id == ""){
                    this.addDevice();
                }
                this.clearForm();
            }
        },
        deleteDevice(){
            if(this.formstate.$valid){
                this.$store.dispatch('deleteDevice', this.device);
                this.clearForm();
            }
        },  
        getSelectedItem(item){
            let aDevice = {
                id: item.id,
                model: item.model,
                price: item.price,
                picture: item.picture,
                stock: item.stock,
                brand: item.brand,
                specs: item.specs
            } 
            this.device = aDevice;
            this.$refs.pic.focus();
        },
        saveChanges(){
            let aDevice = {
                id: this.device.id,
                model: this.device.model,
                price: parseInt(this.device.price),
                picture: this.device.picture,
                stock: parseInt(this.device.stock),
                brand: this.device.brand,
                specs: this.device.specs.trim()
            } 
            this.$store.dispatch('updateDevice', aDevice);
            this.clearForm();    
        },
        addDevice(){
            let aDevice = {
                model: this.device.model,
                price: parseInt(this.device.price),
                picture: this.device.picture,
                stock: parseInt(this.device.stock),
                brand: this.device.brand,
                specs: this.device.specs.trim()
            } 
            console.log(aDevice)
            this.$store.dispatch('addDevice', aDevice);
        },
        clearForm(){
            this.device = {
                id: "",
                model :"",
                specs: "",
                price: 0,
                picture: "",
                stock: 0,
                brand: "",
            }
            this.formstate._reset();
        }
    }
}
</script>
<style scoped>
textarea {
    width: 300px;
    min-height: 72px;
    padding: 2px;
    resize: none;
    overflow: hidden;
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 4px;
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    color: #000;
}

</style>