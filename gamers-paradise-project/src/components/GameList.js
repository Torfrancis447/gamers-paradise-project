import React, {useState, useEffect} from "react"
import GameCard from "./GameCard.js"
// import Search from "../Search"
// import Form from "react-bootstrap/Form"
// import Dropdown from 'react-bootstrap/Dropdown'
// import Spinner from 'react-bootstrap/Spinner'


function GameList({games, setGames}) {
    // const [filteredGames,setFilteredGames] =useState(game)
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

    // const gameGenres= g.filter((games) =>{
    //     return games.genres[0].name?.includes("Action")
    // })

    // const filterGameGenres = () => setFilteredGames(gameGenres)


    
        
    
    const renderGames = games.map((game)=>{
        
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
        <div className="cards">
        
            {renderGames}
        
        </div>
    )
}
export default GameList