import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favourite, setFavourite] = useState(false);
// handleClick toggles the favourite state between true and false
  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    // Button to add a click feature to manage the toggle of favourite.
    <button onClick={handleClick} className="photo-list__fav-button"> 
    <FavIcon selected={favourite} displayAlert={favourite} />

  </button>
  );
}


export default PhotoFavButton;