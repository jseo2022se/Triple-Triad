import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function CardDetails({decks}) {

    let [cardDetails, setCardDetails] = useState({})

    let params = useParams();

    let navigate = useNavigate()

    useEffect(() => {
        const card = decks.filter((d) => params.id == d.cardinfo.id)

        return card.length ? setCardDetails(card[0]) : navigate('/')
    }, [])

    // console.log(cardDetails)
    return (
        <div>
            <h1>Card Details</h1>
            <br /><br />
            <h1>Name: {cardDetails.cardinfo?.name} </h1>
            <h1>ID: {cardDetails.cardinfo?.id}</h1>
            <img src={cardDetails.cardinfo?.image}/>
            <h2>Description: {cardDetails.cardinfo?.description}</h2>
            <br /><br />
            <button onClick={() => navigate('/mydecks')}>Return to list</button>
        </div>
    )
}