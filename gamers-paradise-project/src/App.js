import './App.css';
import GameList from './components/GameList';
import Header from './Header';
import Search from './Search'
import React, { useEffect, useState } from "react"


function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <GameList />
    </div>
  );
}

export default App;
