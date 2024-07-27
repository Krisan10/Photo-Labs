import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavourite, toggleFavourite, setDisplayModal }) => {
  const { id, user, urls, location } = photo;
  const { username, profile, name } = user;
  const { regular: imageSource } = urls;

  return (
    <div className="photo-list__item" key={id}>
      <div className="photo-list-item__fav-button">
        <PhotoFavButton
          // Marks the photo as a favorite, using props to control its state and handle clicks.
          isFavourite={isFavourite}
          onClick={() => toggleFavourite(id)}
        />
      </div>
      <img 
        src={imageSource} 
        alt={`${location.city}, ${location.country}`} 
        className="photo-list__image"
        // Trigger modal display when the image is clicked
        onClick={() => setDisplayModal(true)}
      />
      <div className="photo-list__user-details">
        <img 
          src={profile} 
          alt={`${username}'s profile`} 
          className="photo-list__user-profile" 
        />
        <div className="photo-list__user-info">
          <p className="photo-list__name">{name}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
