import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  const { id, username, profile, imageSource, location } = photo;
  
  return(
    <div className="photo-list-item" key={id}>
      <img src={imageSource} alt={`${location.city}, ${location.country}`} className="photo" />
      <div className="photo-info">
        <img src={profile} alt={`${username}'s profile`} className="profile-picture" />
        <div className="details">
          <p className="username">{username}</p>
          <p className="location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};



export default PhotoListItem;
