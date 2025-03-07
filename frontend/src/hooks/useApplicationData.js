import { useReducer, useEffect, useState } from 'react';

const initialState = {
  displayModal: false,
  selectedPhoto: null,
  favouritePhotos: {},
  photoData: [],
  topics: []
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
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    // Fetch topics data and dispatch it to the reducer
    fetch('/api/topics')
      .then(response => response.json())
      .then(topics => {
        dispatch({ type: actionTypes.setTopicsData, payload: topics });
      })
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  useEffect(() => {
    // Fetch photos based on the selected topic
    const fetchPhotos = (url) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const photosWithTopics = data.map(photo => ({
            ...photo,
            topic: extractTopicFromUrl(photo.urls.full)
          }));
          dispatch({ type: actionTypes.setPhotoData, payload: photosWithTopics });
        })
        .catch(error => console.error('Error fetching photos:', error));
    };

    if (selectedTopic) {
      fetchPhotos(`http://localhost:8001/api/topics/photos/${selectedTopic.id}`);
    } else {
      fetchPhotos('/api/photos');
    }
  }, [selectedTopic]);

  const toggleFavourite = (photoId) => {
    dispatch({ type: actionTypes.toggleFavourite, photoId });
  };

  const closeDisplayModal = (isVisible) => {
    dispatch({ type: actionTypes.setDisplayModal, payload: isVisible });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: actionTypes.setSelectedPhoto, payload: photo });
  };

  const extractTopicFromUrl = (url) => {
    const topics = ['people', 'nature', 'travel', 'animals', 'fashion'];
    for (let topic of topics) {
      if (url.includes(topic)) {
        return topic;
      }
    }
    return 'unknown';
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredPhotos = selectedTopic 
    ? state.photoData.filter(photo => photo.topic === selectedTopic.slug)
    : state.photoData;

  return {
    state,
    dispatch,
    toggleFavourite,
    closeDisplayModal,
    setSelectedPhoto,
    extractTopicFromUrl,
    handleTopicSelect,
    filteredPhotos
  };
};

export default useApplicationData;
