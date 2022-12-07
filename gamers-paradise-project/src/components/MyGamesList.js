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
        
        return <GameCard 
        key={game.id}               
        game={game}
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