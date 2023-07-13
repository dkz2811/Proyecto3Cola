<template >
  <div class="card mb-2" style="width: 18rem;">
    <div class="card-body" >
      <h5 class="card-title">{{ model }}</h5>
      
      <img class="card-img-top" :src="picture" :alt="model">
      <p class="text-start" > Price: ${{ price }}</p>
      <div>
        <p class="text-start" v-if="this.item.stock > 0"> Stock: {{ this.item.stock }}</p>
        <p class="text-start text-danger" v-else > Out of stock</p>
        <p class="text-start" v-if="button === 'Modify'">ID: {{ id }}</p>
      </div>
      <button class="btn btn-success mt-3" :disabled="this.item.stock < 1 && button !== 'Modify' ? true : false" @click="SubmitEvent">{{button}}</button>
      <div >
        <ul class="list-group list-group-flush" v-for="(spec, i) in devSpecs" :key="i">
          <li class="list-group-item">{{ spec }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "OneCard",
  data(){
    return {
      devSpecs:"",
      item:{
        id:0,
        model:"",
        price:0,
        stock:0,
      }
    }
  },
  props: {
    button: String,
    id: String,
    picture: String,
    price: Number,
    model:String,
    stock:Number,
    brand:String,
    specs: String,
  },
  created(){
    this.devSpecs = this.specs.split(',');
    this.item.stock = this.stock;
  },
  methods:{
    SubmitEvent(){
      
      if(this.button === "Add to Cart")
      {
        this.item.stock -= 1;
        let item = { id: this.id, model: this.model, price: this.price}
        this.$emit('getSelectedItem', item)
      }
      if (this.button === 'Modify'){
        let item = { 
          id: this.id, 
          model: this.model,
          price: this.price,
          picture: this.picture,
          stock: this.stock,
          brand: this.brand,
          specs: this.specs}
          this.$emit('getSelectedItem', item)
        }
        
      }
    }
  }
</script>

<style scoped>
img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 200px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */ 
  max-height: auto;
  min-height: auto;
}

</style>