<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <span>{{$t(`form.username`)}}</span>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <span>{{$t(`form.password`)}}</span>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" :value="$t(`form.submit`)" class="submit">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">
  import AV from '../../lib/leancloud'
  import Error from '../../lib/getErrorMessage'
  import getAVUser from '../../lib/getAVUser'

  export default{
    name: 'signUpForm',
    data () {
      return {
        formData: {
          username: '',
          passname: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signUp () {
        let {username, password} = this.formData
        let user = new AV.User()
        user.setUsername(username)
        user.setPassword(password)
        user.signUp().then(() => {
          this.$emit('success', getAVUser())
        }, (error) => {
          this.errorMessage = Error(error)
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .row
    display flex
    margin-bottom 15px
    span
      width 60px
      font-size 14px
      margin-right 10px
      text-align right
    input
      flex 1
  .submit
    color #ffffff
    padding 5px 0
    width 100%
    background #20A0FF
    border none
    border-radius 5px
</style>
