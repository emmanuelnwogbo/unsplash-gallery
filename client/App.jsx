import React, { Suspense, lazy, Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';

import { getPhotos } from './redux/actions';
import './scss/components/app.scss'

const Photo = lazy(() => import('./components/Photo'));
import PhotoView from './components/PhotoView';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 30,
      start: 1,
      photos: []
    }
  }

  returnPhotos = () => {
    let rando = 0;
    return this.state.photos.map(photo => {
      rando+=1;
      return (
        <Suspense fallback={<div className={'photo'}></div>} key={rando}>
          <Photo 
            url={photo.urls.regular}
            fullname={photo.user.name !== null ? `${photo.user.name}` : ''}
            location={photo.user.location !== null ? `${photo.user.location}` : ''}
            openUrl={photo.urls.full}/>
        </Suspense>
      )
    })
  }

  getMorePhotos = () => {
    this.setState(prevState => {
      return {
        start: prevState.start + prevState.count
      }
    }, () => this.props.getPhotos(this.state.count, this.state.start));
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const { count, start } = this.state;
    this.props.getPhotos(count, start);
    document.querySelector('.app__grid').parentElement.style.overflow = 'hidden';
    document.querySelector('.app__grid').parentElement.style.transform = `translateY(-6rem)`
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'next props here')
    if (nextProps.state.photos !== undefined) {
      this.setState(prevState => {
        return {
          photos: [...prevState.photos, ...nextProps.state.photos]
        }
      }, () => console.log(this.state))
    }
  }
  
  render() {
    return (
      <div className={'app'}>
        {!this.props.state.modal_closed ? <PhotoView /> : <div></div>}
        <div className={'app__search'}>
          <span className={'app__search--svg'}>
            <svg>
              <use xlinkHref="./imgs/sprite.svg#icon-magnifying-glass"/>
            </svg>
          </span>
          <input placeholder={'Search for photo'} className={'app__search--input'}/>
        </div>
        <InfiniteScroll 
          dataLength={this.state.photos.length}
          next={this.getMorePhotos}
          hasMore={true}
          loader={
            <div className={'app__loader'}>
              <span>
                <svg>
                  <use xlinkHref="./imgs/sprite.svg#icon-spinner10"/>
                </svg> 
              </span>
            </div>
          }>
            <div className={'app__grid'}>{this.returnPhotos()}</div>
        </InfiniteScroll>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.photosReducer
  }
}

export default connect(mapStateToProps, { getPhotos })(App);