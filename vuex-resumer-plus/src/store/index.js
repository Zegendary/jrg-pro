/**
 * Created by zhangxinwang on 27/02/2017.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import ojbPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,  // 严格模式
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {},
    resumeConfig: [
      {field: 'profile', icon: 'id', keys: ['name', 'city', 'title', 'birthday']},
      {field: 'work', icon: 'work', type: 'array', keys: ['company', 'details']},
      {field: 'education', icon: 'book', type: 'array', keys: ['school', 'details']},
      {field: 'projects', icon: 'heart', type: 'array', keys: ['name', 'details']},
      {field: 'awards', icon: 'cup', type: 'array', keys: ['name', 'details']},
      {field: 'contacts', icon: 'phone', type: 'array', keys: ['contact', 'content']}
    ]
  },
  mutations: {
    initState (state, payload) {
      console.log(state.resume)
      state.resumeConfig.map((item) => {
        if (item.type === 'array') {
          Vue.set(state.resume, item.field, [])
        } else {
          Vue.set(state.resume, item.field, {})
          item.keys.map((key) => {
            Vue.set(state.resume[item.field], key, '')
          })
        }
      })
      Object.assign(state, payload)
    },
    switchTabs (state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume (state, {path, value}) {
      ojbPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser (state, paylaod) {
      Object.assign(state.user, paylaod)
    },
    removeUser (state) {
      state.user.id = ''
      state.user.username = ''
    },
    addResumeSubfield (state, {field}) {
      let empty = {}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
        Vue.set(empty, key, '')
      })
    }
    // 使用传值得方法修改数据
    // modifyState (state, payload) {
    //   const num = payload.index
    //   const key1 = payload['key1']
    //   const key = payload['key']
    //   if (!isNaN(num)) {
    //     state.resume[key1][num][key] = payload.e
    //   } else {
    //     state.resume[key1][key] = payload.e
    //   }
    // },
    // 使用传路径的方法修改数据
  }
})
