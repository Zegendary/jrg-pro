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

  export default {
    name: 'app',
    components: {
      topBar,
      resumeEditor,
      resumePreview
    },
    created () {
      document.body.insertAdjacentHTML('afterbegin', icons)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100vh
    display flex
    flex-direction column
    background #EAEBEC
    main
      flex-grow 1
      display flex
      justify-content space-between
      padding 0 16px
      min-width 1024px
      max-width 1440px
      width 100%
      margin 16px auto
      #resumeEditor
        width 35%
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
</style>
