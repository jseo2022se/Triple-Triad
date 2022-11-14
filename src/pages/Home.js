import SearchForm from "../components/SearchForm";
import Carousel from 'react-bootstrap/Carousel'

export default function Home({searchCardName}) {
    const first = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGhnGRJi8uiEPPu-Esva3xckHvvih1ockzzUWOZ_HpGAoGWlGyHqh4gQxZpg1ePtQgo4&usqp=CAU"
    const second = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6MjI3RZtYK313NugmsN10clRqmFhcTM0CKaeJ1c0metEsK_VZrJKCSOIo9EO2AdC0vw&usqp=CAU" 
    const third = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmgvFcrgqMn9Xco1s0AOm01P1SsE2IX3EN-Vvh16s5DmWmtGIl8U0lcSsrWTWOb3Q2WM&usqp=CAU"
    const fourth = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWUKZHomAM6YU8yCvs3sBS9AbnXb_NJrkSW8ixoMskwPQ5zjSO9tgsa-LV2X26g3yEHs&usqp=CAU"
    const fifth = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kDxNCzpP4HYSU0mlS7a5Qs6OPti8EovYzkbtau6xljyVCY27AEWJLXrtR1MiEHuFs4Q&usqp=CAU"

    return(
        <div>
            <h1>Home Page</h1>
            <br />
            <Carousel style={{width: '30rem'}} variant="dark">
                <Carousel.Item style={{width: '20rem'}}>
                    <img className="d-block w-100" src={first} alt="first slide"/>
                </Carousel.Item>
                <Carousel.Item style={{width: '20rem'}}>
                    <img className="d-block w-100" src={second} alt="second slide"/>
                </Carousel.Item>
                <Carousel.Item style={{width: '20rem'}}>
                    <img className="d-block w-100" src={third} alt="third slide"/>
                </Carousel.Item>
                <Carousel.Item style={{width: '20rem'}}>
                    <img className="d-block w-100" src={fourth} alt="fourth slide"/>
                </Carousel.Item>
                <Carousel.Item style={{width: '20rem'}}>
                    <img className="d-block w-100" src={fifth} alt="fifth slide"/>
                </Carousel.Item>
            </Carousel>
            <br /><br />
            <SearchForm searchCardName={searchCardName}/>
        </div>
    )
}