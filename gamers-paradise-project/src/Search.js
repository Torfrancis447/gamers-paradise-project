import React, {useState} from "react"
import {Button, Form} from 'react-bootstrap'

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
           
            <Form onSubmit={handleSubmit}>
            <Form.Control 
            type="text"
            placeholder="Search your games... "
            //User needs to search through name 
            value={search}   
            //User needs to search through name
            onChange={handleSearch}           
            />
            <br></br>
            <Button variant="secondary" size="lg"type="submit">Search</Button>
            </Form>

        </div>
    )
}

export default Search