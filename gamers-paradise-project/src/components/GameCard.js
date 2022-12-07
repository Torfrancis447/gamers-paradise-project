import React, { useState } from "react";

function GameCard({ game, buttonFunction }) {
    const [like,setLike] =useState(true)
    const [hide,setHide] =useState(true)

        
    const platforms=game.parent_platforms        
    const name=game.name
    const released=game.released
    const image=game.background_image

    const gameObj={
        parent_platforms: game.parent_platforms,        
        name: game.name,
        released: game.released,
        background_image: game.background_image,
        id:game.id
    }

   const  handelMore =()=>{
     setHide(!hide)
   }

   const handelClick = (e)=>{
    
    setLike(!like)
   }

   
    const showPlatformIcons = gameObj.platforms?.map((platform) => {
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
            <h4>{name}</h4>
            <img src={image} alt={name}/>
            {hide ? (
                <button  onClick={handelMore}>MORE</button> 
                ):(<>
                <button onClick={handelMore}>LESS</button>
                    <p>Platforms:<>{showPlatformIcons}</></p>
                                                       
                    <span>Related Date: {released} </span>
                </>
            )}
            <br></br>
                    
                <button className={like ? "": "logo"} onClick={handelClick}>🕹️</button>
                <button type='click'onClick={()=>buttonFunction(gameObj)}>Fav</button>
                
            {console.log(gameObj)}
        </div>
        </>
    )
}

export default GameCard