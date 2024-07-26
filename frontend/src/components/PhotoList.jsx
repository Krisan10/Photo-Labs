import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"; // Ensure this path is correct
import "../styles/PhotoList.scss";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
