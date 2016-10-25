<template>
<div class="articles">
  <div class="card" v-for="i in 10">
    <div class="card-header">新的公布:</div>
    <div class="card-content">
      <div class="list-block media-list">
        <ul>
          <li class="item-content">
            <div class="item-media">
              <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44">
            </div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">标题</div>
              </div>
              <div class="item-subtitle">子标题</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <span>2015/01/15</span>
      <span>5 评论</span>
    </div>
  </div>
</div>    
</template>

