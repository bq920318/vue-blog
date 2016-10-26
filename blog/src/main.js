import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
/* eslint-disable no-new */
router.afterEach((to, from, next) => {
  store.state.canBack = to.path !== '/'
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
