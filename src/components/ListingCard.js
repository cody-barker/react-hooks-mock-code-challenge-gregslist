import React, {useState} from "react";

function ListingCard({description, image, location, handleDOMDelete, listing, listings}) {

  const [favorite, setFavorite] = useState(false)

  function handleFavorite() {
    setFavorite((favorite) => !favorite)
  }

  function handleDeleteClick(){
    //console.log(listing)
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    handleDOMDelete(listing)
  
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
