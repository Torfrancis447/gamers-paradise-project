import './App.css';
import GameList from './components/GameList';
import Header from './Header';
import Search from './Search'
import React, { useEffect, useState } from "react"


function App() {
  const [games,setGames] =useState([])
  useEffect(()=>{
    fetch(`https://api.rawg.io/api/games?key=67202bd4d44e4c7da8fdbad44df5b8da&search`)
    .then(res => res.json())
    .then(data => (
      setGames(data.results)
      ))
  }
,[])
  return (
    <div>
      <Header/>
      <Search/>
      <GameList games={games} />
    </div>
  );
}

export default App;
