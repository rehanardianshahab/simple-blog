import axios from 'axios'

const api = 'https://dummyjson.com/posts'
const apiComment = 'https://dummyjson.com/comments'

export default {
    getData() {
        const data = axios.get(`${api}?limit=5`)
        return data
    },
    getDetailData(id) {
        const data = axios.get(`${api}/${id}`)
        return data
    },
    getCommentData(id) {
        const data = axios.get(`${apiComment}/post/${id}?limit=10`)
        return data
    },
}