<template>
<div class="content">
<h3>{{title}}</h3>
<p>{{content}}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      p: this.$route.params.id,
      content: '',
      title: ''
    }
  },
  created () {
    let self = this
    console.log(self.p)
    this.$http.get('/api/getArticle.php', {params: {aid: self.p}}).then((res) => {
      let data = JSON.parse(res.body)
      self.content = data.content
      self.title = data.title
    })
  }
}
</script>

<style scoped>
.content h3{
  text-align: center;
}
.content p {
  text-indent: 2rem;
}
</style>
