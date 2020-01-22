export default {
    addToCart(context, payload) {
        context.commit('CART_ADD_ITEM', payload);
    },
    removeFromCart(context, payload) {
        context.commit('CART_REMOVE_ITEM', payload);
    }
}