import { useState } from "react"
import { useNavigate } from "react-router-dom"
import userService from "../services/userService"
import cardService from "../services/cardService"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useDispatch } from 'react-redux';
import { setInfo } from '../redux/slices/user';

export default function EditProfile( ) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    let [form, setForm] = useState({
        email: '',
        username: '',
        password: ''
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

            dispatch(setInfo(info.data))

            navigate('/profile')

        } catch (error) {

            console.log(error)
        }
    }

    return (
        <div>
            <h1>Edit Profile Information</h1>
            <br/><br/>
            <Form style={{width: "15rem"}} className="center">
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter new email"/>
                </Form.Group>
                <br />
                <Form.Group controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} value={form.username} placeholder="Enter new username"/>
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} value={form.password} placeholder="Enter new password"/>
                </Form.Group>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
            <br/>
            <button className="center" style={{width: "13rem"}} onClick={() => navigate('/profile')}>Return to Profile Page</button>
        </div>
    )
}