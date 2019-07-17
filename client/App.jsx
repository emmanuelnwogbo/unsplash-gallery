import React, { Suspense, lazy, Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { connect } from 'react-redux';
import { getPhotos } from './redux/actions';
import './scss/components/app.scss'

const Photo = lazy(() => import('./components/Photo'));

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
        <Suspense fallback={<div>wait</div>} key={rando}>
          <Photo url={photo.urls.regular}/>
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
    const { count, start } = this.state;
    this.props.getPhotos(count, start);
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
        <InfiniteScroll 
          dataLength={this.state.photos.length}
          next={this.getMorePhotos}
          hasMore={true}
          loader={<p>loading...</p>}>
            {this.returnPhotos()}
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