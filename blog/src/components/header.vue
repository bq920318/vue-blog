<template>
<header class="bar bar-nav">
  <a class="button button-link button-nav pull-left" @click="back" data-transition="slide-out">
    <span class="icon icon-left"></span>
    返回
  </a>
  <h1 class="title">
    我的博客
  </h1>
  <a class="button button-fill button-nav pull-right" @click="back" data-transition="slide-out">
    <span class="icon icon-search"></span>
  </a>
</header>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
