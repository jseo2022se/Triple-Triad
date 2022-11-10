import { useState } from "react"
import { useNavigate } from "react-router-dom"
import userService from "../services/userService"
import cardService from "../services/cardService"

export default function EditProfile({username, setUser}) {

    const navigate = useNavigate()

    let [form, setForm] = useState({
        username: '',
        // password: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await userService.edit(form)

            const response2 = await cardService.updateinfo({user: form.username})

            console.log(response)
            console.log('response 2  value: ',response2)

            const info = await userService.info()

            setUser(info.data)

            navigate('/profile')

        } catch (error) {

            console.log(error)
        }
    }

    return (
        <div>
            <h1>EditProfile</h1>
            <br /><br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={form.username} onChange={handleChange}/>
                <br /><br />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" value={form.email} onChange={handleChange}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}