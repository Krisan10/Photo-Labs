import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //Present the photo three times

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// const photoListItems = photos.map((photo, index) => 
//   <PhotoListItem key={index} photo={photo} />

return (
  <div className="App">
    <h1>Hello World</h1>
    <PhotoList />
  </div>
);
};


export default App;
