<template>
   <div class="col s12 m8 offset-m2 l4">
        <div class="card">
          <div class="card-image">
            <img class="responsive" :src="image" height="250">
          </div>
          <div class="card-content">
            <div class="row">
              <div class="col l6">
                {{ name }}
              </div>
              <div class="col l6">
                {{ "R$" + fixPrice(price) }}
              </div>
            </div>
            <div v-if="quantity==0" class="stock-unavailable">
              <span>
                <ion-icon size="large" name="close"></ion-icon>
                Produto Indisponível
            </span>
            </div>
          </div>
          <div class="card-action">
            <a v-if="quantity>0" class="waves-effect waves-light btn" @click="addToCart(id)">Add no Carrinho</a>
            <a v-else class="waves-effect waves-light btn disabled">Add no Carrinho</a>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Productlist',
  props: ['id', 'name', 'image', 'price', 'quantity'],
  methods: {
      addToCart(id) {
          this.$store.dispatch('addToCart', id);
      },
      fixPrice(value){
        var formato = { 
          minimumFractionDigits: 2,  
        }
        return value.toLocaleString('pt-BR', formato)
      }
  },
}
</script>

<style scoped>

.stock-unavailable {
  width: 100%;
  float: left;
  position: relative;
  top: -41px;
  left: 80px;
}

.stock-unavailable span {
  width: 130px;
  height: 39px;
  margin: 0px 30px 0px;
  padding-left: 2px;
  display: inline-flex;
  position: relative;
  background: #e90313;
  font-size: 12px;
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bold;
}

.icon-X {
  width: 30px;
  height: 100%;
  position: absolute;
  left: 0;
  background: #ce0005;
  font-size: 24px;
  text-align: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  line-height: 38px;
}

@media screen and (min-width: 375px) {
  .stock-unavailable span {
    margin: 17px 30px 0px;
  }
}

@media screen and (min-width: 425px) {
  .stock-unavailable span {
    margin: 21px 48px 0px;
  }
}
@media screen and (min-width: 768px) {
  .stock-unavailable span {
    margin: 21px 48px 0px;
  }
}
@media screen and (min-width: 1024px) {
  .stock-unavailable span {
    margin: 0px 35px 0px;
  }
}
@media screen and (min-width: 1600px) {
  .stock-unavailable span {
    margin: 0px 67px 0px;
  }
}

</style>