export default {
    'CART_ADD_ITEM' (state, payload) {
        state.inCart.push(payload);
    },
    'CART_REMOVE_ITEM' (state, payload) {
        state.inCart.splice(payload, 1)
    }
}