import React from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, toggleFavourite, closeDisplayModal, setModal, setSelectedTopic } = useApplicationData();
  const modal = state.displayModal; // Updated to match state property
  const favourites = state.favouritePhotos; // Updated to match state property
  const photos = state.photoData; // State variable for photos
  const topics = state.topics; // State variable for topics

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        toggleFavourite={toggleFavourite} 
        setDisplayModal={setModal} // Set modal visibility
        setSelectedPhoto={setModal} // Used to set the selected photo
        favouritePhotos={favourites} 
        onTopicSelect={setSelectedTopic} 
        topicFromUrl={state.selectedTopicId}
      />

      {modal && (
        <PhotoDetailsModal 
          photo={modal} 
          toggleFavourite={toggleFavourite} 
          favouritePhotos={favourites} 
          closeDisplayModal={closeDisplayModal} 
          allPhotos={photos} 
        />
      )}
    </div>
  );
};

export default App;
