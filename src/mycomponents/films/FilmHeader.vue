<template>
  <ul>
      <!--                               自定义    插槽     navigate函数   isActive函数true false-->
    <router-link to="/films/nowplaying" custom v-slot="{ navigate, isActive }">
      <li @click="navigate">
        <span :class="isActive ? 'kerwinactive' : ''">正在热映</span>
      </li>
    </router-link>
    <router-link to="/films/comingsoon" custom v-slot="{ navigate, isActive }">
      <li @click="navigate">
        <span :class="isActive ? 'kerwinactive' : ''">即将上映</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  height: 2.722222rem;
  line-height: 2.722222rem;
  li {
    flex: 1;
    text-align: center;
  }
}
.kerwinactive {
  color: red;
  border-bottom: 2px solid red;
}
</style>