import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavourite, onClick, className }) {
  return (
    <div onClick={onClick} className={`photo-list__fav-button ${className}`}>
      <FavIcon selected={isFavourite} />
    </div>
  );
}

export default PhotoFavButton;
