<template>
  <div class= "header">
    <div class= "header-left">
      <span class="iconfont back-icon">&#xe9ff;</span>
    </div>
    <div class= "header-input">
      <span class="iconfont">&#xe645;</span>
      请输入城市/经典/游戏主题
    </div>
    <div class= "header-right">
      地点
      <span class="iconfont place-icon">&#xe77a;</span>
    </div>
  </div>
</template>
<script type= "text/javascript">

</script>

<style lang="stylus" scoped>
  @import '~stylus/init.styl'
  .header
    line-height: mRem(86)
    display: flex
    background: $bgColor
    color: #fff
    .header-left
      width: mRem(64)
      float: left
      .back-icon
        display: block
        font-size: 20px
        text-align: center
    .header-input
      flex: 1
      border-radius: .1rem
      background: #fff
      margin-top: mRem(12)
      height:mRem(64)
      line-height: mRem(64)
      margin-left:.2rem
      color: #ccc
      padding: 0 mRem(20)
      bbTag('box-sizing',border-box)
    .header-right
      width:mRem(124)
      float:right
      text-align:center
      .place-icon
        font-size:13px
</style>
