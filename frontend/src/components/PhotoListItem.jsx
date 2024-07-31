import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavourite, toggleFavourite, setDisplayModal, setSelectedPhoto }) => {
  const { id, user, urls, location } = photo;
  const { username, profile, name } = user;
  const { regular: imageSource } = urls;

  console.log('setSelectedPhoto:', setSelectedPhoto); // Check this output

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFavourite={isFavourite}
        onClick={() => toggleFavourite(id)}
        className="photo-list__fav-icon"
      />
      <div className="photo-list-item__image-container">
        <img 
          src={imageSource}
          alt={`${location?.city || 'Unknown city'}, ${location?.country || 'Unknown country'}`}
          className="photo-list__image"
          onClick={() => {
            console.log('Clicked on photo, setting selected photo'); // Debug log
            if (typeof setSelectedPhoto === 'function') {
              setSelectedPhoto(photo); // Ensure this is a function
            } else {
              console.error('setSelectedPhoto is not a function'); // Debug log
            }
            setDisplayModal(true); // Show the modal
          }}
        />
      </div>
      <div className="photo-list__user-details">
        <img 
          src={profile}
          alt={`${username}'s profile`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <p className="photo-list__name">{name}</p>
          <p className="photo-list__user-location">{`${location?.city || 'Unknown city'}, ${location?.country || 'Unknown country'}`}</p>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
