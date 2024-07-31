import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({ topics, favouritePhotos, onTopicSelect  }) => {
  // Determine if there are any favourite photos
  const hasFavourites = Object.values(favouritePhotos).some(isFavourite => isFavourite);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onClick={onTopicSelect} />
      <FavBadge isFavPhotoExist={hasFavourites} />
    </div>
  );
};

export default TopNavigationBar;
