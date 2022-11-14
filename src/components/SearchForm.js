import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"


export default function SearchForm({searchCardName}) {

    const [cardName, setCardName] = useState("")

    let navigate = useNavigate()

    const handleChange = (e) => {
        setCardName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        searchCardName(cardName)
        navigate("/cardlist")
    }

    return (
        <div>
            <br/>
            <Form>
                <Form.Group controlId="search">
                    <Form.Label>Search for a card</Form.Label>
                    <Form.Control type="text" placeholder="Enter card name" value={cardName} onChange={handleChange} />
                </Form.Group>
                <Button variant="outline-secondary" size="sm" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}