import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 公共状态
  state: {
    cityId:'310100',
    cityName:'上海'
  },
  getters: {
  },
  //统一管理，被devtools 记录状态的修改
  mutations: {
    changeCityName(state,cityName){
      state.cityName=cityName
      // console.log(cityName)
    },
    changeCityId(state,cityId){
      state.cityId=cityId
    }
    // vuex 管理保存公公状态，（分散在各个组件内的状态，统一管理）

    // vuex默认是管理在内存,一刷新页面,公共状态就丢失了
    // vuex持久化-todo
  },
  actions: {
  },
  modules: {
  }
})
