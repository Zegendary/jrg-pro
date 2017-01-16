/**
 * Created by zhangxinwang on 16/01/2017.
 */
export default {
  fetch: function (STORAGE_KEY){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY || []))
  },
  save: function(STORAGE_KEY,items) {
    items = JSON.stringify(items)
    window.localStorage.setItem(STORAGE_KEY,items)
  }
}