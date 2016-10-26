import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: require('./views/Home2')},
    {path: '*', component: require('./views/404')}
  ]
})
module.exports = router
