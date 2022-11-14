import { useEffect } from "react";
import cardService from '../services/cardService'
import DisplayCard from "../components/DisplayCard";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function MyDecks({decks, setDecks}) {

    const getAllDecks = async () => {

        try {
            const response = await cardService.index()
            // console.log(response)
            setDecks(response.data.cards)
        } catch (error) {
            console.log(error)
        }
    }

    const clearDeck = async () => {
        try {
          const response = await cardService.clear()
          alert('Cleared deck!', response)
          window.location.reload()
        } catch (error) {
          console.log("Error in clearing deck: ", error)
        }
    }

    const removeCard = async (card) => {
        // console.log(card)
        try {
            // console.log('checking card: ',card._id)
            const response = await cardService.remove(card._id)
            alert('Removed card from deck!', response)
            window.location.reload()
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
                <Row xs={1} md={2} className="g-4">
                    {decks?.map(d => {
                        return (
                            <Col key={d._id}>
                                <DisplayCard card={d}/>
                                <br />
                                <button onClick={() => removeCard(d)}>Remove from deck</button>
                            
                            </Col>
                        )}
                    )}

                </Row>
            </ol>

        </div>
    )
}