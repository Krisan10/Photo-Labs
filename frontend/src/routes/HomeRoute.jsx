import React, { useState, useCallback } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favouritePhotos, setFavouritePhotos] = useState({});
  const [displayModal, setDisplayModal] = useState(false);

  const toggleFavourite = useCallback((photoId) => {
    setFavouritePhotos((prevFavourites) => ({
      // callback receives prevFavourites, the current state of favorite photos.
      ...prevFavourites,
      [photoId]: !prevFavourites[photoId]
      // If prevFavourites[photoId] is true (the photo is currently favorited), it becomes false (unfavorited).
    }));
  }, []);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos}/>  
      <h1>Hello World</h1>
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        setDisplayModal={setDisplayModal}
      />
      {/* Conditionally render the PhotoDetailsModal based on displayModal state */}
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} />}
    </div>
  );
};

export default HomeRoute;
