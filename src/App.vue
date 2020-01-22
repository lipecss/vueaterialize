<template>
  <div id="app">

    <NavBar/>

    <div class="row" style="margin-top: 30px;">
      <div class="col l3">
        <Cart />
      </div>
      <div class="col l9">
        <Productlist 
          v-for="product in products" :key="product.id" 
          :id="product.id" 
          :name="product.name" 
          :image="product.image" 
          :price="product.price"
          :quantity="product.quantity" 
        />
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Productlist from './components/Productlist'
import Cart from './components/Cart';

export default {
  name: 'app',
  components: {
    NavBar,
    Productlist,
    Cart
  },
    computed: {
    products() {
      return this.$store.getters.products; 
    }
  },
}
</script>

<style>
.cartIcon {
    padding: 5px;
}

</style>
