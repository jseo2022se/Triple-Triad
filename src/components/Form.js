import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                <br />
                <input type="text" value={cardName} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}