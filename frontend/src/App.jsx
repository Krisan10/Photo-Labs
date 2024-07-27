import React, { useState, useCallback } from 'react'; // Import useState and useCallback
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// const photoListItems = photos.map((photo, index) => 
//   <PhotoListItem key={index} photo={photo} />

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
        setDisplayModal={setDisplayModal} // Pass setDisplayModal to HomeRoute
        setSelectedPhoto={setSelectedPhoto}
        toggleFavourite={toggleFavourite} // Pass toggleFavourite to HomeRoute
        favouritePhotos={favouritePhotos} // Pass favouritePhotos to HomeRoute
      />
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal 
          closeDisplayModal={setDisplayModal} 
          photo={{ ...selectedPhoto, isFavourite: !!favouritePhotos[selectedPhoto.id] }} // Pass the selected photo to the modal
          toggleFavourite={toggleFavourite} // Pass toggleFavourite function to the modal
        />
      )}
    </div>
  );
};

export default App;
