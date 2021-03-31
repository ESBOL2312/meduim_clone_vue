import authApi from '@/api/auth'
import {setItem} from '@/service/index'
const state = {
    isSubmit:false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}
const mutations = {
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
    }
}
export default{
    state,
    mutations,
    actions
}