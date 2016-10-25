<template>
  <div id="app" class="page-group">
    <div class="page native-scroll">
      <app-header></app-header>
      <app-nav></app-nav>
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/header'
import AppNav from './components/nav'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppNav
  }
}
</script>
