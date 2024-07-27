import { useReducer, useCallback } from 'react';

// Define initial state
const initialState = {
  displayModal: false,
  selectedPhoto: null,
  favouritePhotos: {}
};

// Define action types
const ActionTypes = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  SET_DISPLAY_MODAL: 'SET_DISPLAY_MODAL',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO'
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_FAVOURITE:
      return {
        ...state,
        favouritePhotos: {
          ...state.favouritePhotos,
          [action.photoId]: !state.favouritePhotos[action.photoId]
        }
      };
    case ActionTypes.SET_DISPLAY_MODAL:
      return {
        ...state,
        displayModal: action.payload
      };
    case ActionTypes.SET_SELECTED_PHOTO:
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
    dispatch({ type: ActionTypes.TOGGLE_FAVOURITE, photoId });
  }, []);

  const setDisplayModal = useCallback((isVisible) => {
    dispatch({ type: ActionTypes.SET_DISPLAY_MODAL, payload: isVisible });
  }, []);

  const setSelectedPhoto = useCallback((photo) => {
    dispatch({ type: ActionTypes.SET_SELECTED_PHOTO, payload: photo });
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
