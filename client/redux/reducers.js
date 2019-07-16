import {
  GET_PHOTOS,
  GET_PHOTOS_PENDING
} from './constants';

const InitialState = {
  photos: [],
  searching: false
}

export const photosReducer = (state=InitialState, action={}) => {
  switch(action.type) {
    case GET_PHOTOS:
      return Object.assign({}, state, {
        photos: action.payload.data,
        searching: false
      });
    case GET_PHOTOS_PENDING:
      return Object.assign({}, state, {
        photos: action.payload.data,
        searching: true
      });
    default:
      return state;
  }
}