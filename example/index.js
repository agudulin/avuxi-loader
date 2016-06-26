import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GoogleMap from 'google-map-react'

import avuxi from '../index'
import { AVUXI_API_KEY, GOOGLE_API_KEY } from './config.local'

class Map extends Component {
  constructor (props) {
    super(props)

    this.onGoogleApiLoaded = this.onGoogleApiLoaded.bind(this)
  }

  onGoogleApiLoaded ({ map, maps }) {
    avuxi(AVUXI_API_KEY, map)
  }

  render () {
    const { center, key, zoom } = this.props

    return (
      <GoogleMap
        bootstrapURLKeys={{ key }}
        defaultCenter={center}
        defaultZoom={zoom}
        onGoogleApiLoaded={this.onGoogleApiLoaded}
        yesIWantToUseGoogleMapApiInternals
      />
    )
  }
}

Map.defaultProps = {
  key: GOOGLE_API_KEY,
  center: { lat: 59.938043, lng: 30.337157 },
  zoom: 9,
  greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
}

ReactDOM.render(<Map />, document.querySelector('#content'))

