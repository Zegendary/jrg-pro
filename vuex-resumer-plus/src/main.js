// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Switch } from 'element-ui'
import VueI18n from 'vue-i18n'
import i18n from './i18n/'

var locales = i18n
Vue.use(VueI18n)
Vue.config.lang = 'zh_CN'

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
