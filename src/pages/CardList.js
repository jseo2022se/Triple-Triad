import DisplayCard from "../components/DisplayCard"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

export default function CardList({uniqueCard, addToDeck}) {

    const loaded = () => {
        if (uniqueCard.length === 0) {
            return (
                <div>
                    <Card border="dark" style={{backgroundColor: "rgb(165, 181, 145)"}}>
                        <Card.Body>
                            <Card.Title>
                                <h1>No cards found related to the search query...</h1>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Image src="https://imgur.com/RoJHwjx.png" className="center"/>
                </div>
            )
        } else {
            return (
                <Row xs={1} md={2} className="g-4">
                        {uniqueCard.map((card, index) => {
                            return (
                                <Col key={index}>
                                    <DisplayCard card={card}/>
                                    <Button size="sm" variant="light" onClick={() => addToDeck(card)}>Add to Deck</Button>
                                </Col>
                            )
                        })}
                </Row>
            )
        }
    }

    const loading = () => {
        return <div>Loading...</div>
    }

    return uniqueCard ? loaded() : loading()
}