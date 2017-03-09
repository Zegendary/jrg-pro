<template>
  <div class="dialog-wrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
        <span class="close el-icon-close" @click="close"></span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .dialog-wrapper
    position fixed
    background hsla(0,0%,0%,.25)
    top 0
    bottom 0
    left 0
    right 0
    margin 0
    display flex
    justify-content center
    align-items center
    .dialog
      background #ffffff
      min-height 4em
      min-width 10em
      box-shadow 0px 0px 5px 4px rgba(0,0,0,0.15)
      header
        padding 15px
        display flex
        font-size 16px
        justify-content space-between
        background #1D8CE0
        color #ffffff
        .close
          font-size 14px
      main
        padding 15px
</style>
