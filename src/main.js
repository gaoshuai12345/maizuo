import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/rem'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(ElementUI)
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,//this.$router===router
  store,//this.$store===store
  render: h => h(App)
}).$mount('#app')
