<template>
    <div>
        <nav>
            <div class="nav-wrapper white-text">
                <a href="#" class="brand-logo center">Carrinho <ion-icon class="cart-icon" name="cart"></ion-icon></a>
                <ul class="right">
                    <li><a class="waves-effect waves-light btn darken-3">Sair</a></li>
                </ul>
            </div>
        </nav>      
    </div>

</template>

  

<script>

export default {
  name: 'NavBar'
}

</script>

<style scoped>

.cart-icon {
    position: relative;
    top: 5px;
}
.btn {
    background: #f15574
}
</style>