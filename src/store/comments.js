import commentsApi from '@/api/comments'
const state = {
    commentsLoading: false,
    comments: null,
    commentsErrors:null
}
const getters = {
    commentsLoadState: state => state.commentsLoading,
    comments:state=> state.comments
}
const mutations = {
    getCommentsStart(state){
        state.commentsLoading = true
        state.commentsErrors = null
    },
    getCommentsSuccess(state, payload){
        state.commentsLoading = false
        state.comments = payload
    },
    getCommentsFailed(state, payload){
        state.commentsLoading = false
        state.commentsErrors = payload
    }
}
const actions = {
    getComments(context, slug){
        return new Promise(resolve=>{
            context.commit('getCommentsStart')
            commentsApi.getComments(slug)
            .then(response=>{
                context.commit('getCommentsSuccess',response.data)
                resolve(response.dat)
            })
            .catch(result=>{
                context.commit('getCommentsFailed',result)
            })
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}