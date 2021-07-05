import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "*",
            name: "login",
            component: () => import("@/components/login.vue")
        },
        {
            path: "/oa",
            name: "oa",
            component: () => import("@/components/oa.vue")
        },
    ]
  })
  