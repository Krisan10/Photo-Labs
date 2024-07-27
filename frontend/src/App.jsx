import React, { useState, useCallback } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false); // Use useState to manage modal display
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState({});

  const toggleFavourite = useCallback((photoId) => {
    setFavouritePhotos((prevFavourites) => ({
     // callback receives prevFavourites, the current state of favorite photos.
      ...prevFavourites,
      [photoId]: !prevFavourites[photoId]
            // If prevFavourites[photoId] is true (the photo is currently favorited), it becomes false (unfavorited).

    }));
  }, []);

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        favouritePhotos={favouritePhotos} // Pass favouritePhotos to HomeRoute
        toggleFavourite={toggleFavourite} // Pass toggleFavourite to HomeRoute
      />
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal 
          closeDisplayModal={setDisplayModal} 
          photo={selectedPhoto} // Pass the selected photo to the modal
          favouritePhotos={favouritePhotos} // Pass favouritePhotos to the modal
          toggleFavourite={toggleFavourite} // Pass toggleFavourite to the modal
        />
      )}
    </div>
  );
};

export default App;
