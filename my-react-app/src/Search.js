//from:https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/
import React, { useState } from "react";


const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value);
    }
  
    const resetInputField = () => {
      setSearchValue("")
    }
  
    const callSearchFunction = (e) => {
      e.preventDefault();
      props.search(searchValue);
      resetInputField();
    }
  
    return (
        <form className="search">
          <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
          />
          <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
      );
  }
  
  export default Search;