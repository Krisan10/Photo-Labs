import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setDisplayModal, setModal, favouritePhotos, toggleFavourite, onTopicSelect, topicFromUrl }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favouritePhotos={favouritePhotos}
        onTopicSelect={onTopicSelect}
        topicFromUrl={topicFromUrl}
      />
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setModal} // Correctly pass setModal as setSelectedPhoto
      />
    </div>
  );
};

export default HomeRoute;
