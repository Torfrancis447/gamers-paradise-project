import GameCard from "./GameCard"
import React, {useState, useEffect} from "react"

function MyGamesList(){
    const[games, setGames]= useState([])

    const refreshGamesList= () => {
        fetch('http://localhost:3000/games')
          .then(r => r.json())
          .then(games => setGames(games))
    }

    useEffect(()=>{        
        refreshGamesList()          
      }, [])

    const deleteGame= (game) =>{    
            fetch(`http://localhost:3000/games/${game.id}`, {
            method:'DELETE'
            })
            .then(res => res.json())
            .then(game => refreshGamesList())            
        }  
    
      const renderGames = games.map((game)=>{
        if (games.length === 0) {
          return <h1>No game found</h1>;
        }
        
        return <GameCard 
        key={game.id}   
        id={game.id}
        platforms={game.game.platforms}
        image={game.game.image}
        rating={game.game.rating}           
        game={game.game}
        released={game.game.released}
        buttonFunction={deleteGame}       
        />
    })
    
     
    return(
        <div className="cards">
           {renderGames}
        </div>
    )
}
export default MyGamesList