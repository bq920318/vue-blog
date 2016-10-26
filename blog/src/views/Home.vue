<template>
<div class="content pull-to-refresh-content" data-ptr-distance="55">
  <div class="pull-to-refresh-layer">
  	<div class="preloader"></div>
  	<div class="pull-to-refresh-arrow"></div>
  </div>
  <Articles></Articles>
</div>
</template>

<script>
import Articles from '../components/ArticleList'
export default{
  components: {
    Articles
  },
  mounted () {
    let $ = window.$
    $.initPullToRefresh('.pull-to-refresh-content')
    $(document).on('refresh', '.pull-to-refresh-content', (e) => {
      setTimeout((e) => {
        $.pullToRefreshDone('.pull-to-refresh-content')
      }, 2000)
    })
  }
}
</script>
