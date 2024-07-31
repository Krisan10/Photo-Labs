import React from "react";
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavourite, onClick }) {
  return (
    <div onClick={onClick} className="photo-list__fav-button"> 
      <FavIcon selected={isFavourite} displayAlert={isFavourite} />
    </div>
  );
}

export default PhotoFavButton;
