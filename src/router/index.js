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
            import ( /* webpackChunkName: "inews" */ '../views/news.vue'),


    },
    {
        path: "/skincare",
        name: "skincare",
        component: () =>
            import ( /* webpackChunkName: "skincare" */ "../views/skincare.vue")
    },
    {
        path: "/health",
        name: "health",
        component: () =>
            import ( /* webpackChunkName: "health" */ "../views/health.vue")
    },
    {
        path: "/find",
        name: "find",
        component: () =>
            import ( /* webpackChunkName: "find" */ "../views/find.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ( /* webpackChunkName: "About" */ "../views/About.vue")
    },
    {
        path: "/beauty",
        name: "beauty",
        component: () =>
            import ( /* webpackChunkName: "beauty" */ "../views/beauty.vue")
    },
    {
        path: "/newapp",
        name: "newapp",
        component: () =>
            import ( /* webpackChunkName: "newapp" */ "../views/newapp.vue")
    },
    {
        path: "/ommodityinfo/:id",
        name: "commodityinfo",
        component: () =>
            import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue"),
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
        name: "airmask",
        component: () =>
            import ( /* webpackChunkName: "airmask" */ "../views/Airmask.vue")
    },
    {
        path: "/collagen",
        name: "collagen",
        component: () =>
            import ( /* webpackChunkName: "collagen" */ "../views/collagen.vue")
    },
    {
        path: "/gold",
        name: "gold",
        component: () =>
            import ( /* webpackChunkName: "gold" */ "../views/Gold.vue")
    },
    {
        path: "/eyes",
        name: "eyes12gf",
        component: () =>
            import ( /* webpackChunkName: "Eyes12gf" */ "../views/Eyes12fg.vue")
    },
    {
        path: "/try",
        name: "try",
        component: () =>
            import ( /* webpackChunkName: "try" */ "../views/try.vue")
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