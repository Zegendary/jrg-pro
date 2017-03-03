<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <span>用户名</span>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <span>密码</span>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
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
    name: 'signInForm',
    data () {
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signIn () {
        let {username, password} = this.formData
        AV.User.logIn(username, password).then(() => {
          this.$emit('success', getAVUser())
        }, (error) => {
          this.errorMessage = Error(error)
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
