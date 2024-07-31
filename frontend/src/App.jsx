import React, { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, dispatch, toggleFavourite, closeDisplayModal, setSelectedPhoto, extractTopicFromUrl } = useApplicationData();
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
