<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resumeConfig" @click="selected = item.field" :class="{active: item.field === selected}">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resumeConfig" v-show="item.field === selected">
        <div v-if="item.type === 'array'">
          <h2>{{$t(`resume.${item.field}._`)}}</h2>
          <div v-for="(subitem,i) in resume[item.field]" class="subitem">
            <el-button class="remove" type="danger" @click="removeResumeSubfield(item.field, i)" size="mini">{{$t(`button.delete`)}}</el-button>
            <div class="resume-field" v-for="(value,key) in subitem">
              <label> {{$t(`resume.${item.field}.${key}`)}} </label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
            </div>
          </div>
          <el-button class="add-new" type="success" @click="addResumeSubfield(item.field)">{{$t(`button.add`)}}</el-button>
        </div>
        <div v-else class="resume-field" v-for="(value,key) in resume[item.field]">
          <label> {{$t(`resume.profile.${key}`)}} </label>
          <!--严格模式下传[路径]的方法-->
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
          <!--严格模式下传[值]的方法-->
          <!--<input type="text" :value="value" @input="change(item.field,key,$event.target.value)">-->
          <!--非严格模式下-->
          <!--<input type="text" :value="value" @input="resume[item.field][key] = $event.target.value">-->
        </div>
      </li>
    </ol>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    methods: {
      // 严格模式下传[值]的方法
      change (key1, key, e, index) {
        this.$store.commit('modifyState', {
          key1,
          key,
          e,
          index
        })
      },
      // 严格模式下传[值]的方法
      changeResumeField (path, value) {
        this.$store.commit('updateResume', {
          path,
          value
        })
      },
      addResumeSubfield (field) {
        this.$store.commit('addResumeSubfield', {field})
      },
      removeResumeSubfield (field, index) {
        this.$store.commit('removeResumeSubfield', {field, index})
      }
    },
    computed: {
      resume () {
        return this.$store.state.resume
      },
      resumeConfig () {
        return this.$store.state.resumeConfig
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
            margin 12px 0
            border 1px solid #ddd
            box-shadow 0 1px 3px 0 rgba(0,0,0,.25)
            width 100%
            height 32px
            padding 0 8px
            &:focus
              outline none
        .subitem
          position relative
          margin-top 20px
          .remove
            position absolute
            right 0
        .add-new
          margin-top 10px
          width 100%
    svg.icon
      width 24px
      height 24px
  ol
    list-style none

</style>
