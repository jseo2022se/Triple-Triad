import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"


export default function Form({searchCardName}) {

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
            <form style={{ marginLeft: "20px" }} onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                <br />
                <input type="text" value={cardName} onChange={handleChange}/>
                <Button variant="outline-secondary" size="sm">
                    Search
                </Button>
            </form>
        </div>
    )
}