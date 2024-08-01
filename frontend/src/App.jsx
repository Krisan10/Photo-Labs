import React from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, toggleFavourite, closeDisplayModal, setSelectedPhoto, extractTopicFromUrl, handleTopicSelect, filteredPhotos } = useApplicationData();

  return (
    <div>
      <HomeRoute 
        photos={filteredPhotos}
        topics={state.topics}
        setDisplayModal={closeDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={toggleFavourite}
        onTopicSelect={handleTopicSelect} 
        topicFromUrl={extractTopicFromUrl}
      />
      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal 
          closeDisplayModal={closeDisplayModal}
          photo={state.selectedPhoto}
          favouritePhotos={state.favouritePhotos}
          toggleFavourite={toggleFavourite}
          allPhotos={state.photoData} 
        />
      )}
    </div>
  );
};

export default App;
