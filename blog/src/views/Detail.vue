<template>
<div class="content">
Detail {{p}}
</div>
</template>

<script>
export default {
  data () {
    return {
      p: this.$route.params
    }
  }
}
</script>
