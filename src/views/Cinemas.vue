<template>
  <div>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft">
        <template #left>
        {{$store.state.cityName}}<van-icon name="arrow-down" color="black"/>
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black" />
      </template>
    </van-nav-bar>
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
        <div class="left">
          <div class="cinema_name">{{ data.name }}</div>
          <div class="cinema_text">{{ data.address }}</div>
        </div>
        <div class="right">
          <div style="color: red">￥{{ data.lowPrice / 100 }}起</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import http from "@/util/http";
export default {
  data() {
    return {
      cinemaList: [],
    };
  },
  methods:{
    handleLeft(){
      // console.log("left")
      this.$router.push('/city')
    }
  },
  mounted() {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=6369556`,
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data.data.cinemas);
      this.cinemaList = res.data.data.cinemas;
    });
  },
};
</script>
<style lang="scss" scoped>
li {
  padding: 00.833333rem;
  display: flex;
  justify-content: space-between;
  .left {
    width: 12.25rem;
  }
  .right {
    font-size: 0.9375rem;
  }
  .cinema_name {
    color: #191a1b;
    font-size: 0.9375rem;
  }
  .cinema_text {
    color: #797d82;
    font-size: 0.75rem;
    margin-top: 0.3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>