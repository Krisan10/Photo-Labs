import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setDisplayModal, setSelectedPhoto, favouritePhotos, toggleFavourite }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos}/>  
      <h1>Hello World</h1>
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;