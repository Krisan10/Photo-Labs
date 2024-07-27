import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        setDisplayModal={setPhotoSelected}
        setSelectedPhoto={setPhotoSelected}
        favouritePhotos={state.favouritePhotos} // favouritePhotos to HomeRoute
        toggleFavourite={updateToFavPhotoIds} // toggleFavourite to HomeRoute
      />
      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal 
          closeDisplayModal={onClosePhotoDetailsModal} 
          photo={state.selectedPhoto} // Pass the selected photo to the modal
          favouritePhotos={state.favouritePhotos} // favouritePhotos to the modal
          toggleFavourite={updateToFavPhotoIds} // toggleFavourite to the modal
        />
      )}
    </div>
  );
};

export default App;
