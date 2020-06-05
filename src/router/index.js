import Vue from 'vue'
import VueRouter from 'vue-router'
import imainbottom from "../views/imainbottom.vue"
Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'Home',
        component: imainbottom,
    },
    {
        path: '/onesnew',
        name: 'inews',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:
            () =>
            import ( /* webpackChunkName: "inews" */ '../views/news.vue')
    },
    {
        path: "/skincare",
        name: "skincare",
        component: () =>
            import ( /* webpackChunkName: "skincare" */ "../views/skincare.vue")
    },
    {
        path: "/health",
        name: health,
        component: () =>
            import ( /* webpackChunkName: "health" */ "../views/health.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router