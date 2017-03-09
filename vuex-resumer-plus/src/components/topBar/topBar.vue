<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">{{$t(`topbar.resume`)}}</span>
      <div class="button-wrapper" v-show="!userID">
        <button class="change-lang" @click="changeLang">{{$t(`button`)}}</button>
        <button class="sign-up" @click.prevent="signUpDialogVisible = true">{{$t(`topbar.signUp`)}}</button>
        <button class="login" @click.prevent="signInDialogVisible = true">{{$t(`topbar.login`)}}</button>
      </div>
      <div class="button-wrapper" v-show="userID">
        <span>{{$t(`topbar.hello`)}}，{{user.username}}</span>
        <button class="change-lang" @click="changeLang">{{$t(`button`)}}</button>
        <button class="loginout" @click.prevent="signOut">{{$t(`topbar.logout`)}}</button>
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
  import Vue from 'vue'
  import VueI18n from 'vue-i18n'
  import i18n from '../../i18n/'

  var locales = i18n
  Vue.use(VueI18n)
  Vue.config.lang = 'zh_CN'

  Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
  })

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
      },
      changeLang () {
        if (Vue.config.lang === 'en') {
          Vue.config.lang = 'zh_CN'
        } else {
          Vue.config.lang = 'en'
        }
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
