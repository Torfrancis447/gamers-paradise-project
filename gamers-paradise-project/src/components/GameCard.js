import React, { useState } from "react";
import {Card, Button} from 'react-bootstrap';

function GameCard({ genres, name, released, rating, id, game, buttonFunction, platforms, image}) {
    const [favorited,setFavorited] = useState(true)
    const [isGenre,setIsGenre] =useState(true)
                
    // const gameGenres = genres.map((genre) =>{
    //     return genre.name
    // })

    // if(game.genres[0].name === "Action"){

    // }
    
    // const genreObj= genre.map((genre)=> console.log(genre))


    const gameObj={
        platforms: platforms,        
        name: game.name,
        released: game.released,
        image: image,
        id:id,
        rating:rating
    }

   const  handleClick =(gameObj)=>{
     setFavorited(!favorited)
     buttonFunction(gameObj)
   }



   
    const showPlatformIcons = platforms?.map((platform) => {
        if(platform.platform.name === "PlayStation"){                            
            return <img alt={platform.platform.name} className="icon" src="https://iconarchive.com/download/i76049/martz90/circle-addon2/playstation.ico"/>
        } else if(platform.platform.name === "Xbox") {
            return <img alt={platform.platform.name} className="icon" src="https://iconarchive.com/download/i91134/icons8/windows-8/Logos-Xbox.ico" />
        } else if(platform.platform.name === "PC"){
            return <img alt={platform.platform.name} className="icon" src="https://www.freeiconspng.com/thumbs/steam-icon/steam-icon-19.png" />
        } else if(platform.platform.name === "Linux"){
            return <img alt={platform.platform.name} className="icon" src="https://iconarchive.com/download/i98403/dakirby309/simply-styled/OS-Linux.ico" />
        }
        })

    
    





    return (
        <>
        <div className="card">
            <Card/>
            <Card.Title>{name}</Card.Title>
            <Card.Img src={image} alt={name} onClick={()=> console.log(platforms)}/>
            
            <br></br>
            <Card.Text>Platforms: {showPlatformIcons}</Card.Text>
            <Card.Text>Rating: {rating} </Card.Text>                                                       
            <Card.Text>Released Date: {released} </Card.Text>

                    
                
                <Button variant={ favorited ? "outline-primary" : "primary"} type='click'onClick={()=>{handleClick(gameObj)}}>⭐</Button>
                
            <Card/>
        </div>
        </>
    )
}

export default GameCard