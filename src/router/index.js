import Vue from 'vue'
import VueRouter from 'vue-router'
// import inews from '../components/news.vue'
import App from "../App.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: App,

    },
    {
        path: '/onesnew',
        name: 'inews',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:
            () =>
            import ( /* webpackChunkName: "inews" */ '../components/news.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router