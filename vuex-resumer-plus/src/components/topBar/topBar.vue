<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="button-wrapper" v-show="!userID">
        <button class="sign-up" @click.prevent="signUpDialogVisible = true">注册</button>
        <button class="login" @click.prevent="signInDialogVisible = true">登录</button>
      </div>
      <div class="button-wrapper" v-show="userID">
        <span>你好，{{user.username}}</span>
        <button class="loginout" @click.prevent="signOut">登出</button>
      </div>
    </div>
    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <signUpForm @success="signIn($event)"/>
    </MyDialog>
    <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
      <signInForm @success="signIn($event)"/>
    </MyDialog>
  </div>
</template>
<script type="text/ecmascript-6">
  import MyDialog from '../MyDialog/MyDialog'
  import signUpForm from '../signUpForm/signUpForm.vue'
  import signInForm from '../signInForm/signInForm.vue'
  import AV from '../../lib/leancloud'

  export default{
    name: 'topBar',
    data () {
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false
      }
    },
    components: {
      MyDialog,
      signUpForm,
      signInForm
    },
    computed: {
      user () {
        return this.$store.state.user
      },
      userID () {
        return this.user.id
      }
    },
    methods: {
      signIn (user) {
        this.signUpDialogVisible = false
        this.signInDialogVisible = false
        this.$store.commit('setUser', user)
      },
      signOut () {
        AV.User.logOut()
        this.$store.commit('removeUser')
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
        .sign-up
          margin-right 16px
          background #02af5f
          color #fff
        .login
          background blue
          color #fff
        .loginout
          margin-right 16px
          background red
          color #fff
</style>
