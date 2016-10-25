import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: (state) => state.count
  },
  actions: {
    inc_count ({commit}) {
      commit('INCREMENT_COUNT')
    }
  },
  mutations: {
    INCREMENT_COUNT (state) {
      state.count ++
    }
  }
})
