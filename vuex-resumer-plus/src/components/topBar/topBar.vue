<template>
  <div id="topBar">
    <div class="wrapper">
      <div class="logo-wrapper">
        <span class="logo">{{$t(`topbar.resume`)}}</span>
      </div>
      <div class="button-wrapper" v-show="!userID">
        <el-button :plain="true" size="small" type="info" @click.prevent="signUpDialogVisible = true">{{$t(`topbar.signUp`)}}</el-button>
        <el-button type="info" size="small" @click.prevent="signInDialogVisible = true">{{$t(`topbar.login`)}}</el-button>
        <el-switch v-model="lang" on-color="#13ce66" off-color="#58B7FF" on-text="En" off-text="中文"></el-switch>
      </div>
      <div class="button-wrapper" v-show="userID">
        <span>{{$t(`topbar.hello`)}}，{{user.username}}</span>
        <button class="loginout" @click.prevent="signOut">{{$t(`topbar.logout`)}}</button>
        <el-switch v-model="lang" on-color="#13ce66" off-color="#58B7FF" on-text="En" off-text="中文"></el-switch>
      </div>
    </div>
    <MyDialog :title="$t(`topbar.signUp`)" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <signUpForm @success="signIn($event)"/>
    </MyDialog>
    <MyDialog :title="$t(`topbar.login`)" :visible="signInDialogVisible" @close="signInDialogVisible = false">
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

  export default{
    name: 'topBar',
    data () {
      return {
        lang: true,
        signUpDialogVisible: false,
        signInDialogVisible: false
      }
    },
    components: {
      MyDialog,
      signUpForm,
      signInForm
    },
    watch: {
      lang: function (val) {
        Vue.config.lang = val ? 'zh_CN' : 'en'
      }
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
</style>
