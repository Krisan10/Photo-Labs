import React, { useState, useCallback } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  
  const [favouritePhotos, setFavouritePhotos] = useState({});

  
  const toggleFavourite = useCallback((photoId) => {
    setFavouritePhotos((prevFavourites) => ({
      ...prevFavourites,
      [photoId]: !prevFavourites[photoId]
    }));
  }, []);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />  
      <h1>Hello World</h1>
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;
