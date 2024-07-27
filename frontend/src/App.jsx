import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    displayModal,
    selectedPhoto,
    favouritePhotos,
    setDisplayModal,
    setSelectedPhoto,
    toggleFavourite
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        favouritePhotos={favouritePhotos} 
        toggleFavourite={toggleFavourite} 
      />
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal 
          closeDisplayModal={setDisplayModal} 
          photo={selectedPhoto}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
