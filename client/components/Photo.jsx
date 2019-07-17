import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openModal } from '../redux/actions';
import '../scss/components/photo.scss'

class Photo extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //console.log(this.props)
  }
  
  render() {
    return (
      <div className={'photo'} onClick={() => this.props.openModal(this.props.openUrl, this.props.fullname, this.props.location)}>
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

function mapStateToProps(state) {
  return {
    state: state.photoView
  }
}

export default connect(mapStateToProps, { openModal })(Photo);