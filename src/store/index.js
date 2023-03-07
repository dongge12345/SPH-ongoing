import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {isNavigationFailure,NavigationFailureType} from 'vue-router'
const state = {
    duplicatedRouteCallback:function(failure){
        if(isNavigationFailure(failure,NavigationFailureType.duplicated)){
            alert('请勿重复访问同一个路由')
        }
    }
}

const store = new Vuex.Store({
    state
})

export default store