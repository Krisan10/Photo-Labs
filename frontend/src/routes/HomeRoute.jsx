import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setDisplayModal, setSelectedPhoto, favouritePhotos, toggleFavourite, onTopicSelect }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favouritePhotos={favouritePhotos}
        onTopicSelect={onTopicSelect} // Pass the topic select handler to TopNavigationBar
      />
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