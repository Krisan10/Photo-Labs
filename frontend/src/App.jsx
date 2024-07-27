import React from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, dispatch, toggleFavourite, setDisplayModal, setSelectedPhoto } = useApplicationData();

  return (
    <div>
      <HomeRoute 
        photos={state.photoData} 
        topics={state.topics} 
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal 
          closeDisplayModal={setDisplayModal}
          photo={state.selectedPhoto}
          favouritePhotos={state.favouritePhotos}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
