import './App.css';
import GameList from './components/GameList';
import Header from './Header';
import Search from './Search'
import React, { useEffect, useState } from "react"


function App() {
  const[gameData, setGameData]= useState([])
  // const[searched, setSeached]= useState("")
  const[myGameData, setMyGameData] =useState([])
  // function handleSeach(e){
  //   setSearched(e.target.value)
  // }
  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(r => r.json())
    .then(data => setMyGameData(data))
  }, [])





  const apiKey ="key=3b3860649dd54e4c89b37919897a1d56"

  useEffect(()=>{
    fetch(`https://api.rawg.io/api/games?${apiKey}&-metacritic=80,100`)
    .then(resp => resp.json())
    .then(gameData => {
      for(let i=0; i < gameData.length; i++){
      for(let j=0; j < myGameData?.length; i++){
          if(gameData[i].id === myGameData[j].id){
            gameData[i]
          }
      }
    }})
  }, [myGameData])

  console.log(gameData)
  
  return (
    <div>
      <Header/>
      <Search />
      <GameList />
    </div>
  );
}

export default App;
