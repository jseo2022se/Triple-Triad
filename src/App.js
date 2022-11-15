import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from './redux/slices/user';
import { setUniqueCard } from './redux/slices/uniqueCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import MyCards from './pages/MyCards';

import userService from './services/userService'
import deckService from './services/cardService'
import CardList from './pages/CardList';
import CardDetails from './pages/CardDetails';
import EditProfile from './pages/EditProfile';
import About from './pages/About';



let initialRender = true

function App() {

  const { user } = useSelector(state => state.user)

  const { uniqueCard } = useSelector(state => state.uniqueCard)
  
  const [isLoading, setIsLoading] = useState(true)

  const [decks, setDecks] = useState([])

  const [userID, setUserID] = useState('')

  const dispatch = useDispatch()
  

  const currentUserInfo = async () => {
    try {
      const info = await userService.info()
      console.log(info)
      const { userid, username, email } = info.data

      dispatch(setInfo({username, email}))
      setUserID(userid)

    } catch (error) {
      let message = error.response.data.error
      if (message.includes('expire')) {
        localStorage.removeItem('token')
      }
      console.log(message)
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    let token = localStorage.getItem('token')

    if (initialRender) {
      if (token) {
        currentUserInfo(token)
        initialRender = false
      } else {
        setIsLoading(false)
      } 
    }
  }, [])


  const addToDeck = async (card) => {
    try {

      console.log('Inside of add to deck in App')
      const info = await userService.info()
      const { userid } = info.data
      setUserID(userid)

      let newCard = {
        userid: userID,
        user: user.username,
        cardinfo: card
      }


      const response = await deckService.add(newCard)
      console.log('inside add to deck handle function', response)
      
      alert(`Added ${card.name} to deck.`)

    } catch (error) {
      console.log(error)
    }
  }


  const searchCardName = async (cardName) => {

    try {
      const response = await fetch(
        `https://triad.raelys.com/api/cards?name_en_cont=${cardName}`
      )
      const data = await response.json();

      dispatch(setUniqueCard(data.results))

    } catch (error) {
      console.log("Error fetching cards", error)
    }
  }

  let routes;
  let loggedIn = user.username

  if (!isLoading) {
    if (loggedIn) {
      routes = (
        <Routes>
          <Route path="/" element={<Home searchCardName={searchCardName}/>} />
          <Route path="/profile" element={<Profile username={user.username} email={user.email}/>}/>
          <Route path='/profile/edit' element={<EditProfile username={user.username}/>}/>
          <Route path='/mydecks' element={<MyCards decks={decks} setDecks={setDecks}/>}/>
          <Route path='/cardlist' element={<CardList uniqueCard={uniqueCard} addToDeck={addToDeck}/>}/>
          <Route path='/mydecks/:id' element={<CardDetails decks={decks} />}/>
          <Route path='/about' element={<About />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      )
    } else {
      routes = (
        <Routes>
          <Route path='/' element={<Home searchCardName={searchCardName}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
      )
    }
  }

  return (
    <div className="App bgColor">
      <NavigationBar user={user.username} />
      {routes}
    </div>
  );
}

export default App;
