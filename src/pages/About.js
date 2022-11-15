import Card from "react-bootstrap/Card"

export default function About () {
    return (
        <Card style={{backgroundColor: "rgb(185, 181, 145)"}}>
            <Card.Body style={{width: '50rem'}}>
                <Card.Title><h1>About</h1></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><h2>Website Purpose</h2></Card.Subtitle>
                <Card.Img style={{width: '30rem'}} src="https://aywren.files.wordpress.com/2019/02/ffxiv_02262019_075658_109.png" alt="fatter cat"/>
                <footer><cite>Image credited to: <a href="https://aywren.com/2019/02/26/ffxiv-fatter-cat-mount/" target="_blank" rel="noopener noreferrer">Aywren</a></cite></footer>
                <br />
                <Card.Text>
                    This website allows users to search up collectible triple triad cards inside FFXIV.
                    This website is also a project that demonstrates a fullstack application, wherein it 
                    features both front-end and back-end functionalities and serves more as a personal
                    learning project, which will be worked on further more in the future.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}