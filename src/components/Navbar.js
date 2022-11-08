import { Link } from "react-router-dom";

export default function Navbar({user, setUser}) {

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
    }

    if (user) {
        return(
            <ul>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/mydecks">My Decks</Link>
                </li>
                <li>
                    <Link to="/cardlist">Card List</Link>
                </li>
                <li onClick={logout}>
                    <Link>Logout</Link>
                </li>
            </ul>
        )
    } else {
        return(
            <ul>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        )
    }
}