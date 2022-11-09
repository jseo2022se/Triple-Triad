import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import MyDecks from './pages/MyDecks';

import userService from './services/userService'
import deckService from './services/deckService'
import CardList from './pages/CardList';


let initialRender = true

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const [uniqueCard, setUniqueCard] = useState([])
  const [card, setCard] = useState({})
  const [deck, setDeck] = useState([])

  const currentUserInfo = async () => {
    try {
      const info = await userService.info()

      const { username, email } = info.data

      setUser({username, email})

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

    let newCard = {
      user: user.username,
      card
    }

    try {
      const response = await deckService.add(newCard)
      console.log('inside add to deck handle function', response)
      // setDeck([...deck, card])
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

      setUniqueCard(data.results)
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
          <Route path='/mydecks' element={<MyDecks username={user.username}/>}/>
          <Route path='/cardlist' element={<CardList uniqueCard={uniqueCard} addToDeck={addToDeck}/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      )
    } else {
      routes = (
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/register' element={<Register setUser={setUser}/>}/>
          <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
      )
    }
  }

  return (
    <div className="App">
      <Navbar user={user.username} setUser={setUser}/>
      {routes}
    </div>
  );
}

export default App;
