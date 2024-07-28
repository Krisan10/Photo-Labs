import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar= ({ topics, favouritePhotos, onTopicSelect }) => {
  /* Returns an array of values from favouritePhotos
     .some() checks if one of those values is true
     isFavourite returns the value of isFavourite  
  */
  const hasFavourites = Object.values(favouritePhotos).some(isFavourite => isFavourite);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicSelect} /> {/* Pass the handler */}
      <FavBadge isFavPhotoExist={hasFavourites} />
    </div>
  );
};

export default TopNavigationBar;
