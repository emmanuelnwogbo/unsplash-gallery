import {
  GET_PHOTOS,
  GET_PHOTOS_PENDING,
  OPEN_PHOTO_MODAL,
  CLOSE_PHOTO_MODAL
} from './constants';

const InitialState = {
  photos: [],
  searching: false,
  modal_closed: true
}

export const photosReducer = (state=InitialState, action={}) => {
  switch(action.type) {
    case GET_PHOTOS:
      return Object.assign({}, state, {
        photos: action.payload,
        searching: false
      });
    case GET_PHOTOS_PENDING:
      return Object.assign({}, state, {
        photos: [],
        searching: true
      });
    case OPEN_PHOTO_MODAL:
      return Object.assign({}, state, {
        modal_closed: false,
        data: action.payload
      });
      case CLOSE_PHOTO_MODAL:
        return Object.assign({}, state, {
          modal_closed: true
      });      
    default:
      return state;
  }
}

export const photoView = (state=InitialState, action={}) => {
  switch(action.type) {
    case OPEN_PHOTO_MODAL:
      return Object.assign({}, state, {
        modal_closed: false,
        data: action.payload
      });
    case CLOSE_PHOTO_MODAL:
      return Object.assign({}, state, {
        modal_closed: true
      });
    default:
      return state;
  }
}