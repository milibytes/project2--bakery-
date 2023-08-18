// function Search({setSearchState}) {

//     function handleSearch(e) {
//         setSearchState(e.target.value)
//     }
// return (

// <div>
//    <input onChange={handleSearch}></input> 
// </div>
// )
// }

// export default Search


function Search({ setSearchState }) {
    const handleSearch = (e) => {
      setSearchState(e.target.value);
    };
  
    return (
      <form className="newPictureForm">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search Pastries"
            onChange={handleSearch}
          />
        </div>
      </form>
    );
  }
  
  export default Search