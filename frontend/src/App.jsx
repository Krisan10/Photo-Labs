import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// const photoListItems = photos.map((photo, index) => 
//   <PhotoListItem key={index} photo={photo} />

const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
      <PhotoDetailsModal />
    </div>
  );
};

export default App;
