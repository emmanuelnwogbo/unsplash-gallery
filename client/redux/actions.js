import {
  GET_PHOTOS,
  OPEN_PHOTO_MODAL,
  CLOSE_PHOTO_MODAL,
  SET_SEARCH_TERM,
  SHOW_SEARCH_WORDS,
  GET_PHOTOS_SEARCH,
  GET_PHOTOS_SEARCH_PENDING
} from './constants';

const baseUri = `https://mysterious-gorge-83246.herokuapp.com` || `http://localhost:5000`

export const getPhotos = (count, start) => dispatch => {
  fetch(`${baseUri}/api/photos?count=${count}&start=${start}`)
    .then(response => response.json())
    .then(data => {
      console.log(data, 'getting photos');
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

export const setSearchTerm = (value, count, start) => dispatch => {
  if (start === 1) {
    dispatch({ type: SHOW_SEARCH_WORDS });
    dispatch({ type: GET_PHOTOS_SEARCH_PENDING });
    dispatch ({
      type: SET_SEARCH_TERM,
      payload: value
    });
  }
  fetch(`${baseUri}/api/photos/search?searchterm=${value}&count=${count}&start=${start}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: GET_PHOTOS_SEARCH,
        payload: data
      })
    })    
    .catch(error => {
      console.log(error)
    });
}

//http://localhost:5000/api/photos/search?searchterm=dog&count=10&start=1