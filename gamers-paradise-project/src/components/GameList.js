import React from "react"
import GameCard from "./GameCard"


function GameList({games}) {
    const renderGames = games.map((game)=>{
        
        return <GameCard key={game.id}
        platforms={game.parent_platforms}
        id={game.id}
        name={game.name}
        released={game.released}
        image={game.background_image}
        />
    })


    return (
        <ul className="cards">
            {renderGames}
        </ul>
    )
}
export default GameList