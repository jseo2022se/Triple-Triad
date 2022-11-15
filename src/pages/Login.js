import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInfo } from "../redux/slices/user";
import authService from '../services/authService'
import userService from '../services/userService'
import Form from "react-bootstrap/Form"


export default function Login() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    let [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await authService.login(form)

            localStorage.setItem("token", response.data.token)

            const info = await userService.info()

            dispatch(setInfo(info.data))

            navigate('/profile')
        } catch(error) {
            console.log(error.response.data.error)
            alert(error.response.data.error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <br />
            <Form style={{width: "15rem"}} className="center">
                <Form.Group controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} value={form.username} placeholder="Enter username"/>
                </Form.Group>
                <br />
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} value={form.password} placeholder="Enter password"/>
                </Form.Group>
                <br /><br />
                <button onClick={handleSubmit}>Login</button>
            </Form>
        </div>
    )
}