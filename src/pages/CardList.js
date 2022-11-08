import DisplayCard from "../components/DisplayCard"

export default function CardList({uniqueCard, addToDeck}) {

    const loaded = () => {
        if (uniqueCard.length === 0) {
            return (
                <div>
                    <h1>No cards found related to the search query...</h1>
                </div>
            )
        } else {
            return (
                <div>
                    {uniqueCard.map((card, index) => {
                        return (
                            <div key={index}>
                                <DisplayCard card={card}/>
                                <br />
                                <button onClick={() => addToDeck(card)}>Add to Deck</button>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    const loading = () => {
        return <div>Loading...</div>
    }

    return uniqueCard ? loaded() : loading()
}