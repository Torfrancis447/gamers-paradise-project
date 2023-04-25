import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GameList from "./components/GameList.js";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Spinner } from "react-bootstrap";

export const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [games, setGames] = useState([]);
  const [searched, setSearched] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setIsLoaded(true);
      });
  }, []);

  const filteredGames = games.filter((game) => {
    return game.name.toLowerCase().includes(searched.toLowerCase());
  });

  // if (filteredGames.length <= 0) return <h1> no game found </h1>;

  return (
    <div className="wrapper">
      <NavBar />
      <Router>
        
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/games">
          <div className="container">
            <Search setSearched={setGames} />
            {isLoaded ? (
              <GameList games={filteredGames} key={filteredGames.id} />
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            </div>
          </Route>
        
      </Router>
    </div>
  );
}

export default App;
