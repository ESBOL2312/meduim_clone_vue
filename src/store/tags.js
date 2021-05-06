import tagApi from '@/api/tags'
const state = {
    tagsLoading: false,
    tags: null,
    tagsErrors:null
}
const getters = {
    tagLoadState: state => state.tagsLoading,
    tagsGet:state=> state.tags['tags']
}
const mutations = {
    getTagsStart(state){
        state.tagsLoading = true
        state.tagsErrors = null
    },
    getTagsSuccess(state, payload){
        state.tagsLoading = false
        state.tags = payload
    },
    getFeedFailed(state, payload){
        state.tagsLoading = false
        state.tagsErrors = payload
    }
}
const actions = {
    getTag(context){
        return new Promise(resolve=>{
            context.commit('getTagsStart')
            tagApi.getTags()
            .then(response=>{
                context.commit('getTagsSuccess',response.data)
                resolve(response.dat)
            })
            .catch(result=>{
                context.commit('getFeedFailed',result)
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