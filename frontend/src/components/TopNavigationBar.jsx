import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({ topics, favouritePhotos, onTopicSelect, topicFromUrl }) => {
  // Returns an array of values from favouritePhotos
  // .some() checks if one of those values is true
  // isFavourite returns the value of isFavourite
  const hasFavourites = Object.values(favouritePhotos).some(isFavourite => isFavourite);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Pass the handler directly without assignment */}
      <TopicList topics={topics} onClick={onTopicSelect} /> 
      <FavBadge isFavPhotoExist={hasFavourites} />
    </div>
  );
};

export default TopNavigationBar;

