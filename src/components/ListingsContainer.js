import React, {useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, search, filteredListings}) {

  function handleDOMDelete(deletedListing) {
    console.log(deletedListing.id)
    const updatedListings = listings.filter((item) => item.id !== deletedListing.id )
    setListings(updatedListings)
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(list => {
      setListings(list)
    })
  }, [])

  const allListings = filteredListings.map(listing =>  {
    return <ListingCard handleDOMDelete={handleDOMDelete} listings={listings} setListings={setListings} listing={listing} key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location}/>
  })

  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
