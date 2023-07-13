<template>
    <div>
        <vue-form :state="formstate" @submit.prevent="onSubmit">
            <div class="login-container">
                <div class="form-group">
                    <validate tag="label">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Name</span>
                            </div>
                            <input type="text" class="form-control" v-model="user.name" autocomplete="enter name" required name="name">
                            <field-messages name="name" show="$touched">
                                <div slot="required"> Name required </div>
                            </field-messages>
                        </div>
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="label">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Email</span>
                            </div>
                            <input type="text" class="form-control" v-model="user.email" autocomplete="enter email" required name="email">
                            <field-messages name="email" show="$touched">
                                <div slot="required">Email required</div>
                            </field-messages>
                        </div>
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="label" :custom="{'check-password' : checkPassword}">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Enter password</span>
                            </div> 
                            <input type="password" class="form-control" v-model="user.password" autocomplete="enter password" required name="password1">
                            <field-messages name="password1" show="$touched">
                                <div slot="check-password">Password must have 8 or more characters, one or more uppercase, one or more lowercase one or more numbers</div>
                            </field-messages>
                        </div> 
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="label" :custom="{'password-coincide': passwordCoincide}">
                        <div class="intput-group mb-3">
                            <div class="input-grou-prepend">
                                <span class="input-group-text" >Enter password</span>
                            </div>          
                            <input type="password" class="form-control" v-model="user.password2" autocomplete="re-enter password" required name="password2">
                            <field-messages name="password2" show="$touched" >
                                <div slot="check-password">Password required</div>
                                <div slot="password-coincide">Passwords must be identical</div>
                            </field-messages>
                        </div> 
                    </validate>
                </div>  
                <div v-if="this.isRegistered"><span>This email is already registered</span></div>
                <button class="btn btn-success mt-3" type="submit" :disabled="this.isLoading">Send</button>
            </div>
        </vue-form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name:"RegisterComp",
    props:{
        users:Array,
        states:Object
    },
    data(){
        return{
            BASE_URL: process.env.VUE_APP_MOCKAPI_SERVICE_URL,
            formstate:{},
            user:
            {   
                name:"",
                email:"",
                password:"",
                isAdmin:false
            },
            password2 :"",
        };
    },
    updated(){
      if(this.loginSuccess && !this.loginError && !this.isLoading && this.isRegistered){
        this.isAdmin ? this.$router.push('/product-mgm') : this.$router.push('/')
      }
    },
    methods: {
        onSubmit(){ if(this.formstate.$valid){ this.registerUser(); }},
        checkPassword(value) { return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);},
        passwordCoincide(value) { return this.user.password === value;},
        registerUser(){ this.$store.dispatch('userExists', this.user);}
    },
    computed: {
        ...mapGetters(['isAdmin', 'isRegistered', 'isLoading', 'loginSuccess'])
    },      
}
</script>
<style>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
}
</style>