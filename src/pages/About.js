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
                    This website allows users to search up collectible triple triad cards available in FFXIV.
                    This website is also a project that demonstrates a fullstack application, wherein it 
                    features both front-end and back-end functionalities and serves more as a personal
                    learning project, that will receive updates in the future.
                    <br /><br /><br /><br />
                    Credits regarding API: Raelys Skyborn of Behemoth | Powered by {" "} <a href="https://github.com/ufx/SaintCoinach" target="_blank" rel="noopener noreferrer">Saint Coinach</a> | 
                    <br /><br /><br /><br />
                    FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}