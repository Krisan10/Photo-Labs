import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeDisplayModal, photo, toggleFavourite }) => {
  console.log('Selected Photo', photo);
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={() => closeDisplayModal(false)} // Close modal on click
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-profile">
          <p className="photo-details-modal__photographer-info">{photo.user.name}</p>
          <p className="photo-details-modal__photographer-location">{`${photo.location.city}, ${photo.location.country}`}</p>
        </div>
      </div>
      {photo.similar_photos && photo.similar_photos.length > 0 && (
        <div className="photo-details-modal__similar-photos">
          <h2>Similar Photos</h2>
          <PhotoList 
            photos={photo.similar_photos} 
            favouritePhotos={{}} // Add this if similar photos don't need to be favorited
            toggleFavourite={() => {}} // Provide an empty function if favoriting isn't needed
            setDisplayModal={() => {}} // Provide an empty function if modal handling isn't needed
            setSelectedPhoto={() => {}} // Provide an empty function if photo selection isn't needed
          />
        </div>
      )}
      <PhotoFavButton 
        isFavourite={photo.isFavourite} 
        onClick={() => toggleFavourite(photo.id)} 
      />
    </div>
  );
};

export default PhotoDetailsModal;
