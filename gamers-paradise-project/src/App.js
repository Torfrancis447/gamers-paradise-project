import './App.css';
import GameList from './components/GameList';
import Header from './Header';
// import Search from './Search'
import React, { useEffect, useState } from "react"

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import MyGamesList from "./components/MyGamesList"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Redirect} from "react-router-dom"



function App() {
  const [games,setGames] =useState([])
  // const[searched, setSearched]=useState('')
  // const[myGames, setMyGames]= useState([])
const[redirectNow, setRedirectNow]= useState(false)
  // const filteredGames= games.filter((plantArray) =>{
  //   return plantArray.name?.toLowerCase().includes(searched.toLowerCase())})

  useEffect(()=>{
    fetch(`https://api.rawg.io/api/games?key=67202bd4d44e4c7da8fdbad44df5b8da&search`)
    .then(res => res.json())
    .then(data => {
      setGames(data.results)
      setTimeout(() => setRedirectNow(true), 5000)})
  }  
,[])

// useEffect(()=>{
//   fetch('http://localhost:3000/games')
//     .then(r => r.json())
//     .then(myGames => setMyGames(myGames))
//     console.log(myGames)
// }, [])

// 
  
  return redirectNow ? (
    <>
    <div className="wrapper">
    <BrowserRouter>
      <h1>Loading</h1>
      <h1>Gamer's Paradise</h1>
      <Link className="button wrapper" to="/home"><Button>Home</Button></Link> 
      <Link className="button wrapper" to="/games"><Button>Games</Button></Link>
      <Link className="button wrapper" to="/myGames"><Button>My Games</Button></Link>
      <br></br>
        <Switch>
          <Route path="/home">
        <Header />
          </Route>
          <Route path="/myGames">
          <MyGamesList />
          </Route>
          <Route path="/games">
                   
          <GameList  g={games}/>          
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
    
    <div >
      
      
      
    </div>
    </>
  ) : (
    <BrowserRouter>
    <Switch>
     
      <Header />
     <Redirect to="/games" /> 
    </Switch>
    </BrowserRouter>
  )
}

export default App;
