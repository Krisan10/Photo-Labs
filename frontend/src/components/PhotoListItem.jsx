import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavourite, toggleFavourite, setDisplayModal, setSelectedPhoto }) => {
  const { id, user, urls, location } = photo;
  const { username, profile, name } = user;
  const { regular: imageSource } = urls;

  return (
    
    <div className="photo-list__item" key={id}>
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
          // Trigger modal display when the image is clicked
          onClick={() => {
            setSelectedPhoto(photo); // Set the selected photo details
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
