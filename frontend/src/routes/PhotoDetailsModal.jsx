import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeDisplayModal }) => {
  console.log('closeDisplayModal:', closeDisplayModal);
  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={() => closeDisplayModal(false)} // Close modal on click
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
