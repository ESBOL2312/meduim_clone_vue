import axios from '@/api/axios.js'


const getFeed = ({limit,offset}) => {
    console.log(limit, offset)
    return axios.get(`/articles?limit=${limit}&offset=${offset}`)
}

const getSingleFeed = (slug) => {
    return axios.get(`/articles/${slug}`)
}
export default {
    getFeed,
    getSingleFeed
}