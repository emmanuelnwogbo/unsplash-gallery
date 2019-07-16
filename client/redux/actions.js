import {
  GET_PHOTOS,
  GET_PHOTOS_PENDING
} from './constants';

export const getPhotos = () => dispatch => {
  dispatch({ type: GET_PHOTOS_PENDING });
  return {
    type: GET_PHOTOS,
    payload: data
  }
}