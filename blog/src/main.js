import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
import VueResource from 'vue-resource'
/* eslint-disable no-new */
Vue.use(VueResource)

router.afterEach((to, from, next) => {
  store.state.canBack = to.path !== '/' && to.path !== '/home'
  store.state.showNav = to.path.match(/details/) === null
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
