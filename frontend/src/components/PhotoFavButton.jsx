import React, { useState, useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( {isFavourite, onClick}) {
  const [favourite, setFavourite] = useState(false);

  return (
    // Button to add a click feature to manage the toggle of favourite.
    <div onClick={onClick} className="photo-list__fav-button"> 
      <FavIcon selected={isFavourite} displayAlert={isFavourite} />
    </div>
  );
}

export default PhotoFavButton;
