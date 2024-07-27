import { useReducer, useCallback, useEffect } from 'react';

const initialState = {
  displayModal: false,
  selectedPhoto: null,
  favouritePhotos: {},
  photoData: [], // Default empty array
  topics: [] // Default empty array
};

const actionTypes = {
  toggleFavourite: 'TOGGLE_FAVOURITE',
  setDisplayModal: 'SET_DISPLAY_MODAL',
  setSelectedPhoto: 'SET_SELECTED_PHOTO',
  setPhotoData: 'SET_PHOTO_DATA',
  setTopicsData: 'SET_TOPICS_DATA'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggleFavourite:
      return {
        ...state,
        favouritePhotos: {
          ...state.favouritePhotos,
          [action.photoId]: !state.favouritePhotos[action.photoId]
        }
      };
    case actionTypes.setDisplayModal:
      return {
        ...state,
        displayModal: action.payload
      };
    case actionTypes.setSelectedPhoto:
      return {
        ...state,
        selectedPhoto: action.payload
      };
    case actionTypes.setPhotoData:
      return {
        ...state,
        photoData: action.payload
      };
    case actionTypes.setTopicsData:
      return {
        ...state,
        topics: action.payload
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch photo data and dispatch it to the reducer
    fetch('/api/photos')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: actionTypes.setPhotoData, payload: data });
      })
      .catch(error => console.error('Error fetching photos:', error));

    // Fetch topics data and dispatch it to the reducer
    fetch('/api/topics')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: actionTypes.setTopicsData, payload: data });
      })
      .catch(error => console.error('Error fetching topics:', error));
  }, [dispatch]);

  const toggleFavourite = useCallback((photoId) => {
    dispatch({ type: actionTypes.toggleFavourite, photoId });
  }, []);

  const closeDisplayModal = useCallback((isVisible) => {
    dispatch({ type: actionTypes.setDisplayModal, payload: isVisible });
  }, []);

  const setSelectedPhoto = useCallback((photo) => {
    dispatch({ type: actionTypes.setSelectedPhoto, payload: photo });
  }, []);

  return {
    state,  // Ensure state is returned
    dispatch,  // Ensure dispatch is returned
    toggleFavourite,
    closeDisplayModal,
    setSelectedPhoto
  };
};

export default useApplicationData;
