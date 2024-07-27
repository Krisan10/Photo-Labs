import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favouritePhotos, toggleFavourite, setDisplayModal }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          // This accesses the value in the favouritePhotos object corresponding to the photo.id
          isFavourite={!!favouritePhotos[photo.id]}
          // The child component can call this function to toggle the favorite status of a photo.
          toggleFavourite={toggleFavourite}
          // Pass setDisplayModal function to PhotoListItem
          setDisplayModal={setDisplayModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
