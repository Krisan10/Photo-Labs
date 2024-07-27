import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeDisplayModal, photo }) => {
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
    </div>
  );
};

export default PhotoDetailsModal;
