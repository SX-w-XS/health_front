import {createRouter,createWebHistory} from "vue-router";
const router=createRouter({
    routes:[
        {
            path:'/',
            component:()=>import('../view/homePage/index.vue')
        },
        {
            path:'/predict',
            component:()=>import('../view/predict/index.vue')
        },
        {
            path:'/prevent',
            component:()=>import('../view/prevent/index.vue')
        },
        {
            path:'/damage',
            component:()=>import('../view/damage/index.vue')
        },
        {
            path:'/weihai',
            component:()=>import('../view/weihai/index.vue')
        },
        {
            path:'/consultation',
            component:()=>import('../view/consultation/index.vue')
        },
        {
            path:'/doctor',
            component:()=>import('../view/consultation/components/DoctorInfo.vue')
        },
        {
            path:'/chat',
            component:()=>import('../view/consultation/components/zixun.vue')
        },
        {
            path:'/userInfo',
            component:()=>import('../view/userInfo/index.vue'),
            // children: [
            //     {}
            // ]
        }
    ],
    history:createWebHistory()
})
export default router;
