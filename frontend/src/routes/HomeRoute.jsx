import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation />  
      <h1>Hello World</h1>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
