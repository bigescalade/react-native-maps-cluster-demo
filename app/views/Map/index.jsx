import React from 'react'
import { Text } from 'react-native'
import MapView from 'react-native-maps'

import * as styles from './styles'

const Map = () => {
  const mapStyle = {
    flex: 1,
  }

  const { View } = styles
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: -37.813629,
          longitude: 144.963058,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        style={mapStyle}
      />
    </View>
  )
}

export default Map
