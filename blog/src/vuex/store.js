import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    articls: []
  },
  getters: {
    count: (state) => state.count,
    articles: (state) => state.articles
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
