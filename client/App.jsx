import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <div className={'app'}>
        hello world
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