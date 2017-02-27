<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="button-wrapper">
        <button class="save">保存</button>
        <button class="preview">预览</button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  #topBar
    background #fff
    .wrapper
      display flex
      justify-content space-between
      align-items center
      padding 0 16px
      min-width 1024px
      max-width 1440px
      margin 0 auto
      height 64px
      .logo
        font-size 24px
        color #000
      .button-wrapper
        button
          width 72px
          height 32px
          line-height 32px
          font-size 18px
          text-align center
          border none
          cursor pointer
          &:focus
            outline none
        .save
          margin-right 16px
          background #02af5f
          color #fff
        .preview
          background #ddd
          color #222
</style>
