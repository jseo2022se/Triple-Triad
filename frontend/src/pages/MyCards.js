import { useEffect } from "react";
import cardService from '../services/cardService'
import DisplayCard from "../components/DisplayCard";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useNavigate } from "react-router-dom";

export default function MyCards({myCardList, setMyCardList, order, setOrder}) {

    const navigate = useNavigate()

    const getAllDecks = async () => {

        try {
            const response = await cardService.index()
            setMyCardList(response.data.cards)
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
        try {
            
            const response = await cardService.remove(card._id)
            alert('Removed card from deck!', response)
            // window.location.reload()
            const filterList = myCardList?.filter((item) => card._id !== item._id)
            setMyCardList(filterList)
            navigate('/mycards')
            
        } catch (error) {
            
            console.log("Error in removing card:" , error)
        }
    }

    const sortMyCards = (myCardList, order) => {

        let resultsArr = [...myCardList]

        let sortedList;

        if (order) {
            sortedList = resultsArr.sort((a,b) => a.cardinfo?.id - b.cardinfo?.id)
            setOrder(!order)
        } else {
            sortedList = resultsArr.sort((a,b) => b.cardinfo?.id - a.cardinfo?.id)
            setOrder(!order)
        }

        setMyCardList(sortedList)
        navigate("/mycards")
    }

    useEffect(() => {
        getAllDecks()
    }, [])

    return (
        <div>
            <h1>My Cards</h1>

            <br /><br />

            <button onClick={() => clearDeck()}>Clear List</button>

            {' '}

            <button onClick={() => sortMyCards(myCardList, order)}>Sort</button>

            <br /><br />

            <ol>
                <Row xs={1} md={2} className="g-4">
                    {myCardList?.map(d => {
                        return (
                            <Col key={d._id}>
                                <DisplayCard card={d}/>
                                <br />
                                <button onClick={() => removeCard(d)}>Remove from list</button>
                            
                            </Col>
                        )}
                    )}

                </Row>
            </ol>

        </div>
    )
}