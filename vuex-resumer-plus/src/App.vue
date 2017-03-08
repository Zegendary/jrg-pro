<template>
  <div id="app">
    <header>
      <topBar></topBar>
    </header>
    <main>
      <resumeEditor></resumeEditor>
      <resumePreview></resumePreview>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
  import './assets/reset.css'
  import 'normalize.css/normalize.css'

  import topBar from './components/topBar/topBar'
  import resumeEditor from './components/resumeEditor/resumeEditor'
  import resumePreview from './components/resumePreview/resumePreview'
  import icons from './assets/icons'
  import store from './store/index'
  import getAVUser from 'lib/getAVUser'

  export default {
    name: 'app',
    store,
    components: {
      topBar,
      resumeEditor,
      resumePreview
    },
    created () {
      document.body.insertAdjacentHTML('afterbegin', icons)
      let state = localStorage.getItem('state')
      if (state) {
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
      this.$store.commit('setUser', getAVUser())
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100vh
    display flex
    flex-direction column
    background #EAEBEC
    &>main
      flex-grow 1
      display flex
      justify-content space-between
      padding 0 16px
      min-width 1024px
      max-width 1440px
      width 100%
      margin 16px auto
      #resumeEditor
        min-width 35%
        background #fff
      #resumePreview
        flex-grow 1
        margin-left 16px
        background #fff
  svg.icon
    height 1em
    width 1em
    fill currentColor
    vertical-align -0.1em
    font-size 16px
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
