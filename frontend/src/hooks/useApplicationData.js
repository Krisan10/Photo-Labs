import { useReducer, useEffect } from 'react';

const initialState = {
  displayModal: null,
  selectedPhoto: null,
  favouritePhotos: {},
  photoData: [],
  topics: [],
  selectedTopicId: null
};

const actionTypes = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_MODAL: 'SET_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC_ID: 'SET_TOPIC_ID'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        favouritePhotos: {
          ...state.favouritePhotos,
          [action.photoId]: !state.favouritePhotos[action.photoId]
        }
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        displayModal: null
      };
    case actionTypes.SET_MODAL:
      return {
        ...state,
        displayModal: action.payload
      };
    case actionTypes.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case actionTypes.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload
      };
    case actionTypes.SET_TOPIC_ID:
      return {
        ...state,
        selectedTopicId: action.payload
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Promise.all([
      fetch('/api/photos').then(response => response.json()),
      fetch('/api/topics').then(response => response.json())
    ])
      .then(([photos, topics]) => {
        dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: photos });
        dispatch({ type: actionTypes.SET_TOPIC_DATA, payload: topics });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleFavourite = (photoId) => {
    dispatch({ type: actionTypes.TOGGLE_FAVORITE, photoId });
  };

  const closeDisplayModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  const setModal = (photo) => {
    dispatch({ type: actionTypes.SET_MODAL, payload: photo });
  };

  const setSelectedTopic = (topicId) => {
    dispatch({ type: actionTypes.SET_TOPIC_ID, payload: topicId });
  };

  return {
    state,
    toggleFavourite,
    closeDisplayModal,
    setModal,
    setSelectedTopic
  };
};


export default useApplicationData;
