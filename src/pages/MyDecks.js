import { useEffect, useRef, useState } from "react";
import deckService from '../services/deckService'

export default function MyDecks({ user }) {

    const [decks, setDecks] = useState([])

    let decksRef = useRef()

    const getAllDecks = async () => {

        try {
            const response = await deckService.index()
            console.log(response)
            setDecks(response.data.decks)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllDecks()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        let newDeck = {
            user,
            notes: decksRef.current.value
        }

        try {

            const response = await deckService.add(newDeck)

            console.log('inside of deck response for handlesubmit:', response)

            setDecks([...decks, response.data.deck])
            decksRef.current.value = ''
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>My Decks</h1>

            <ol>
                {decks.map(d =>
                    <li key={d._id}>{d.notes}</li>
                )}
            </ol>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={decksRef} />
                <br /><br /> 
                <button>Add Deck</button>
            </form>
        </div>
    )
}