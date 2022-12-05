import React, { useState } from "react";

function GameCard() {
    const [like,setLike] = useState(true)
    const handelClick = ()=>{
        setLike(!like)
    } 
    return (
        <li className="card">
            <img src="https://www.mobygames.com/images/covers/l/198187-god-of-war-playstation-2-front-cover.png" alt=""/>
            <h4>God Of War</h4>
            <button>More</button>
            {like ? (
                <button onClick={handelClick}>♡</button>
                ):(
                    <button onClick={handelClick} >♥</button>
                
            )}
        </li>
    )
}

export default GameCard