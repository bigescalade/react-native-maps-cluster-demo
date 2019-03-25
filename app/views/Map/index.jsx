import React from 'react'
import MapView from 'react-native-map-clustering'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import places from '../../helpers/places'
import * as styles from './styles'

const Map = () => {
  const mapStyle = {
    flex: 1,
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
        {places.map(place => (
          <Marker coordinate={{ latitude: place.lat, longitude: place.long }} cluster />
        ))}
      </MapView>
    </View>
  )
}

export default Map
