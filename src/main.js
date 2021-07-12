import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  async created() {
   this.$store.dispatch('initFlagr')
  },
  store,
  render: h => h(App),
}).$mount('#app')
