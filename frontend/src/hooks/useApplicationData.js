import { useReducer, useCallback } from 'react';

// Define initial state
const initialState = {
  displayModal: false,
  selectedPhoto: null,
  favouritePhotos: {}
};

// Define action types using camelCase
const actionTypes = {
  toggleFavourite: 'TOGGLE_FAVOURITE',
  setDisplayModal: 'SET_DISPLAY_MODAL',
  setSelectedPhoto: 'SET_SELECTED_PHOTO'
};

// Define the reducer function
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
    default:
      return state;
  }
};

const useApplicationData = () => {
  // Initialize the reducer with the initial state and reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define callback functions to dispatch actions
  const toggleFavourite = useCallback((photoId) => {
    dispatch({ type: actionTypes.toggleFavourite, photoId });
  }, []);

  const setDisplayModal = useCallback((isVisible) => {
    dispatch({ type: actionTypes.setDisplayModal, payload: isVisible });
  }, []);

  const setSelectedPhoto = useCallback((photo) => {
    dispatch({ type: actionTypes.setSelectedPhoto, payload: photo });
  }, []);

  return {
    displayModal: state.displayModal,
    selectedPhoto: state.selectedPhoto,
    favouritePhotos: state.favouritePhotos,
    setDisplayModal,
    setSelectedPhoto,
    toggleFavourite
  };
};

export default useApplicationData;
