import Vue from 'vue'
import Vuex from 'vuex'
import http from "@/util/http";

Vue.use(Vuex)

export default new Vuex.Store({
  // state 公共状态
  state: {
    cityId:'310100',
    cityName:'上海',
    cinemaList:[]
  },
  getters: {
  },
  //统一管理，被devtools 记录状态的修改
  // 只支持同步
  mutations: {
    changeCityName(state,cityName){
      state.cityName=cityName
      // console.log(cityName)
    },
    changeCityId(state,cityId){
      state.cityId=cityId
    },
    changeCinemaData(state,data){
      state.cinemaList=data
    },
    clearCinema(state){
      state.cinemaList=[]
    }
    // vuex 管理保存公公状态，（分散在各个组件内的状态，统一管理）
    // 注意
    // vuex默认是管理在内存,一刷新页面,公共状态就丢失了
    // vuex持久化-todo

    /* vuex项目应用
    1.非父子的通信
    2.后端数据的缓存快照，减少重复数据请求，减轻服务器的压力，提高用户体验
    */
  },
  // 支持异步和同步
  actions: {
    getCinemaData(store,cityId){
      // console.log('getCinema-action')
      http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=6369556`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        // console.log(res.data.data.cinemas);
        // this.cinemaList = res.data.data.cinemas;
        store.commit("changeCinemaData",res.data.data.cinemas)
      });
    }
  },
  modules: {
  }
})
