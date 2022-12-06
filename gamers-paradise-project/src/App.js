import './App.css';
import GameList from './components/GameList';
import Header from './Header';
import Search from './Search'
import React, { useEffect, useState } from "react"
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";


function App() {
  const[gameData, setGameData]= useState([])
  const apiKey ="key=3b3860649dd54e4c89b37919897a1d56"

  useEffect(()=>{
    fetch(`https://api.rawg.io/api/games?${apiKey}&-metacritic=80,100`)
    .then(resp => resp.json())
    .then(gameData => setGameData(gameData))
  }, [])

  console.log(gameData.results)
  return (
  
    </div>
    
    <div >
      
      
      
    </div>
    </>
  );
}

export default App;
