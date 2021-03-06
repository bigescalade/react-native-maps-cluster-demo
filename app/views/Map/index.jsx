import React from 'react'
import MapView from 'react-native-map-clustering'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import View from './styles'

const Map = () => {
  const inlineStyles = {
    mapStyles: {
      flex: 1,
    },
  }

  const randomNumberGenerator = (min, max) => Math.random() * (max - min) + min

  const createMarkers = () => {
    const markerArray = []
    const latMin = -37.84
    const latMax = -37.79
    const longMin = 144.94
    const longMax = 144.99

    for (let i = 0; i < 100; i += 1) {
      markerArray.push(
        <Marker
          cluster
          coordinate={{
            latitude: randomNumberGenerator(latMin, latMax),
            longitude: randomNumberGenerator(longMin, longMax),
          }}
          key={`marker_${i.toString()}`}
        />,
      )
    }

    return markerArray
  }

  return (
    <View>
      <MapView
        clustering
        provider={PROVIDER_GOOGLE}
        radius={20}
        region={{
          latitude: -37.813629,
          longitude: 144.963058,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={inlineStyles.mapStyles}
      >
        {createMarkers()}
      </MapView>
    </View>
  )
}

export default Map
