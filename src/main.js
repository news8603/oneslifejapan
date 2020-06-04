import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import 'element-ui/lib/theme-chalk/display.css'



import ElementUI from 'element-ui'
// import locale from '/node_modules/element-ui/lib/locale/lang/en'






Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

<<<<<<< HEAD
=======
// Vue.prototype.$axios = axios;
>>>>>>> db1ba40... 20200603

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')