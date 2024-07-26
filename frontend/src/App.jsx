import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //Present the photo three times

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// const photoListItems = photos.map((photo, index) => 
//   <PhotoListItem key={index} photo={photo} />

return (
  <div className="App">
    <h1>Hello World</h1>
    {photoListItems}
  </div>
);
};


export default App;
