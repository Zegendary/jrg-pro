<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="button-wrapper" v-show="true">
        <button class="sign-up" @click.prevent="signUpDialogVisible = true">注册</button>
        <button class="login">登录</button>
      </div>
      <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <signUpForm @success="login($event)"></signUpForm>
      </MyDialog>
      <div class="button-wrapper" v-show="">
        <button class="save">保存</button>
        <button class="preview">预览</button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import MyDialog from '../MyDialog/MyDialog'
  import signUpForm from '../signUpForm/signUpForm.vue'

  export default{
    name: 'topBar',
    data () {
      return {
        signUpDialogVisible: false
      }
    },
    components: {
      MyDialog,
      signUpForm
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      login (user) {
        this.signUpDialogVisible = false
        this.$store.commit('setUser', user)
      }
    }
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
        .save,.sign-up
          margin-right 16px
          background #02af5f
          color #fff
        .preview,.login
          background #ddd
          color #222
</style>
