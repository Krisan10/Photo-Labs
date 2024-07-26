import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />  
      <h1>Hello World</h1>
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
