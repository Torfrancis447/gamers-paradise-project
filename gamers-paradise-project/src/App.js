import './App.css';
import GameList from './components/GameList';
import Header from './Header';
// import Search from './Search'
import React, { useEffect, useState } from "react"

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import MyGamesList from "./components/MyGamesList"


function App() {
  // const [games,setGames] =useState([])
  // const[searched, setSearched]=useState('')
  // const[myGames, setMyGames]= useState([])

  // const filteredGames= games.filter((plantArray) =>{
  //   return plantArray.name?.toLowerCase().includes(searched.toLowerCase())})

//   useEffect(()=>{
//     fetch(`https://api.rawg.io/api/games?key=67202bd4d44e4c7da8fdbad44df5b8da&search`)
//     .then(res => res.json())
//     .then(data => (
//       setGames(data.results)
//       ))
//   }
// ,[])

// useEffect(()=>{
//   fetch('http://localhost:3000/games')
//     .then(r => r.json())
//     .then(myGames => setMyGames(myGames))
//     console.log(myGames)
// }, [])

// 
  
  return (
    <>
    <div className="wrapper">
      <Header />
      <BrowserRouter>
      <Link  className="button wrapper" to="/">Home</Link> 
      <Link className="button wrapper" to="/games">Games</Link>
        <Switch>
          <Route path="/search">
          
          </Route>
          <Route path="/games">
          <Search setSearched={setSearched}/>
          <GameList games={filteredGames} />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
    
    <div >
      
      
      
    </div>
    </>
  );
}

export default App;
