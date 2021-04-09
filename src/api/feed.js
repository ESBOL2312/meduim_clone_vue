import axios from '@/api/axios.js'

const getFeed = ({limit,offset}) => {
    return axios.get(`/articles?limit=${limit}&offset=${offset}`)
}

const favoriteFeed = (slug,type) => {

    return type ? axios.delete(`/articles/${slug}/favorite`):axios.post(`/articles/${slug}/favorite`)
}

const getSingleFeed = (slug) => {
    return axios.get(`/articles/${slug}`)
}
export default {
    getFeed,
    getSingleFeed,
    favoriteFeed
}