<template>
  <div>
    <film-swiper></film-swiper>
    <film-header class="sticky"></film-header>
    <router-view></router-view>
  </div>
</template>
<script>
   import FilmSwiper from '@/mycomponents/films/FilmSwiper.vue'
   import FilmHeader from '@/mycomponents/films/FilmHeader.vue'
   export default {
     components:{
       FilmSwiper,
       FilmHeader
     }
   }
</script>
<style lang="scss" scoped>
.filmswiperitem{
  img{
    width:100%;
  }
}
.sticky{
  position:sticky;
  top:0px;
  background: white;
  z-index: 100;
}
</style>
