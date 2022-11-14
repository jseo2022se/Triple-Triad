import { useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

export default function Profile ({username, email}) {

    const navigate = useNavigate()
    return (
        <div>

            <Card style={{width: "25rem"}}>
                <Card.Title><h1>Profile Page</h1></Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Username: {username}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                </ListGroup>
                <br />
            </Card>
            <button onClick={() => navigate('/profile/edit')}>Edit Info</button> 
        </div>
    )
}