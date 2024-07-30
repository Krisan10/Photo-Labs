import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import TopNavigationBar from './components/TopNavigationBar';

const App = () => {
  const { state, dispatch, toggleFavourite, closeDisplayModal, setSelectedPhoto } = useApplicationData();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredPhotos = selectedTopic 
  ? state.photoData.filter(photo => {
      return String(photo.topic) === String(selectedTopic.id);
    })
  : state.photoData;
  
  return (
    <div>
      <TopNavigationBar
        topics={state.topics} 
        favouritePhotos={state.favouritePhotos} 
        onTopicSelect={handleTopicSelect}
      />
      <HomeRoute 
        photos={filteredPhotos}
        setDisplayModal={closeDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={toggleFavourite}
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
