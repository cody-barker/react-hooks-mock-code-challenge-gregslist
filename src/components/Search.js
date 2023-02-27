import React, {useState} from "react";

function Search({listings, setListings, filteredListings, search, setSearch}) {

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

//when a user enters text in the search bar, filter listings to display only those which include the text
//if nothing is entered, return all listings
//


//listings is changing, so when search ="", the listings to return are fewer or nonexistant
//need to keep from mutating the original list
//import the original list?
//need to return the entire list when searching and its empty, otherwise return nothing, otherwise return search == description