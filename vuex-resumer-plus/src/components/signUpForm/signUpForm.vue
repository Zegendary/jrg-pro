<template>
  <div>
    <form @submit.prevent="signUp">
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
        user.signUp().then((loginUser) => {
          this.$emit('success', {
            username: loginUser.attributes.username,
            id: loginUser.id
          })
        }, (error) => {
          this.errorMessage = Error(error)
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
