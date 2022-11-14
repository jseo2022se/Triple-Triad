import { useState } from "react"
import { useNavigate } from "react-router-dom"
import userService from "../services/userService"
import cardService from "../services/cardService"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function EditProfile({ setUser}) {

    const navigate = useNavigate()

    let [form, setForm] = useState({
        username: '',
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
            <br/><br/>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} value={form.username} placeholder="Enter new username"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter new email"/>
                </Form.Group>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
            <br/>
            <button onClick={() => navigate('/profile')}>Return to Profile Page</button>
        </div>
    )
}