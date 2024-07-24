import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //Data of profile
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

  return (
    <div className="App">
      <h1>Hello World</h1>
      <PhotoListItem photo = {sampleDataForPhotoListItem} /> 
      {/* Using the name photo as a sub for prop */}
    </div>
  );
};

export default App;
