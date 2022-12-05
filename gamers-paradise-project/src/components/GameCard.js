import React, { useState } from "react";

function GameCard() {
    const [like,setLike] = useState(true)
    const [hide,setHide] =useState(true)
    const handelClick = ()=>{
        setLike(!like)
    } 

   const  handelMore =()=>{
     setHide(!hide)
   }
  
    return (
        <li className="card">
            <h4>God Of War</h4>
            <img src="https://www.mobygames.com/images/covers/l/198187-god-of-war-playstation-2-front-cover.png" alt=""/>
            {hide ? (
                <button onClick={handelMore}>MORE</button> 
                ):(<>
                <button onClick={handelMore} >LESS</button>
                    <h5>Related Date: March 22, 2005 </h5>
                    <h6>PlatForms:Playstation</h6>
                </>
            )}
            <br></br>
           
                <button className={like ? "": "logo"} onClick={handelClick}>🕹️</button>
                
        </li>
    )
}

export default GameCard