import axios from "axios";
import baseURL from "./baseUrl"

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : 'no token'
}

const axiosUser = () => axios.create({
    baseURL: baseURL + '/users',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const info = () => {
    return axiosUser().get('/info')
}

const edit = (newInfo) => {
    return axiosUser().put('/edit', newInfo)
}

const services = {
    info,
    edit
}

export default services