import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    articls: [],
    canBack: false,
    showNav: true
  },
  getters: {
    count: (state) => state.count,
    articles: (state) => state.articles,
    canBack: (state) => state.canBack,
    showNav: (state) => state.showNav
  },
  actions: {
    inc_count ({commit}) {
      commit('INCREMENT_COUNT')
    },
    toggle_nav ({commit}) {
      commit('TOGGLE_NAV')
    },
    load_articles ({commit}) {
      commit('LOAD_ARTICLES')
    }
  },
  mutations: {
    INCREMENT_COUNT (state) {
      state.count ++
    },
    TOGGLE_NAV (state) {
      state.showNav = !state.showNav
    },
    LOAD_ARTICLES (state) {
    }
  }
})
