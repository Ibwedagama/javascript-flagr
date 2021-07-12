import Vue from 'vue'
import Vuex from 'vuex'
import flagr from './modules/flagr'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    flagr
  }
})

