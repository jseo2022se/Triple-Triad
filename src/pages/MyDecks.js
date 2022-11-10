import { useEffect } from "react";
import { Link } from "react-router-dom";
import cardService from '../services/cardService'

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
        // alert('running use effect')
        getAllDecks()
    }, [])

    // useEffect(() => {
    //     // alert('running use effect')
    //     getAllDecks()
    // }, [decks])



    return (
        <div>
            <h1>My Decks</h1>

            <br /><br />

            <button onClick={() => clearDeck()}>Clear Deck</button>

            <br /><br />

            <ol>
                {decks?.map(d =>
                    <li key={d._id}>
                        {/* {console.log('d stores: ',d)} */}
                        <h1>{d.cardinfo.id}. {d.cardinfo.name}</h1>
                        <br />
                        <Link to={`/mydecks/${d.cardinfo.id}`}>
                            <img src={d.cardinfo.image} alt={d.cardinfo.name}/>
                        </Link>
                        <br />
                        <button onClick={() => removeCard(d)}>Remove from deck</button>
                    </li>
                )}
            </ol>

        </div>
    )
}