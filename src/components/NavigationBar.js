import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavigationBar({user, setUser}) {

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
    }

    if (user) {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/" onClick={() => {
                            window.location.pathname === "/" && window.location.reload()
                        }}>Triple-Triad</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/mydecks">My Decks</Nav.Link>
                            <Nav.Link as={Link} to="/cardlist">Card List</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    } else {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/" onClick={() => {
                            window.location.pathname === "/" && window.location.reload()
                        }}>Triple-Triad</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}