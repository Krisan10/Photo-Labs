import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeDisplayModal, photo, favouritePhotos, toggleFavourite }) => {
  console.log('Selected Photo', photo);
  if (!photo) return null;

  //In case there is no location set
  const locationCity = photo.location?.city || 'Unknown city';
  const locationCountry = photo.location?.country || 'Unknown country';

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button 
          className="photo-details-modal__close-button" 
          onClick={() => closeDisplayModal(false)} // Close modal on click
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <PhotoFavButton 
          isFavourite={!!favouritePhotos[photo.id]} 
          onClick={() => toggleFavourite(photo.id)} 
        />
      </div>
      <div className="photo-details-modal__content">
        <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-profile">
          <p className="photo-details-modal__photographer-info">{photo.user.name}</p>
          <p className="photo-details-modal__photographer-location">{`${locationCity}, ${locationCountry}`}</p>
        </div>
      </div>
      {photo.similar_photos && photo.similar_photos.length > 0 && (
        <div className="photo-details-modal__similar-photos">
          <h2>Similar Photos</h2>
          <PhotoList 
            photos={photo.similar_photos} 
            favouritePhotos={favouritePhotos}
            toggleFavourite={toggleFavourite}
            setDisplayModal={() => {}} // Provide an empty function if setDisplayModal is not needed
            setSelectedPhoto={() => {}} // Provide an empty function if setSelectedPhoto is not needed
          />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
