import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( {isfavourite, onClick}) {
  const [favourite, setFavourite] = useState(false);


  return (
    // Button to add a click feature to manage the toggle of favourite.
    <button onClick={onClick} className="photo-list__fav-button"> 
     <FavIcon selected={isfavourite} displayAlert={isfavourite} />

  </button>
  );
}


export default PhotoFavButton;