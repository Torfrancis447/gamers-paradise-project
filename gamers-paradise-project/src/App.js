import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import GameList from './components/GameList';
import Header from './components/Header';
import Search from './components/Search'
import React, { useEffect, useState } from "react"
import NavBar from './components/NavBar';
import Preferences from './components/Preferences'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import Slide from './components/Slide';
import Spinner from 'react-bootstrap/Spinner'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [games,setGames] =useState([])
  const[searched, setSearched]=useState('')
  const[isLoaded, setIsLoaded]=useState(false)
  
 
  useEffect(()=>{
    setIsLoaded(false);
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      setGames(data.results)
      setIsLoaded(true)
    })
  }
,[])

const filteredGames= games.filter((game) =>{
    return game.name.toLowerCase().includes(searched.toLowerCase())})

if (filteredGames.length <= 0)
return <h1> no game found </h1>
  
return (
  <>
  <NavBar />
  <Header />
    <div className="wrapper">      
      <BrowserRouter>
       
        <Switch>
          <Route path="/search"></Route>
          <Route path="/games">
            <Search setSearched={setGames} />            
            {isLoaded ? <GameList games={filteredGames} key={filteredGames.id} /> : <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  </>
);
}

export default App;