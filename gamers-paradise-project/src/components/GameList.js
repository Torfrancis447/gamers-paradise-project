import React from "react"
import GameCard from "./GameCard"


function GameList({games}) {
    const renderGames = games.map((game)=>{
        console.log(game)
        return <GameCard key={game.id}
        platform={game.parent_platforms.map((plat)=>{
            return ""+ plat.platform.name
        })}
        id={game.id}
        name={game.name}
        released={game.released}
        image={game.background_image}
        />
    })


    return (
        <div>
            {renderGames}
        </div>
    )
}
export default GameList