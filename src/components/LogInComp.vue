<template>
  <div class="login-container">
    <vue-form :state="formstate" @submit.prevent="onSubmit">
      <validate tag="label">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email"
          id="email"
          v-model="login.email"
          autocomplete="admin@coder.com"
          required name="email">
        </div>
      </validate>
      <validate tag="label">
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" 
          id="password" 
          v-model="login.password"
          autocomplete="Admin123"
          required
          name="password">
        </div>
      </validate>
      <div>
        <span v-if="this.loginSuccess"> Success! </span>
        <span v-if="this.loginError && this.isRegistered && !this.isLoading"> User or password are incorrect</span>
        <span v-if="this.loginError && !this.isRegistered && !this.isLoading"> User is not registered </span>
      </div>
      <button class="btn btn-success" type="submit" :disabled="isLoading">Login</button>
    </vue-form>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "LogInComp",
  props:{ 
    states:Object
  },
  data() {
    return {
      formstate:{},
      login: {
        email: "",
        password: ""
      },
    }
  },
  updated(){
      if(this.loginSuccess && !this.loginError && !this.isLoading && this.isRegistered){
        this.isAdmin ? this.$router.push('/product-mgm') : this.$router.push('/')
      }
  },
  methods: {
    onSubmit(){
      if(this.formstate.$valid){
        this.checkLogin();
      }
    },
    checkLogin(){
        this.$store.dispatch('logIn', this.login)
    },
  },
  computed: {
    ...mapGetters(['loginSuccess', 'loginError', 'isRegistered', 'isLoading', 'isAdmin'])
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>