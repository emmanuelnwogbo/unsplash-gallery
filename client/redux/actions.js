import {
  GET_PHOTOS,
  GET_PHOTOS_PENDING,
  OPEN_PHOTO_MODAL,
  CLOSE_PHOTO_MODAL
} from './constants';

const baseUri = process.env.BASE_URI || `http://localhost:5000`

export const getPhotos = (count, start) => dispatch => {
  dispatch({ type: GET_PHOTOS_PENDING });
  fetch(`${baseUri}/api/photos?count=${count}&start=${start}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: GET_PHOTOS,
        payload: data
      })
    })    
    .catch(error => {
      console.log(error)
    });
}

export const openModal = (url, name, location) => {
  return {
    type: OPEN_PHOTO_MODAL,
    payload: {
      url,
      name,
      location
    }
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_PHOTO_MODAL
  }
}