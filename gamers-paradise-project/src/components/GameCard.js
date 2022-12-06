import React, { useState } from "react";

function GameCard({id,name,platforms,released,image,games}) {
    const [like,setLike] = useState(true)
    const [hide,setHide] =useState(true)
    const[thumbUp, setThumbUp] = useState("")
   

   const  handelMore =()=>{
     setHide(!hide)
   }

   const handelClick = (e)=>{
    let userInput=e.target.id
    setLike(!like)
   }

   
    const showPlatformIcons = platforms.map((platform) => {
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
                
            
        </div>
        </>
    )
}

export default GameCard