<template>
  <div v-if="filmInfo">
    <!-- <img :src="filmInfo.poster"> -->
    <detail-header v-scroll="50">
      {{filmInfo.name}}
    </detail-header>
    <div
      :style="{ backgroundImage: 'url(' + filmInfo.poster + ')' }"
      class="poster"
    ></div>
    <div class="content">
      <div>{{ filmInfo.name }}</div>
      <div>
        <div class="detail-text">{{ filmInfo.category }}</div>
        <div class="detail-text">
          {{ filmInfo.premiereAt | dateFilter }}上映
        </div>
        <div class="detail-text">
          {{ filmInfo.nation }}|{{ filmInfo.runtime }}分钟
        </div>
        <div
          class="detail-text"
          style="line-height: 15px"
          :class="isHidden ? 'hidden' : ''"
        >
          {{ filmInfo.synopsis }}
        </div>
        <div class="svg-center">
          <i
            @click="isHidden = !isHidden"
            :class="isHidden ? 'bottom-img' : 'top-img'"
          ></i>
        </div>
      </div>
      <div>
        <div>
            <div>演职人员</div>
            <!-- <actor-swiper></actor-swiper> -->
        </div>
  </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import http from "@/util/http"
import obj from "@/util/mixinObj"
import moment from "moment"
import Vue from "vue"
// import ActorSwiper from '@/mycomponents/detail/ActorSwiper';
import DetailHeader from '@/mycomponents/detail/DetailHeader.vue'
// console.log(moment().format());
moment.locale('zh-cn')//设置成中文
Vue.filter("dateFilter", (date) => {
  return moment(date * 1000).format("YYYY-MM-DD");
});
Vue.directive('scroll',{
  inserted(el,binding){
    console.log(binding.value)
    el.style.display = 'none'
    window.onscroll = ()=>{
  if((document.documentElement.scrollTop||document.body.scrollTop)>binding.value
  ){
      el.style.display='block'
  }else{
    el.style.display = 'none'
  }
    }
  },
  // 销毁执行的
  unbind(){
    window.onscroll=null;
  }
})
export default {
  mixins:[obj],
  data() {
    return {
      filmInfo: null,
      isHidden: true,
    };
  },
     components:{
      //  ActorSwiper,
       DetailHeader
     },
  mounted() {
    //当前匹配的路由
    // console.log("created", this.$route.params.id);
    // axios 利用id发送请求到详情接口，获取详细数据，布局页面
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=5704495`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data.data.film);
      this.filmInfo = res.data.data.film;
      // 隐藏
      // Toast.clear()
    });
  },
  // mounted(){
  //   window.onscroll=()=>{
  //     console.log('scroll')
  //     if(document.documentElement.scrollTop > 50){
  //       console.log("显示")
  //     }else{
  //       console.log("隐藏")
  //     }
  //   }
  // },
  // destroyed(){
  //   window.onscroll = null
  // }
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 14rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0.833333rem;
}
.detail-text {
  color: #797d82;
  font-size: 13px;
  margin-top: 0.222222rem;
}
.hidden {
  overflow: hidden;
  height: 30px;
}
.svg-center {
  text-align: center;
}
.bottom-img {
  display: inline-block;
  height: 15px;
  width: 15px;
  background-image: url("@/images/bottom.png");
}
.top-img {
  display: inline-block;
  height: 15px;
  width: 15px;
  background-image: url("@/images/top.png");
}
</style>