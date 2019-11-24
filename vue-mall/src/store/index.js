import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: store,
  mutations,
  actions,
  getters
})
