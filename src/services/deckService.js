import axios from "axios";

const getToken = () => {
    let token = localStorage.getItem('token')
    // console.log(token)
    return token ? token : 'no token'
}

const axiosDecks = () => axios.create({
    baseURL: 'http://localhost:8000/decks',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosDecks().get('/index')
}

const add = (newDeck) => {
    console.log('checking new deck: ',newDeck)
    return axiosDecks().post('/add', newDeck)
}

const remove = (cardId) => {
    console.log('removing card from deck: ', cardId)
    return axiosDecks().delete(`/remove/${cardId}`)
    
}

const clear = () => {
    return axiosDecks().delete('/clear')
}


const services = {
    index,
    add, 
    clear,
    remove
}

export default services