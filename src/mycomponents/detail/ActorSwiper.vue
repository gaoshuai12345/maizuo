<template>
  <el-carousel height="5.3125rem" indicator-position="none" autoplay="false">
    <el-carousel-item v-for="(data,index) in filmInfo.actors" :key="index">
        <img :src="data.avatarAddress">
      <div>{{data.name}}</div>
      <div>{{data.role}}</div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import http from "@/util/http";
export default {
    data(){
        return{
            filmInfo: null,
        }
    },
   created() {
    //当前匹配的路由
    console.log("created", this.$route.params.id);
    // axios 利用id发送请求到详情接口，获取详细数据，布局页面
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=5704495`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data.data.film);
      this.filmInfo = res.data.data.film;
    });
  }, 
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 5.3125rem;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>