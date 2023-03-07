import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home/:params1?',
        component:Home,
        meta:{footerShow:true},
        // props:true,
        props:({params,query})=>{
            return{
                ...params,
                ...query
            }
        }
    },{
        path:'/search',
        component:Search,
        meta:{footerShow:true}
    },{
        path:'/login',
        component:Login,
    },{
        path:'/register',
        component:Register,
    }
]
const router = new VueRouter({
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.path === from.path){
        next(false)
    }else{
        next()
    }
})
export default router