import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// const photoListItems = photos.map((photo, index) => 
//   <PhotoListItem key={index} photo={photo} />


const App = () => {
  return (
    <div className="App">
      <HomeRoute />

    </div>
  );
};

export default App;