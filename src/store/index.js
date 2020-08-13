import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShow: 'true',
        findId: undefined,
        isClick: true,
        en: false,
        isFirst: true,
    },
    mutations: {},
    actions: {},
    modules: {}
})