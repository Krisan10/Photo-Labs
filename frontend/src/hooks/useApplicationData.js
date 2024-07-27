// hooks/useApplicationData.js
import { useState, useCallback } from 'react';

// Initial state for the application
const initialState = {
  displayModal: false,
  selectedPhoto: null,
  favouritePhotos: {}
};

const useApplicationData = () => {
  const [state, setState] = useState(initialState);

  // Action to update favourite photos
  const updateToFavPhotoIds = useCallback((photoId) => {
    setState((prevState) => ({
      ...prevState,
      favouritePhotos: {
        ...prevState.favouritePhotos,
        [photoId]: !prevState.favouritePhotos[photoId]
      }
    }));
  }, []);

  // Action to select a photo
  const setPhotoSelected = useCallback((photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
      displayModal: true
    }));
  }, []);

  // Action to close the photo details modal
  const onClosePhotoDetailsModal = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      displayModal: false,
      selectedPhoto: null
    }));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;
