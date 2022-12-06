function Search({setSearched}){

<<<<<<< HEAD

=======
    const handleSearched= (e) =>{
        setSearched(e.target.value)
    }
    
>>>>>>> main
    return(
        <div className="search-bar">
           <label>
            Search Games:
            </label>
            <input
            type="text"
            placeholder="Search your games... "
<<<<<<< HEAD
            //User needs to search through name 
                      
=======
            //User needs to search through name
            onChange={handleSearched}           
>>>>>>> main
            />

        </div>
    )
}

export default Search