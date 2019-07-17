import React, { Suspense, lazy, Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';

import { getPhotos, setSearchTerm } from './redux/actions';
import './scss/components/app.scss'

const Photo = lazy(() => import('./components/Photo'));
import PhotoView from './components/PhotoView';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 30,
      start: 1,
      photos: [],
      searchTerm: null
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

  returnSearching = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return items.map(item => {
      return (
        <div className={'photo'} key={item}></div>
      )
    })
  }

  getMorePhotos = () => {
    if (this.state.searchTerm !== null) {
      if (this.state.photos.length === this.props.state.total) {
        return;
      }
      return this.setState(prevState => {
        return {
          start: prevState.start + prevState.count
        }
      }, () => this.props.setSearchTerm(this.state.count, this.state.start));
    }

    this.setState(prevState => {
      return {
        start: prevState.start + prevState.count
      }
    }, () => this.props.getPhotos(this.state.count, this.state.start));
  }

  handleSearch = (e) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      this.setState({
        photos: [],
        count: 30,
        start: 1,
        searchTerm: event.target.value
      }, () => {
        console.log(this.state, 'after enter click');
        this.props.setSearchTerm(this.state.searchTerm, this.state.count, this.state.start)
      })
    }
  }

  componentDidMount() {
    console.log(this.props, 'these are app props check here')
    window.scrollTo(0, 0)
    const { count, start } = this.state;
    this.props.getPhotos(count, start);
    document.querySelector('.app__grid').parentElement.style.overflow = 'hidden';
    document.querySelector('.app__grid').parentElement.style.transform = `translateY(-5rem)`;

    if (window.matchMedia("(max-width: 600px)").matches) {
      document.querySelector('.app__grid').parentElement.style.transform = `translateY(-2rem)`;
    }
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
          {this.props.search_state.searchwordsShown ? <div className={'app__search--topic'}><p>{this.props.search_state.searching ? 'Searching for' : `${this.props.state.total} Results for`} <span>{`${`"${this.props.search_state.searchTerm}"`}`}</span></p></div> : <span></span>}
          <div className={'app__search__inputarea'}>
            <span className={'app__search__inputarea--svg'}>
              <svg>
                <use xlinkHref="./imgs/sprite.svg#icon-magnifying-glass"/>
              </svg>
            </span>
            <input placeholder={'Search for photo'} 
              className={'app__search__inputarea--input'}
              onKeyDown={this.handleSearch}/>
          </div>
        </div>
        <InfiniteScroll 
          dataLength={this.state.photos.length}
          next={this.getMorePhotos}
          hasMore={true}
          loader={
            <div className={'app__loader'}>
              <div className={'app__loader--spinner'}></div>
            </div>
          }>
            <div className={'app__grid'}>{this.props.search_state.searching ? this.returnSearching() : this.returnPhotos()}</div>
        </InfiniteScroll>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.photosReducer,
    search_state: state.search
  }
}

export default connect(mapStateToProps, { getPhotos, setSearchTerm })(App);