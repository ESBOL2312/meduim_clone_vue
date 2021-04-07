import authApi from '@/api/auth'
import {setItem} from '@/service/index'

const state =   {
    getCULoading:false,
    isSubmit:false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null,

    loginLoading:false,
    loginErrors: null,
    isLogin: false,

    getCUErrors: null,
}
const getters = {
    isLogin: state => state.isLoggedIn,
    currentUser: state => state.currentUser
}
const mutations = {
    //register
    registerStart(state){
        state.isSubmit = true
        state.validationErrors = null
    },
    registerSuccess(state, payload){
        state.isSubmit = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    registerFailed(state, payload){
        state.isSubmit = false
        state.validationErrors = payload
    },
    //login
    loginStart(state){
        state.loginLoading = true
        state.validationErrors = null
    },
    loginSuccess(state, payload){
        state.loginLoading = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    loginFailed(state, payload){
        state.loginLoading = false
        state.loginErrors = payload
    },
    //get current user
    getCUStart(state){
        state.getCULoading = true
        state.getCUErrors = null
    },
    getCUSuccess(state, payload){
        state.getCULoading = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    getCUFailed(state, payload){
        state.getCULoading = false
        state.getCUErrors = payload
        state.isLoggedIn = true
        state.currentUser = null 
    }
}
const actions = {
    registerUser(context, credentials){
        return new Promise(resolve=>{
            context.commit('registerStart')
            authApi
            .register(credentials)
            .then(response=>{
                context.commit('registerSuccess', response.data.user)
                setItem('acTn',response.data.user.token)
                resolve(response.data.user) 
            })
            .catch(result=>{
                context.commit('registerFailed', result.response.data.errors)
            })
        })
    },
    loginUser(context,data){
        return new Promise(resolve=>{
            context.commit('loginStart')
            authApi.login(data).then(response=>{
                context.commit('loginSuccess', response)
                setItem('acTn',response.data.user.token)
                resolve(response.data.user)
            })
            .catch(result=>{
                context.commit('loginFailed', result.response.data.errors)
            })
        })
    },
    getCurrentUser(context){
        return new Promise(resolve=>{
            context.commit('getCUStart')
            authApi.getCurrentUser().then(response=>{
                context.commit('getCUSuccess', response)
                resolve(response.data.user)
            })
            .catch(result=>{
                context.commit('getCUFailed', result.response.data.errors)
            })
        })
    }

}
export default{
    state,
    mutations,
    actions,
    getters
}