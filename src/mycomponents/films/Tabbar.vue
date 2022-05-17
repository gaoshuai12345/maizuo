<template>
    <footer>
  <ul>
      <!-- 声明式导航
      <li>
        <a href="/films">电影</a>
      </li>
      <li>
        <a href="/cinemas">影院</a>
      </li>
      <li>
        <a href="/center">我的</a>
      </li> -->
        <router-link to='/films' active-class="kerwinactive" tag='li'>电影</router-link>

      <li>
        <router-link to='/cinemas' active-class="kerwinactive" tag='li'>影院</router-link>
      </li>
      <li>
        <router-link to='/center' active-class="kerwinactive" tag='li'>我的</router-link>
      </li>
    </ul>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    footer{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        height: 2.7222rem;
        background:white;
        ul{
            display:flex;
            li{
                flex:1;
                line-height: 2.722222rem;
                text-align:center;

            }
        }
    }
    .kerwinactive{
        color:red;
    }
</style>