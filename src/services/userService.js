import axios from "axios";

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : 'no token'
}

const axiosUser = () => axios.create({
    baseURL: 'http://localhost:8000/users',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const info = () => {
    return axiosUser().get('/info')
}

const services = {
    info
}

export default services