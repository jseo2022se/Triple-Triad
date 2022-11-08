import { useEffect, useState } from "react";
import deckService from '../services/deckService'

export default function MyDecks({ user, deck }) {

    const [decks, setDecks] = useState([])
    // const [card, setCard] = useState({
    //     user,
    //     cardname: '',
    //     cardimage: ''
    // })

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

    // const handleChange = (e) => {

    //     setCard({...card, [e.target.name]: e.target.value})
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault()

    //     try {

    //         const response = await deckService.add(card)

    //         console.log('inside of deck response for handlesubmit:', response)

    //         setDecks([...decks, response.data.deck])
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div>
            <h1>My Decks</h1>

            <ol>
                {decks.map(d =>
                    <li key={d._id}>
                        <h1>{d.card.id}. {d.card.name}</h1>
                        <br />
                        <img src={d.card.image} alt={d.card.name}/>
                    </li>
                )}
            </ol>

            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="cardname">Card Name:</label>
                <input type="text" name="cardname" onChange={handleChange} value={card.cardname}/>
                <br /><br /> 
                <label htmlFor="cardimage">Card Image:</label>
                <input type="text" name="cardimage" onChange={handleChange} value={card.cardimage} />
                <br /><br /> 
                <button>Add Deck</button>
            </form> */}
        </div>
    )
}