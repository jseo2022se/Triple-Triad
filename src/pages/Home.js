import Form from "../components/Form";

export default function Home({searchCardName}) {
    return(
        <div>
            <h1>Home Page</h1>
            <Form searchCardName={searchCardName}/>
        </div>
    )
}