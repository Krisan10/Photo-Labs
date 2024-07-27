import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {/* Use !! operator to treat isFavePhotoExist as a boolean */}
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;