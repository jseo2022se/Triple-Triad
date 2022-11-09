import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import deckService from '../services/deckService'

export default function MyDecks({ username } ) {

    const [decks, setDecks] = useState([])

    const getAllDecks = async () => {

        try {
            const response = await deckService.index()
            console.log(response)
            setDecks(response.data.decks)
        } catch (error) {
            console.log(error)
        }
    }

    const clearDeck = async () => {
        try {
          const response = await deckService.clear()
          alert('Cleared deck!', response)
          window.location.reload()
        } catch (error) {
          console.log("Error in clearing deck: ", error)
        }
    }

    const removeCard = async (card) => {
        // console.log(card)
        try {
            console.log('checking card: ',card._id)
            const response = await deckService.remove(card._id)
            alert('Removed card from deck!', response)
            // window.location.reload()
        } catch (error) {
            console.log("Error in removing card:" , error)
        }
    }

    useEffect(() => {
        getAllDecks()
    }, [])


    return (
        <div>
            <h1>My Decks</h1>

            <br /><br />

            <button onClick={() => clearDeck()}>Clear Deck</button>

            <br /><br />

            <ol>
                {decks.map(d =>
                    <li key={d._id}>
                        <h1>{d.card.id}. {d.card.name}</h1>
                        <br />
                        <img src={d.card.image} alt={d.card.name}/>
                        <br />
                        <button onClick={() => removeCard(d)}>Remove from deck</button>
                    </li>
                )}
            </ol>

        </div>
    )
}