import axios from "axios";

const getToken = () => {
    let token = localStorage.getItem('token')
    // console.log(token)
    return token ? token : 'no token'
}

const axiosCards = () => axios.create({
    baseURL: 'http://localhost:8000/cards',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosCards().get('/index')
}

const add = (newCard) => {
    console.log('checking new card: ', newCard)
    return axiosCards().post('/add', newCard)
}

const remove = (cardId) => {
    console.log('removing card from deck: ', cardId)
    return axiosCards().delete(`/remove/${cardId}`)
    
}

const clear = () => {
    return axiosCards().delete('/clear')
}

const updateinfo = (newinfo) => {
    return axiosCards().put('/updateinfo', newinfo)
}

const services = {
    index,
    add, 
    clear,
    remove,
    updateinfo
}

export default services