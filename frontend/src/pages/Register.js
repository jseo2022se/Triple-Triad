import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setInfo } from "../redux/slices/user"
import Form from "react-bootstrap/Form"
import authService from '../services/authService'
import userService from '../services/userService'


export default function Register () {


    const navigate = useNavigate()

    const dispatch = useDispatch()

    let [form, setForm] = useState({
        username: '',
        password: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await authService.register(form)

            localStorage.setItem("token", response.data.token)
            
            const info = await userService.info()

            dispatch(setInfo(info.data))

            navigate('/profile')

        } catch (error) {
            console.log(error.response.data.error)
            alert(error.response.data.error)
        }
    }

    return(
        <div>
            <h1>Register</h1>
            <br />
            <Form style={{width: "15rem"}} className="center">
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} value={form.email} placeholder="Enter email address"/>
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} value={form.username} placeholder="Enter username"/>
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} value={form.password} placeholder="Enter password"/>
                </Form.Group>
                <br /><br />
                <button onClick={handleSubmit} >Register</button>
            </Form>
        </div>
    )
}