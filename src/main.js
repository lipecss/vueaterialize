import Vue from 'vue'
import  '../node_modules/materialize-css/dist/css/materialize.min.css'
import  '../node_modules/materialize-css/dist/js/materialize.min.js'
import  '../node_modules/vue-ionicons/ionicons.css'
import App from './App.vue'
import store from './store/index'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
