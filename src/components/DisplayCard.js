export default function DisplayCard({ card }) {

    const loaded = () => {
        return (
            <div>
                <h1>Name: {card.name}</h1>
                <br />
                <h2>ID: {card.id}</h2>
                <br />
                <img src={card.image} alt={card.name}/>
                <br /><br />
            </div>
        )
    }

    const loading = () => {
        return <div>Loading card display...</div>
    }

    return card ? loaded() : loading()
}