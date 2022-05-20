<template>
  <div>
    <tabbar></tabbar>
    <section>
      <!-- 路由器容器 -->
    <router-view></router-view>
    </section>
  </div>
</template>
<script>
import tabbar from '@/mycomponents/Tabbar'
export default {
  data(){
    return{
    }
  },
  components: {
    tabbar
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
#box{
  width: 20.833333rem;
  height: 10.715556rem;
  background-color:yellow;
}
body{
  font-size:16px;
}
html,body{
  height:100%;
}
ul{
  list-style:none;
}
section{
  padding-bottom:2.722222rem;
}
</style>
