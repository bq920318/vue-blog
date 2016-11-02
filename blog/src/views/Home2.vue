<template>
<div class="content infinite-scroll infinite-scroll-bottom" data-distance="100">
    <router-link tag="div" class="card" v-for="i in articles" :to="{path: '/details/' + i.id}">
      <div class="card-header">{{i.title}}</div>
      <div class="card-content"><div class="card-content-inner">{{i.content}}</div></div>
      <div class="card-footer">{{i.pubtime}}</div>
    </router-link>
          <!-- 加载提示符 -->
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>  
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      lists: 0
    }
  },
  computed: {
    ...mapGetters(['canLoadArticles', 'articles'])
  },
  methods: {
    ...mapActions(['load_articles', 'toggleLoadArticles', 'appendArticles'])
  },
  created () {
    if (this.canLoadArticles) {
      this.toggleLoadArticles()
      let self = this
      this.$http.get('/api/getList.php', {params: {pageno: 1}}).then((res) => {
        let data = JSON.parse(res.body)
        self.appendArticles(data)
      })
    }
  },
  mounted () {
    // 调用zepto.js
    let $ = window.$
    // 使用self 替代 vue
    let self = this
    let loading = false
    let itemsPerload = 20
    let maxItems = 100
    let lastIndex = 0
    let addItems = (itemsCount, lastIndex) => {
      this.$http.get('/api/getList.php', {params: {pageno: 2}}).then((data) => {
        console.log(data.body)
      })
    }
    // 初始化添加元素
    addItems(itemsPerload, lastIndex)
    lastIndex = itemsPerload
    $('.infinite-scroll-bottom').on('infinite', (e) => {
      if (loading) {
        return
      }
      loading = true
      setTimeout(() => {
        // 重置flag
        loading = false
        if (lastIndex >= maxItems) {
          $.detachInfiniteScroll($('.infinite-scroll'))
          $('.infinite-scroll-preloader').remove()
          $.toast('已加载所有数据。', 2345, 'finished')
          return
        }
        addItems(itemsPerload, lastIndex)
        lastIndex = self.lists
        $.refreshScroller()
      }, 1000)
    })
  }
}
</script>

<style>
.infinite-scroll-preloader {
}
.infinite-scroll{
}
.finished {
  background: blue;
}
</style>
