<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <span>用户名</span>
        <input type="text" v-model="formData.username">
      </div>
      <div class="row">
        <span>密码</span>
        <input type="password" v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
      </div>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">
  import AV from '../../lib/leancloud'

  export default{
    name: 'signUpForm',
    data () {
      return {
        formData: {
          username: '',
          passname: ''
        }
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
          alert(JSON.stringify(error))
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
