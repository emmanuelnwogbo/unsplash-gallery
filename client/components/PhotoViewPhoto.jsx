import React from 'react';

const PhotoViewPhoto = ({ url }) => {
  return (
    <figure className={'photoview__body--fig'}>
      <img src={url}/>
    </figure>
  )
}

export default PhotoViewPhoto;