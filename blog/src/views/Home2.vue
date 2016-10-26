<template>
  <div class="content infinite-scroll infinite-scroll-preloader" data-distance="100">
    <div class="list-block">
        <ul class="list-container">
        </ul>
    </div>
          <!-- 加载提示符 -->
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>  
  </div>
</template>

<script>
export default {
  mounted () {
    var loading = false
    var maxItems = 20
    var itemsPerload = 5
    addItems(itemsPerload, 0)
    // test
    function addItems (number, lastIndex) {
      var html = ''
      for (let i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item' + i + '</div></div></li>'
      }
      window.$('.infinite-scroll-bottom .list-container').append(html)
    }
    // s
    addItems(itemsPerload, 0)
    var lastIndex = 5
    window.$(document).on('infinite', '.infinite-scroll-bottom', () => {
      if (loading) {
        return
      }
      loading = true
      setTimeout(() => {
        loading = false

        if (lastIndex >= maxItems) {
          window.$.detachInfiniteScroll(window.$('.infinite-scroll'))
          window.$('.infinite-scroll-preloader').remove()
          return
        }

        addItems(itemsPerload, lastIndex)

        lastIndex = window.$('.list-container li').length
        console.log(lastIndex)
        window.$.refreshScroller()
      }, 1000)
    })
  }
}
</script>

<style>
.infinite-scroll-preloader {
	margin-top: -1rem;
}
</style>
