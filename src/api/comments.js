import axios from '@/api/axios'

const getComments = slug => {
    return axios.get(`/articles/${slug}/comments`)
}
export default{
    getComments
}