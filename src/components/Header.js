import React from "react";
import Search from "./Search";

function Header({listings, setListings, filteredListings, search, setSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} setListings={setListings} filteredListings={filteredListings} search={search} setSearch={setSearch}/>
    </header>
  );
}

export default Header;
