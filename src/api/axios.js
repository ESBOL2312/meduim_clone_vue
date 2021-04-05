import axios from 'axios'

import {getItem} from '@/service/index'
axios.defaults.baseURL="https://conduit.productionready.io/api"

axios.interceptors.request.use(config => {
    const act = getItem('acTn')
    const aAct = act ?  `Token ${act}`:''
    config.headers.Authorization = aAct
    return config
})

export default axios