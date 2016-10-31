<template>
  <div id="app" class="page-group">
    <div class="page native-scroll">
      <app-header></app-header>
      <app-nav v-show="showNav"></app-nav>
      <router-view class="child-view" mode="out-in"></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/header'
import AppNav from './components/nav'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppNav
  },
  computed: {
    ...mapGetters(['showNav'])
  },
  mounted () {
    window.$.init()
  }
}
</script>
