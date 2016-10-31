import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const Home = {
//   template: '<div class="home"><h2>Home</h2><p>Hello</p></div>'
// }

// const Parent = {
//   data () {
//     return {
//       transitionName: 'slide-left'
//     }
//   },
//   watch: {
//     '$route' (to, from) {
//       const toDepth = to.path.split('/').length
//       const fromDepth = from.path.split('/').length
//       this.transitionName = toDepth < fromDepth : 'slide-right': 'slide-left'
//     }
//   },
//   template: '<div class="parent"><h2>Parent</h2><transition :name="child-view"></router-view class="child-view"></router-view></transition></div>'
// }
const router = new Router({
  mode: 'history',
  // base: __dirname,
  routes: [
    {
      name: 'home',
      path: '/home',
      component: require('./views/Home2')
      // children: [
      //   {path: ':p', component: require('./views/Details')}
      // ]
    },
    {
      name: 'details',
      path: '/details',
      component: require('./views/Detail'),
      children: [
        {path: ':id', component: require('./views/Detail')}
      ]
    },
    {
      name: 'about',
      path: '/about',
      component: require('./views/About')
    },
    {
      name: 'not Found!',
      path: '*',
      component: require('./views/404')
    }
  ]
})
module.exports = router
