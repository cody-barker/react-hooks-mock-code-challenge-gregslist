import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  let filteredListings = listings.filter(listing => {
    if (search === "") {
      return listing
    } else if (listing.description.toLowerCase().includes(search)) {
      return listing
    }}
  )

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} filteredListings={filteredListings} search={search} setSearch={setSearch}/>
      <ListingsContainer listings={listings} setListings={setListings} filteredListings={filteredListings} search={search}/>
    </div>
  );
}

export default App;


/**
 * App
 *  Header
 *    Search
 *  Listings Container
 *    Listing Card
 */

/**DB BACKUP
 * {
  "listings": [
    {
      "id": 3,
      "description": "Free Braun 3735 Electric Toothbrush charger",
      "image": "./images/toothbrush-charger.jpg",
      "location": "Williamsburg"
    },
    {
      "id": 5,
      "description": "wood",
      "image": "./images/wood.jpg",
      "location": "Greenpoint"
    },
    {
      "id": 6,
      "description": "Beautiful couch",
      "image": "./images/couch.jpg",
      "location": "Bay Ridge"
    },
    {
      "id": 7,
      "description": "Treadmill Parts For Free",
      "image": "./images/treadmill.jpg",
      "location": "East Flatbush"
    }
  ]
}
 */

