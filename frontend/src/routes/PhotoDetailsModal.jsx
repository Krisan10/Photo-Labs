import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeDisplayModal, photo, favouritePhotos, toggleFavourite, allPhotos }) => {
  if (!photo) {
    console.error('No photo data available.');
    return null;
  }

  const locationCity = photo.location?.city || 'Unknown city';
  const locationCountry = photo.location?.country || 'Unknown country';
  const { user = {} } = photo;
  const { username = 'Unknown User', profile = '', name = 'Unknown Name' } = user;
  const imageUrl = photo.urls?.regular || 'fallback-image-url.jpg';
  const similarPhotos = allPhotos.filter(p => p.topic === photo.topic && p.id !== photo.id);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button 
          className="photo-details-modal__close-button" 
          onClick={() => closeDisplayModal(false)}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__image-container">
        <PhotoFavButton 
          isFavourite={!!favouritePhotos[photo.id]} 
          onClick={() => toggleFavourite(photo.id)} 
          className="photo-details-modal__fav-icon" 
        />
        <img 
          src={imageUrl} 
          alt={`Photo by ${username}`} 
          className="photo-details-modal__image" 
          style={{ display: imageUrl ? 'block' : 'none' }} 
        />
      </div>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__photographer-profile">
          <img 
            src={profile} 
            alt={`${username}'s profile`} 
            className="photo-details-modal__user-profile" 
            style={{ display: profile ? 'block' : 'none' }} 
          />
          <div className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__photographer-name">{name}</p>
            <p className="photo-details-modal__photographer-location">{`${locationCity}, ${locationCountry}`}</p>
          </div>
        </div>
      </div>
      <div className='photo-details-modal__similar'><h2>Similar Photos</h2></div>
      {similarPhotos.length > 0 && (
        <div className="photo-details-modal__more-photos">
          <PhotoList 
            photos={similarPhotos} 
            favouritePhotos={favouritePhotos}
            toggleFavourite={toggleFavourite}
            setDisplayModal={closeDisplayModal}
            setSelectedPhoto={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
