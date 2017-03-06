<template>
  <div id="resumePreview">
    <section data-name="profile" v-if="resume.profile && resume.profile.name">
      <h1>{{resume.profile.name}}</h1>
      <h2>{{resume.profile.city}}</h2>
      <p>
        <small>{{resume.profile.title}}</small>
        <small>{{resume.profile.birthday}}</small>
      </p>
    </section>
    <section data-name="work" v-if="resume.work && resume.work.length > 0">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.work">
          <h3>{{item.company}}</h3>
          <p v-show="item.details">{{item.details}}</p>
        </li>
      </ol>
    </section>
    <section data-name="education" v-if="resume.education && resume.education.length > 0">
      <h2>教育经历</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}</h3>
          <p v-show="item.details">{{item.details}}</p>
        </li>
      </ol>
    </section>
    <section data-name="projects" v-if="resume.projects && resume.projects.length > 0">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.details">{{item.details}}</p>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-if="resume.awards && resume.awards.length > 0">
    <h2>获得荣誉</h2>
    <ol>
      <li v-for="item in resume.awards">
        <h3>{{item.name}}</h3>
        <p v-show="item.details">{{item.details}}</p>
      </li>
    </ol>
  </section>
    <section data-name="contacts" v-if="resume.contacts && resume.contacts.length > 0">
    <h2>联系方式</h2>
    <ol>
      <li v-for="item in resume.contacts">
        <h3>{{item.contact}}</h3>
        <p v-show="item.content">{{item.content}}</p>
      </li>
    </ol>
  </section>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    computed: {
      resume () {
        console.log(this.$store.state.resume)
        return this.$store.state.resume
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #resumePreview
    background white
    box-shadow 0 1px 3px 0 rgba(0,0,0,0.25)
    padding 2em
    color #333
    line-height 1.2
    overflow auto
    *
      box-sizing border-box
      font-variant normal
      font-weight normal
    ol
      list-style none
    section+section
      margin-top 2em
    p
      white-space pre-line // 请问为什么要加这一行
    h2:first-child
      background #ddd
      display inline-block
      padding .2em
      margin-bottom .5em
  section[data-name="profile"]>h1
    margin .1em 0
    font-size 4em

  section[data-name="work"],section[data-name="projects"],section[data-name="awards"]
    li+li
      margin-top 1em
    li
      h3
        border-bottom 1px solid #999
        padding-bottom .3em
        margin-bottom .3em
  section[data-name="education"]
    li
      line-height 1.5
      h3
        border-bottom 1px solid #999
        padding-bottom .3em
        margin-bottom .3em
  section[data-name="contacts"]
    td:first-child
      padding-right 1em
</style>
