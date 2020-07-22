import Vue from 'vue'
import VueRouter from 'vue-router'
import imainbottom from "../components/imainbottom.vue"
import store from "../store/index"
// import commodityinfo from "../views/commodityinfo.vue"


// import imain from "../views/imain.vue"
Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'home',
        components: {
            default: imainbottom,
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },

    {
        path: '/onesnew',
        name: 'inews',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "inews" */ '../views/news.vue'),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")

        }


    },
    {
        path: "/skincare",
        name: "skincare",
        components: {
            default: () =>
                import ( /* webpackChunkName: "skincare" */ "../views/skincare.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")

        }
    },
    {
        path: "/health",
        name: "health",
        components: {
            default: () =>
                import ( /* webpackChunkName: "health" */ "../views/health.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/find",
        name: "find",
        components: {
            default: () =>
                import ( /* webpackChunkName: "find" */ "../views/find.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/about",
        name: "about",
        components: {
            default: () =>
                import ( /* webpackChunkName: "about" */ "../views/About.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/beauty",
        name: "beauty",
        components: {
            default: () =>
                import ( /* webpackChunkName: "beauty" */ "../views/beauty.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/newapp",
        name: "newapp",
        components: {
            default: () =>
                import ( /* webpackChunkName: "newapp" */ "../views/newapp.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/commodityinfo/:id",
        name: "commodityinfo",
        components: {
            default: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/product-details0",
        name: "product-details0",
        components: {
            default: () =>
                import ( /* webpackChunkName: "product-details0" */ "../views/product-details0.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/product-details1",
        name: "product-details1",
        components: {
            default: () =>
                import ( /* webpackChunkName: "product-details1" */ "../views/product-details1.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/product-details2",
        name: "product-details2",
        components: {
            default: () =>
                import ( /* webpackChunkName: "product-details2" */ "../views/product-details2.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/product-details3",
        name: "airmask",
        components: {
            default: () =>
                import ( /* webpackChunkName: "airmask" */ "../views/Airmask.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/collagen",
        name: "collagen",
        components: {
            default: () =>
                import ( /* webpackChunkName: "collagen" */ "../views/collagen.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/gold",
        name: "gold",
        components: {
            default: () =>
                import ( /* webpackChunkName: "gold" */ "../views/Gold.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/eyes",
        name: "eyes12gf",
        components: {
            default: () =>
                import ( /* webpackChunkName: "Eyes12gf" */ "../views/Eyes12fg.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/try",
        name: "try",
        components: {
            default: () =>
                import ( /* webpackChunkName: "try" */ "../views/try.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    },
    {
        path: "/brandproduct/:id",
        name: "brandproduct",
        components: {
            default: () =>
                import ( /* webpackChunkName: "brandproduct" */ "../views/Brandproduct.vue"),
            commodityinfo: () =>
                import ( /* webpackChunkName: "commodityinfo" */ "../views/commodityinfo.vue")
        }
    }
]


const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
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