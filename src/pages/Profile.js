import { useNavigate } from "react-router-dom"

export default function Profile ({username, email}) {

    const navigate = useNavigate()
    return (
        <div>
            <h1>Profile Page</h1>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <br />
            <button onClick={() => navigate('/profile/edit')}>Edit Info</button>
        </div>
    )
}