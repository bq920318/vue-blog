﻿import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: require('./views/Home')},
    {path: '*', component: require('./views/404')}
  ]
})
