import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/photo.scss'

class Photo extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }
  
  render() {
    return (
      <div className={'photo'}>
        <div className={'photo__text'}>
          <h2>{this.props.fullname}</h2>
          <p>{this.props.location}</p>
        </div>
        <figure>
          <img src={this.props.url}/>
        </figure>
      </div>
    )
  }
}

export default Photo;