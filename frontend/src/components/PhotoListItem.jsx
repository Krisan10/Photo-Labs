import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { id, user, urls, location } = photo;
  const { username, profile, name } = user;
  const { regular: imageSource } = urls;

  return (
    <div className="photo-list__item" key={id}>
      <div className="photo-list-item__fav-button">
        <PhotoFavButton />
      </div>
      <img src={imageSource} alt={`${location.city}, ${location.country}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__name">{name}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
