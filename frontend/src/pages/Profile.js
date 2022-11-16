import { useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

export default function Profile ({username, email}) {

    const navigate = useNavigate()
    return (
        <div>
            <Card style={{width: "25rem", backgroundColor: "rgb(185, 161, 145)"}} className="center">
                <Card.Title><h1>Profile Page</h1></Card.Title>
                <br /><br />
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Username: {username}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                </ListGroup>
                <br />
            </Card>
            <br />
            <button onClick={() => navigate('/profile/edit')} className="center" style={{width: "13rem"}}>Edit Info</button> 
        </div>
    )
}