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
              <input type="text" :value="value">
            </div>
          </div>
        </div>
        <div v-else class="resume-field" v-for="(value,key) in resume[item.field]">
          <label> {{key}} </label>
          <input type="text" v-model="resume[item.field][key]">
        </div>
      </li>
    </ol>
  </div>
</template>
<script type="text/ecmascript-6">

  export default{
    data () {
      return {
        selected: 'profile',
        resume: {
          config: [
            {field: 'profile', icon: 'id'},
            {field: 'work', icon: 'work'},
            {field: 'education', icon: 'book'},
            {field: 'projects', icon: 'heart'},
            {field: 'awards', icon: 'cup'},
            {field: 'contacts', icon: 'phone'}
          ],
          profile: {
            name: '张新望',
            city: '上海',
            title: '张新望666'
          },
          work: [
            {company: 'AL', content: '我的第二份工作是'},
            {company: 'TX', content: '我的第一份工作是'}
          ],
          education: [
            { school: 'AL', content: '文字' },
            { school: 'TX', content: '文字' }
          ],
          projects: [
            { name: 'project A', content: '666' },
            { name: 'project B', content: '666' }
          ],
          awards: [
            { name: 'awards A', content: '六六六' },
            { name: 'awards B', content: '六六六' }
          ],
          contacts: [
            { contact: 'phone', content: '13812345678' },
            { contact: 'qq', content: '408788213' }
          ]
        }
      }
    },
    created () {
      console.log(Object.keys(this.resume))
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
