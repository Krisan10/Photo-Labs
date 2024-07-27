import React, { useState } from 'react'; // Import useState
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// const photoListItems = photos.map((photo, index) => 
//   <PhotoListItem key={index} photo={photo} />

const App = () => {
  const [displayModal, setDisplayModal] = useState(false); // Use useState to manage modal display

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        setDisplayModal={setDisplayModal} // Pass setDisplayModal to HomeRoute
      />
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} />}
    </div>
  );
};

export default App;
