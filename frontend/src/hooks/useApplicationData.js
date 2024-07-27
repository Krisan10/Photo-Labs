import { useState, useCallback } from 'react';

const useApplicationData = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState({});

  const toggleFavourite = useCallback((photoId) => {
    setFavouritePhotos((prevFavourites) => ({
      ...prevFavourites,
      [photoId]: !prevFavourites[photoId]
    }));
  }, []);

  return {
    // Current state of modal visibility
    displayModal,
    // Current selected photo
    selectedPhoto,
    // Current state of favorite photos.
    favouritePhotos,
    // Function to update the modal visibility state
    setDisplayModal,  
    // Function to update the selected photo state.
    setSelectedPhoto,
    // Function to toggle the favorite status of a photo.
    toggleFavourite
  };
};

export default useApplicationData;