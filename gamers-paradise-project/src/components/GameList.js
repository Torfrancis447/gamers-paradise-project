import React, {useState, useEffect} from "react"
import GameCard from "./GameCard"
import Search from "../Search"
import Form from "react-bootstrap/Form"


function GameList({g}) {
    const [games,setGames] =useState([])
    const[searched, setSearched]=useState('')

    // function addNewObj(newObj){
    //     setMyGames([...games, newObj])
    // }

    const saveGame= (game) =>{           
        const configObj = {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({game})};       
             fetch('http://localhost:3000/games', configObj)
              .then(res => res.json())
              .then(game =>console.log(game))
            
        }  
    

    const filteredGames= g.filter((plantArray) =>{
    return plantArray.name?.toLowerCase().includes(searched.toLowerCase())})

    // useEffect(()=>{
    //     fetch(`https://api.rawg.io/api/games?key=67202bd4d44e4c7da8fdbad44df5b8da&search`)
    //     .then(res => res.json())
    //     .then(data => (
    //       setGames(data.results)
    //       ))        
    //   }
    // ,[])


    const renderGames = filteredGames.map((game)=>{
        
        return <GameCard 
        key={game.id}
        platforms={game.parent_platforms}
        // id={game.id}
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
        <Form>
         <Form.Group className="mb-3">         
        <Form.Label><Search setSearched={setSearched}/></Form.Label>        
          
         </Form.Group >
        </Form>
        <ul className="cards">
            
            <br></br>
            {renderGames}
        </ul>
        </>
    )
}
export default GameList