import Vue from 'vue'
import App from './App.vue'
import getFlags from './utils/flagr'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      features: null,
    }
  },
  async created() {
    this.features = await getFlags()
  },
  watch: {
    features: function () {
      console.log(this.features)
    }
  },
  render: h => h(App),
}).$mount('#app')
