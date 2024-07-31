import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favouritePhotos, toggleFavourite, setDisplayModal, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={!!favouritePhotos[photo.id]}
          toggleFavourite={toggleFavourite}
          setDisplayModal={setDisplayModal}
          setSelectedPhoto={setSelectedPhoto} // Ensure this is correctly passed
        />
      ))}
    </ul>
  );
};

export default PhotoList;