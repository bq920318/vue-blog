import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    articles: [],
    loadArticles: true,
    canBack: false,
    showNav: true
  },
  getters: {
    count: (state) => state.count,
    articles: (state) => state.articles,
    canBack: (state) => state.canBack,
    canLoadArticles: (state) => state.loadArticles,
    showNav: (state) => state.showNav
  },
  actions: {
    inc_count ({commit}) {
      commit('INCREMENT_COUNT')
    },
    toggle_nav ({commit}) {
      commit('TOGGLE_NAV')
    },
    load_articles ({commit}, data) {
      commit('LOAD_ARTICLES', data)
    },
    toggleLoadArticles ({commit}) {
      commit('TOGGLE_LOAD_ARTICLES')
    },
    appendArticles ({commit}, data) {
      commit('SET_ARTICLES', data)
    }
  },
  mutations: {
    INCREMENT_COUNT (state) {
      state.count ++
    },
    TOGGLE_NAV (state) {
      state.showNav = !state.showNav
    },
    LOAD_ARTICLES (state, data) {
    },
    CAN_LOAD_ARTICLES (state) {
      state.loadArticles = !state.loadArticles
    },
    TOGGLE_LOAD_ARTICLES (state) {
      state.loadArticles = !state.loadArticles
    },
    SET_ARTICLES (state, data) {
      state.articles = state.articles.concat(data)
    }
  }
})
