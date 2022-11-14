import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "react-bootstrap/Card"
import { ListGroup } from "react-bootstrap";

export default function CardDetails({decks}) {

    let [cardDetails, setCardDetails] = useState({})

    let params = useParams();

    let navigate = useNavigate()

    useEffect(() => {
        const card = decks.filter((d) => params.id == d.cardinfo.id)

        return card.length ? setCardDetails(card[0]) : navigate('/')
    }, [])

    return (
        <div>
            <Card style={{ width: '50rem' }} bg="secondary" text="light">
                <Card.Img variant="top" style={{ width: '18rem' }}src={cardDetails.cardinfo?.image} alt={cardDetails.cardinfo?.name}/>
                <Card.Body>
                    <Card.Title>{cardDetails.cardinfo?.id}. {cardDetails.cardinfo?.name}</Card.Title>
                    <blockquote className="blockquote mb-0">
                        <Card.Text>
                            {cardDetails.cardinfo?.description}{' '}
                        </Card.Text>
                        <footer className="blockquote-footer" style={{color: 'white'}}><cite title="Source Title" style={{color: 'white'}}>In-Game Description/Quote</cite></footer>
                    </blockquote>
                    <br />
                    <ListGroup className="list-group-flush" as="ol" numbered>
                        <ListGroup.Item variant="secondary">Price: {cardDetails.cardinfo?.sell_price} MGP</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Stars: {cardDetails.cardinfo?.stars}</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Type: {cardDetails.cardinfo?.type?.name}</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Owned: {cardDetails.cardinfo?.owned}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <button onClick={() => navigate('/mydecks')}>Return to list</button>
        </div>
    )
}