import React, { useState } from "react";

function GameCard({id,name,platform,released,image,games}) {
    const [like,setLike] = useState(true)
    const [hide,setHide] =useState(false)
    const handelClick = ()=>{
        setLike(!like)
    } 

   const  handelMore =()=>{
     setHide(!hide)
   }
  
    return (
        <>
        <li className="card">
            <h4>{name}</h4>
            <img src={image}/>
            {hide ? (
                <button onClick={handelMore}>MORE</button> 
                ):(<>
                <button onClick={handelMore} >LESS</button>
                    <p>PlatForms: {platform} </p>
                    <span>Related Date: {released} </span>
                </>
            )}
            <br></br>
           
                <button className={like ? "": "logo"} onClick={handelClick}>🕹️</button>
                
            
        </li>
        </>
    )
}

export default GameCard