import React, {useState} from "react"

function Search({setGames}){
    const[search, setSearch] =useState("")


    const handleSearch= (e) =>{        
        setSearch(e.target.value)      

    }
   
    const handleSubmit =(e)=>{
        

        e.preventDefault()        
            fetch(`https://api.rawg.io/api/games?key=67202bd4d44e4c7da8fdbad44df5b8da&search=${search.split(" ").join("-").toLowerCase()}`)
             .then(res => res.json())
             .then(data => {
          setGames(data.results);
          setSearch("")
          })
    }     
  
    
  
 
   
    return(
        <div className="search-bar">
           <label>
            Search Games:
            </label>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search your games... "
            //User needs to search through name 
             value={search}   
            //User needs to search through name
            onChange={handleSearch}           
            />
            <button type="submit">Search</button>
            </form>

        </div>
    )
}

export default Search