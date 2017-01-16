import Vue from 'vue'
import Storage from './storage'

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },
  methods: {
    addTodo() {
      this.todoList.push({
        content: this.newTodo,
        createTime: new Date().Format("yyyy-MM-dd hh:mm:ss"),
        finished: false
      })
      this.newTodo = ''
    },
    removeTodo(item) {
      let index = this.todoList.indexOf(item)
      this.todoList.splice(index,1)
    },
    fetchItem(argu) {
      return Storage.fetch(argu) == null ? []: Storage.fetch(argu)
    }
  },
  created() {
    window.onbeforeunload = () => {
      Storage.save('ToDoList',this.todoList)
      Storage.save('NewItem',this.newTodo)
    }
    this.todoList = this.fetchItem('ToDoList')
    this.newTodo = this.fetchItem('NewItem')
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
