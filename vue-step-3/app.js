import Vue from 'vue'
import Storage from './storage'
import AV from 'leancloud-storage'

var APP_ID = 'VU2Q5GFPX9GzaOOQ0ka4pIOa-gzGzoHsz';
var APP_KEY = 'lE8CkfPRCgSBApNu3zmKUGht';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: [],
    //表单注册登陆
    actionType: 'signUp',
    formData: {
      username: '',
      password: ''
    },
    currentUser: null
  },
  methods: {
    addTodo() {
      this.todoList.push({
        content: this.newTodo,
        createTime: new Date().Format("yyyy-MM-dd hh:mm:ss"),
        finished: false
      })
      // AV.User.Object.set('todoList',this.todoList)
      // AV.User.save()
      this.newTodo = ''
    },
    removeTodo(item) {
      let index = this.todoList.indexOf(item)
      this.todoList.splice(index,1)
    },
    fetchItem(argu) {
      return Storage.fetch(argu) == null ? []: Storage.fetch(argu)
    },
    signUp() {
      let user = new AV.User();
      user.setUsername(this.formData.username);
      user.setPassword(this.formData.password);
      user.signUp().then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
      }, function (error) {
        alert("注册失败")
      });
    },
    login() {
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        console.log(loginedUser)
        // this.todoList = loginedUser.get('todoList')
        this.currentUser = this.getCurrentUser()
      }, function (error) {
        alert("登陆失败")
      });
    },
    logout() {
      AV.User.logOut()
      this.currentUser = null
      window.location.reload()
    },
    getCurrentUser() {
      let current = AV.User.current()
      if (current){
        let {id, createdAt, attributes: {username}} = current
        return {id, username, createdAt}
      } else{
        return null
      }
    }
  },
  created() {
    window.onbeforeunload = () => {
      Storage.save('ToDoList',this.todoList)
      Storage.save('NewItem',this.newTodo)
    }
    this.todoList = this.fetchItem('ToDoList')
    this.newTodo = this.fetchItem('NewItem')
    this.currentUser = this.getCurrentUser()

    //日期格式化
    Date.prototype.Format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
  }
})
