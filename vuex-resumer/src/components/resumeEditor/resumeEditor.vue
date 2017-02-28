<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" @click="selected = item.field" :class="{active: item.field === selected}">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <div v-for="subitem in resume[item.field]">
            <div class="resume-field" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input type="text" :value="value" @input="subitem[key] = $event.target.value">
            </div>
          </div>
        </div>
        <div v-else class="resume-field" v-for="(value,key) in resume[item.field]">
          <label> {{key}} </label>
          <!--严格模式下-->
          <!--<input type="text" :value="value" @input="change(resume,key,$event.target.value)">-->
          <!--非严格模式下-->
          <input type="text" :value="value" @input="resume[item.field][key] = $event.target.value">
        </div>
      </li>
    </ol>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    methods: {
      // change (obj, key, e) {  //严格模式中的探索
      //   console.log(obj)
      //   console.log(key)
      //   console.log(e)
      //   // this.$store.commit('modifyState', {key: e.target.value})
      // }
    },
    computed: {
      resume () {
        return this.$store.state.resume
      },
      selected: {
        get () {
          return this.$store.state.selected
        },
        set (value) {
          return this.$store.commit('switchTabs', value)
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  #resumeEditor
    background #fff
    box-shadow 0 1px 3px 0 rgba(0,0,0,.25)
    display flex
    flex-direction row
    overflow auto
    nav
      width 80px
      background black
      color #ffffff
      ol>li
        height 48px
        display flex
        justify-content center
        align-items center
        margin-top 16px
        margin-bottom 16px
        &.active
          background white
          color #000
    .panels
      flex-grow 1
      &>li
        padding 24px
        .resume-field
          label
            display block
          input[type=text]
            margin 16px 0
            border 1px solid #ddd
            box-shadow 0 1px 3px 0 rgba(0,0,0,.25)
            width 100%
            height 40px
            padding 0 8px
            &:focus
              outline none
    svg.icon
      width 24px
      height 24px
  ol
    list-style none

</style>
