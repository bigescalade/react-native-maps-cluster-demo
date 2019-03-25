import React from 'react'
import { StyleSheet, View } from 'react-native'

import Map from '../Map'

const Main = () => (
  <View style={styles.container}>
    <Map />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default Main
