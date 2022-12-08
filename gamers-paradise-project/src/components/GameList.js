import React, {useState, useEffect} from "react"
import GameCard from "./GameCard"
import Search from "../Search"
import Form from "react-bootstrap/Form"
import Dropdown from 'react-bootstrap/Dropdown'



function GameList({g, setGames}) {
    const [filteredGames,setFilteredGames] =useState(g)
    // const[searched, setSearched]=useState('')

   

    const saveGame= (game) =>{           
        const configObj = {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({game})};       
             fetch('http://localhost:3000/games', configObj)
              .then(res => res.json())
              
            
        }  
        // if(game.genres[0].name === "Action"){
        
        // }

    const gameGenres= g.filter((games) =>{
        return games.genres[0].name?.includes("Action")
    })

    const filterGameGenres = () => setFilteredGames(gameGenres)


    
        
    
    const renderGames = filteredGames.map((game)=>{
        
        return <GameCard 
        key={game.id}
        platforms={game.parent_platforms}
        // id={game.id}        
        genres={game.genres}
        name={game.name}
        released={game.released}
        rating={game.rating}
        image={game.background_image}
        buttonFunction={saveGame} 
        game={game}       
        />
    })
    

    return (
        <>
        <br></br>
              
        <Search  setGames={setFilteredGames}/>
        {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={filterGameGenres} >Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
                <Dropdown.Item href="#/action-3">RPG</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>      */}
        {/* <button onClick={filterGameGenres}>Action</button>  */}
        
        <ul className="cards">
            
            <br></br>
            {renderGames}
        </ul>
        </>
    )
}
export default GameList