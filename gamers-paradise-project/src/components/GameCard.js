import React, { useState } from "react";
import {Card, Button} from 'react-bootstrap';

function GameCard({ name, released, rating, id, game, buttonFunction, platforms, image}) {
    const [like,setLike] = useState(true)
    const [hide,setHide] =useState(true)
                
    
    
    


    const gameObj={
        platforms: platforms,        
        name: game.name,
        released: game.released,
        image: image,
        id:id,
        rating:rating
    }

   const  handelMore =()=>{
     setHide(!hide)
   }

   const handelClick = (e)=>{
    
    setLike(!like)
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
            {/* {hide ? (
                <Button variant="outline-dark" onClick={handelMore}>MORE</Button> 
                ):(<>
                <Button variant="outline-dark" onClick={handelMore}>LESS</Button>
                    <Card.Text>Platforms:<>{showPlatformIcons}</></Card.Text>
                                                       
                    <Card.Text>Related Date: {released} </Card.Text>
                </>
            )} */}
            <Card.Text>Platforms: {showPlatformIcons}</Card.Text>
            <Card.Text>Rating: {rating} </Card.Text>                                                       
            <Card.Text>Related Date: {released} </Card.Text>

                    
                {/* <Button variant="outline-dark" className={like ? "": "logo"} onClick={handelClick}>🕹️</Button> */}
                <Button variant="outline-primary"type='click'onClick={()=>buttonFunction(gameObj)}>⭐</Button>
                
            <Card/>
        </div>
        </>
    )
}

export default GameCard