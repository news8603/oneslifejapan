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
import VueScrollmagic from 'vue-scrollmagic'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'
import ElementUI from 'element-ui'
// import locale from '/node_modules/element-ui/lib/locale/lang/en'


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
Vue.use(VueScrollmagic)
Vue.use(VueRx, Rx)

// Vue.prototype.$axios = axios;

// Rx.Observable.of(1, 2, 3)
const i18n = new VueI18n({
    locale: 'jp',
    // 定义默认语言为日语

    messages: {
        'zh': require('@/assets/languages/zh.json'),
        'en': require('@/assets/languages/en.json'),
        'jp': require('@/assets/languages/jp.json')
    }

});



new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')