import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../redux/actions';
import '../scss/components/photoview.scss'

const PhotoViewPhoto = lazy(() => import('./PhotoViewPhoto'));

const PhotoView = ({ state, closeModal }) => {
  const toggleModal = (event) => {
    console.log(event.target.id);
    const id = event.target.id;
    if (id === 'photo-view' || id === 'photo-view-close') {
      closeModal();
    }
  };

  const { url, name, location } = state.data;

  return (
    <div className={'photoview'} onClick={toggleModal} id={'photo-view'}>
      <span className={'photoview__close'}>
        <span id={'photo-view-close'}></span>
        <svg>
          <use xlinkHref="./imgs/sprite.svg#icon-x"/>
        </svg>
      </span>
      <div className={'photoview__body'} id={'view-body'}>
        <Suspense fallback={<div className={'photoview__body--fig'}></div>}>
          <PhotoViewPhoto url={url}/>
        </Suspense>
        <div className={'photoview__text'}>
          <h2>{name}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state.photoView
  }
}

export default connect(mapStateToProps, { closeModal })(PhotoView);