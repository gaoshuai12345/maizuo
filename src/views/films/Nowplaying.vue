<template>
  <div>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check="false"
>
      <router-link to='/detail'>
      <van-cell v-for="data in datalist" :key="data.fimlId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster">
        <div class="title">{{ data.name }}</div>
        <div class="content">
        <div :class="data.grade? '': 'hiddle'">观众评分：<span style="color:red;">{{data.grade}}</span></div>
        <div class="actors">主演：{{data.actors|actorsFilter}}</div>
        <div>{{data.nation}}|{{data.runtime}}分钟</div>
        </div>
      </van-cell>
      </router-link>
    </van-list>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
Vue.filter('actorsFilter',(data) => {
  if(data===undefined)return '暂无主演'
  return data.map(item=>item.name).join(' ')
})
export default {
  data() {
    return {
      datalist: [],
      loading:false,
      finished:false,
      current:1,
      total:0
      
    }
  },
  mounted() {
    http({
         url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=9983816`,
        headers: {
        
           'X-Host': "mall.film-ticket.film.list",
         }
       }).then((res) => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  methods: {
    onLoad(){
      // 总长度匹配，仅用懒加载
      if(this.datalist.length===this.total&&this.total!==0){
        this.finished=true
        retur
      }
      console.log("到底了")
      this.current++
      console.log(this.current)
       http({
         url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=9983816`,
        headers: {
        
           'X-Host': "mall.film-ticket.film.list",
         }
       }).then((res) => {
      // console.log(res.data.data.films)
      // this.datalist = res.data.data.films
      this.datalist = [...this.datalist,...res.data.data.films]
      //loading 主动设置为false
      this.loading=false
    })
    },
    handleChangePage(id) {
      console.log(id);
      //编程式导航
      //  location.href = '/detail'
      //通过路径跳转
      //   this.$router.push(`/film/detail/${id}`);

      //通过命名路由跳转
      this.$router.push({
        name: "detail",
        params: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.van-list{
  .van-cell{
    overflow:hidden;
    padding: 0.833333rem;
  }
  img{
    width: 3.666667rem;
    float:left;
    margin-right: 0.3125rem
;
  }
  .title{
    color: black;
    font: size 16px;
  }
  .content{
    font: size 13px;
    color:gray;
  }
  .actors{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hiddle{
    visibility: hidden;
  }
  a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
}
</style>