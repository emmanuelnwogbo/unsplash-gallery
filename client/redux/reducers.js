import {
  GET_PHOTOS,
  OPEN_PHOTO_MODAL,
  CLOSE_PHOTO_MODAL,
  SET_SEARCH_TERM,
  SHOW_SEARCH_WORDS,
  GET_PHOTOS_SEARCH,
  GET_PHOTOS_SEARCH_PENDING
} from './constants';

const InitialState = {
  photos: [],
  searching: false,
  modal_closed: true,
  searchTerm: '',
  searchwordsShown: false,
  total: ''
}

export const photosReducer = (state=InitialState, action={}) => {
  switch(action.type) {
    case GET_PHOTOS:
      return Object.assign({}, state, {
        photos: action.payload,
        searching: false
      });
      case GET_PHOTOS_SEARCH_PENDING:
        return Object.assign({}, state, {
          photos: [],
          searching: true
      });
    case GET_PHOTOS_SEARCH:
      return Object.assign({}, state, {
        photos: action.payload.results,
        total: action.payload.total,
        searching: false
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

export const search = (state=InitialState, action={}) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.payload
      });
    case GET_PHOTOS_SEARCH_PENDING:
      return Object.assign({}, state, {
        photos: [],
        searching: true
      });
    case GET_PHOTOS_SEARCH:
      return Object.assign({}, state, {
        photos: action.payload.results,
        total: action.payload.total,
        searching: false
      });
    case SHOW_SEARCH_WORDS:
      return Object.assign({}, state, {
        searchwordsShown: true
      });
    default:
      return state;
  }
}