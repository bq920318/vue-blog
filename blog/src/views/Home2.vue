<template>
<div class="content infinite-scroll infinite-scroll-bottom" data-distance="100">
    <router-link tag="div" class="card" v-for="i in lists" :to="{path: '/details/' + i}">
      <div class="card-header">项目{{i}}</div>
      <div class="card-content"><div class="card-content-inner">内容{{i}}</div></div>
      <div class="card-footer">2016-10-{{i % 31}}</div>
    </router-link>
          <!-- 加载提示符 -->
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>  
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      lists: 0
    }
  },
  methods: {
    getList: function () {
      this.$http.get('/index.html').then((response) => {
        console.log(response.data)
      })
    },
    ...mapActions(['load_articles'])
  },
  mounted () {
    this.getList()
    // 调用zepto.js
    let $ = window.$
    // 使用self 替代 vue
    let self = this
    // $.detachInfiniteScroll($('.infinite-scroll'))
    // $.attachInfiniteScroll($('.infinite-scroll'))
    let loading = false
    let itemsPerload = 20
    let maxItems = 100
    let lastIndex = 0
    let addItems = (itemsCount, lastIndex) => {
      self.lists = lastIndex + itemsCount
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
