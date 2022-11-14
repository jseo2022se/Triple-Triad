import Card from "react-bootstrap/Card"
import { Link, useLocation } from "react-router-dom";

export default function DisplayCard({ card }) {
    let location = useLocation()

    const loaded = () => {
        if (location.pathname === "/cardlist") {

            return (
                <div>
                    <Card border="dark" style={{ width: '30rem' }} bg="secondary" text="light">
                        <Card.Img variant="top" style={{ width: "150px"}} src={card.image} alt={card.name}/>
                        <Card.Body>
                            <Card.Title>
                                <h1> {card.id}. {card.name}</h1>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            )
        } else {
            console.log(card)
            return (
                
                <div>
                    <Card border="dark" style={{ width: '30rem' }} bg="secondary" text="light">
                        <Card.Link as={Link} to={`/mydecks/${card.cardinfo.id}`}>
                            <Card.Img variant="top" style={{ width: "150px"}} src={card.cardinfo.image} alt={card.cardinfo.name}/>
                        </Card.Link>
                            <Card.Body>
                                <Card.Title>
                                    <h1> {card.cardinfo.id}. {card.cardinfo.name}</h1>
                                </Card.Title>
                            </Card.Body>
                    </Card>
                </div>
            )
        }
    }

    const loading = () => {
        return <div>Loading card display...</div>
    }

    return card ? loaded() : loading()
}