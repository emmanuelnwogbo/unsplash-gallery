import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/photo.scss'

class Photo extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className={'photo'}>
        <figure>
          <img src={this.props.url}/>
        </figure>
      </div>
    )
  }
}

export default Photo;