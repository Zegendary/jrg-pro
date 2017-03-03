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
        name: '空',
        city: '空',
        title: '空'
      },
      work: [
        {company: '阿里巴巴', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
        我的主要工作如下:
1. 完成既定产品需求。
2. 修复 bug。`
        },
        {company: '蚂蚁金服', content: '保密'}
      ],
      education: [
        { school: '空', content: '空' },
        { school: '空', content: '空' }
      ],
      projects: [
        { name: '商城主页', content: 'jQ,html5,CSS3' },
        { name: '饿了么', content: '1.Vue,Node,vue-resource,vue-router' }
      ],
      awards: [
        { name: '中队长', content: '六六六' },
        { name: '体育委员', content: '负责领跑早操' }
      ],
      contacts: [
        { contact: 'phone', content: '13812345678' },
        { contact: 'qq', content: '987654321' }
      ]
    }
  },
  mutations: {
    initState (state, payload) {
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
      state.user.id = null
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
