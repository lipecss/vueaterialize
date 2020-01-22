<template>

<div class="shopping-cart">
  <div class="cart-btn">
    <a class="waves-effect waves-light btn cart-length">Carrinho <span class="badge black">{{ cartLength }}</span></a>
  </div>

  <table>
    <tr v-for="(item, index) in cart" :key="index">
      <td class="center-align center">{{ item.name }}</td>
      <td class="center-align center">{{ 'R$' + item.price.toLocaleString('pt-BR') }}</td>
      <td class="center-align center">
        <a class="waves-effect waves-light btn red" @click="removeFromCart(index)" style="padding-top: 5px;">
            <ion-icon name="close-circle" size="small"></ion-icon>
        </a>         
      </td>
    </tr>  
  </table>

  <div class="card">
    <th>Total</th>
    <th>{{ 'R$' + total.toLocaleString('pt-BR') }}</th>
  </div>

  <div class="card">
      <div class="card-action">
          <a class="waves-effect waves-light btn red">Finalizar</a>
      </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'shoppingcart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    cartLength(){ return this.inCart.length; },
    cart(){
        return this.$store.getters.inCart.map((cartproduct) => {
            return this.$store.getters.products.find((itemForSale) => {
                return cartproduct === itemForSale.id;
            });
        });
    },
    total(){
        return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    }
  },
  methods: {
      removeFromCart(index) {
          this.$store.dispatch('removeFromCart', index)
      }
  }
};
</script>

<style scoped>
.cart-length {
    background: #f15574
}
table{
    margin: 10px 0;
    background: lavender;
}
tr {
    box-shadow: 8px 6px 4px rgba(0,0,0, 0.3258);
}
td {
    padding: 5px;
}


</style>