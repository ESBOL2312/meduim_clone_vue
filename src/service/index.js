export const getItem = key=>{
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log('get error', error)
        return null
    }
}

export const setItem = (key,value)=>{
    try {
        JSON.parse(localStorage.setItem(key,JSON.stringify(value)))
    } catch (error) {
        console.log('set error', error)
    }
}
export const dateFormat=(val)=>{
    if (!val) return '';
    return new Date(val).toLocaleDateString();
}