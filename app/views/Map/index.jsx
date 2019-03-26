import React from 'react'
import MapView from 'react-native-map-clustering'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import places from '../../helpers/places'
import * as styles from './styles'

const Map = () => {
  const mapStyle = {
    flex: 1,
  }

  const randomNumberGenerator = (min, max) => (Math.random() * (max - min) + min).toFixed(6)

  const createMarkers = () => {
    const arr = []
    const latMin = -37.84
    const latMax = -37.79
    const longMin = 144.94
    const longMax = 144.99

    for (let i = 0; i < 100; i += 1) {
      arr.push(
        <Marker
          coordinate={{
            latitude: randomNumberGenerator(latMin, latMax),
            longitude: randomNumberGenerator(longMin, longMax),
          }}
          cluster
        />,
      )
    }

    return arr
  }

  const { View } = styles
  return (
    <View>
      <MapView
        clustering
        // provider={PROVIDER_GOOGLE}
        region={{
          latitude: -37.813629,
          longitude: 144.963058,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={mapStyle}
      >
        {createMarkers()}
      </MapView>
    </View>
  )
}

export default Map
