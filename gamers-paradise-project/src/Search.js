function Search({setSearched}){


    const handleSearched= (e) =>{
        setSearched(e.target.value)
    }
    
    return(
        <div className="search-bar">
           <label>
            Search Games:
            </label>
            <input
            type="text"
            placeholder="Search your games... "
            //User needs to search through name 
                      
            //User needs to search through name
            onChange={handleSearched}           
            />

        </div>
    )
}

export default Search