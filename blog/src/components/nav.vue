<template>
<nav class="bar bar-tab">
  <router-link class="tab-item" to="/" exact active-class="active" external>
    <span class="icon icon-home"></span>
    <span class="tab-label">首页</span>
  </router-link>
  <router-link class="tab-item" to="/about" active-class="active" external>
    <span class="icon icon-star"></span>
    <span class="tab-label">关于</span>
  </router-link>
  <router-link class="tab-item" to="/me" active-class="active" external>
    <span class="icon icon-me"></span>
    <span class="tab-label">我</span>
  </router-link>
</nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>
