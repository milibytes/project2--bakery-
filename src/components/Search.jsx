import { useState } from "react"

function Search({setSearchState}) {

    function handleSearch(e) {
        setSearchState(e.target.value)
    }
return (

<div>
   <input onChange={handleSearch}></input> 
</div>
)
}

export default Search;