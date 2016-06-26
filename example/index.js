import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GoogleMap from 'google-map-react'

import avuxi from '../index'

class Map extends Component {
  render () {
    return (
      <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    )
  }
}

Map.defaultProps = {
  center: { lat: 59.938043, lng: 30.337157 },
  zoom: 9,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
}

ReactDOM.render(<Map />, document.querySelector('#content'))

