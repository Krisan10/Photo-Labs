import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// const photoListItems = photos.map((photo, index) => 
//   <PhotoListItem key={index} photo={photo} />


const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;