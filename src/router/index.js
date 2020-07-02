import Vue from 'vue'
import VueRouter from 'vue-router'
import imainbottom from "../components/imainbottom.vue"
import store from "../store/index"

// import imain from "../views/imain.vue"
Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'home',
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
            import ( /* webpackChunkName: "inews" */ '../views/News.vue'),


    },
    {
        path: "/skincare",
        name: "skincare",
        component: () =>
            import ( /* webpackChunkName: "skincare" */ "../views/Skincare.vue")
    },
    {
        path: "/health",
        name: "health",
        component: () =>
            import ( /* webpackChunkName: "health" */ "../views/Health.vue")
    },
    {
        path: "/find",
        name: "find",
        component: () =>
            import ( /* webpackChunkName: "find" */ "../views/Find.vue")
    },
    {
        path: "/About",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "About" */ "../views/About.vue")
    },
    {
        path: "/beauty",
        name: "beauty",
        component: () =>
            import ( /* webpackChunkName: "beauty" */ "../views/Beauty.vue")
    },
    {
        path: "/newapp",
        name: "newapp",
        component: () =>
            import ( /* webpackChunkName: "newapp" */ "../views/Newapp.vue")
    },
    {
        path: "/ommodityinfo/:id",
        name: "commodityinfo",
        component: () =>
            import ( /* webpackChunkName: "commodityinfo" */ "../views/Commodityinfo.vue"),
    },
    {
        path: "/product-details0",
        name: "product-details0",
        component: () =>
            import ( /* webpackChunkName: "product-details0" */ "../views/product-details0.vue"),
    },
    {
        path: "/product-details1",
        name: "product-details1",
        component: () =>
            import ( /* webpackChunkName: "product-details1" */ "../views/product-details1.vue")
    },
    {
        path: "/product-details2",
        name: "product-details2",
        component: () =>
            import ( /* webpackChunkName: "product-details2" */ "../views/product-details2.vue")
    },
    {
        path: "/product-details3",
        name: "product-details3",
        component: () =>
            import ( /* webpackChunkName: "product-details3" */ "../views/product-details3.vue")
    },
    {
        path: "/airmask",
        name: "airmask",
        component: () =>
            import ( /* webpackChunkName: "airmask" */ "../views/Airmask.vue")
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path == "/") {
        store.state.isShow = true;
    } else {
        store.state.isShow = false;
    }
    next();
})


export default router