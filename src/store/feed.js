import feedApi from '@/api/feed'

const state = {
    getFeedLoading:false,
    feed:null,
    feedList:null,
    feedErrors:null 
}
const getters = {
    getFeedList: state => state.feedList,
    getSF: state => state.feed,
    getFL: state=> state.getFeedLoading
}

const mutations = {
    getFeedStart(state){
        state.feed = null
        state.feedList = null
        state.getFeedLoading = true
        state.feedErrors = null
    },
    getFeedSuccess(state, payload){
        state.getFeedLoading = false
        state.feedList = payload
    },
    getSingleFeedSuccess(state, payload){
        state.getFeedLoading = false
        state.feed = payload
    },
    getFeedFailed(state, payload){
        state.getFeedLoading = false
        state.feedErrors = payload
    }
}

const actions = {
    getFeed(context,url){
        return new Promise(resolve=>{
            context.commit('getFeedStart')
            feedApi.getFeed(url)
            .then(response=>{
                context.commit('getFeedSuccess',response.data)
                resolve(response.data)
            })
            .catch(result=>{
                context.commit('getFeedFailed',result)
            })
        })
    },
    getSingleFeed(context, slug){
        return new Promise(resolve=>{
            context.commit('getFeedStart')
            feedApi.getSingleFeed(slug)
            .then(response=>{
                context.commit('getSingleFeedSuccess',response.data)
                resolve(response.data)
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